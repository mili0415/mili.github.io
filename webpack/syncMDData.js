/*

 *webpack插件，同步article下的文件，并且生成一个文件、文件格式为
  export default[{
    title:'',
    createTime:'',
    component: () =>
    filePath:''
  }]
  引入path,fs

*/
const fs = require('fs')
const path = require('path')
const watch = require('watch')
const getAllArticle = require('./getAllArticle')
const ARTICLE_PATH = path.join(__dirname,'../article')
const WRITE_FILE_PATH = path.join(__dirname,'../src/data','article.js')
var curContent = "",
    isWatch = false
function SyncMDDataPlugin(options){
  isWatch = (options && options.watch) || false
}

function articleToCode(article){
  const result = []
  const keys = Object.keys(article)
  keys.forEach((k) => {
    result.push(`\t\t${k}: ${JSON.stringify(article[k])}`)
  })
  result.push(`\t\tcomponent: () => System.import('article/${article.path}')`)
  return `\t{\n${result.join(',\n')}\n\t}`
}

function getFileContent(){
  let fileList = getAllArticle()
  let result = []
  if(fileList && fileList.length){
    result = fileList.map(v => articleToCode(v))
  }

  return `export default [\n${result.join(',\n')}\n]`
}

function writeData(){
  const content = getFileContent()
  if(curContent == content){
    return false
  }
  curContent = content

  fs.writeFileSync(WRITE_FILE_PATH, content, {
    charset: 'utf-8'
  })
}

SyncMDDataPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function() {
    writeData()
    if(isWatch){
      watch.watchTree(ARTICLE_PATH, function (f, curr, prev) {
        writeData()
      })
    }
  })

}
module.exports = SyncMDDataPlugin