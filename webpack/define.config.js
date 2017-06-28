const fs = require('fs')
const path = require('path')

const ARTICLE_PATH = path.join(__dirname,'..','article')

const getAllMarkdownFile = function(filePath){
  /**
   1. 查找atricle下所有的md文件
  **/

  function walkFile(filePath,callback){
    const stat = fs.statSync(filePath)
    let result = []
    if(stat.isDirectory()){

      const dirs = fs.readdirSync(filePath)
      dirs.forEach(p =>{
        const myPath = path.join(path.join(filePath,p))
        const pStat = fs.statSync(myPath)
        if(pStat.isDirectory()){
          result = result.concat(walkFile(myPath))
        }else{
          result.push(myPath)
        }

      })
    }else{
      result.push(filePath)
    }
    return result
  }

  /**
   * 2.取到.md文件
  **/
  const markdownFile = walkFile(filePath).filter((p)=>{
    const extname = path.extname(p) //获取后缀名
    return extname.toLowerCase() == '.md'
  })
  /**
   * 3.读取文件内容，查找文件内容里标示的创建时间，如果没有，默认为今天
  **/
  const result = markdownFile.map((file) => {
    const content = fs.readFileSync(file,{
      charset:'utf-8'
    }).toString()
    const defaultDate = new Date()
    const createTimeStr = content.split('\n').find(str => {
      if(str.indexOf('createTime') > 0){
        return true
      }
      return false
    }) || `:${defaultDate.toLocaleDateString()} ${defaultDate.toLocaleTimeString()}`
    const createTimeArr = createTimeStr.split(":")
    createTimeArr.shift()
    const createTime = createTimeArr.join(":").trim()
    const fileName = path.basename(file,".md")
    return {
      title:'',
      createTime
    }
  })

  /**
   * 按时间大小排序
  **/

  return result.sort((a1,a2)=>{
    return a2.createTime - a1.createTime
  })
}


module.exports = function(redSkull, env){

  const list = getAllMarkdownFile(ARTICLE_PATH)
  /**
   * list示例
   * [{
   *   title: '',
   *   createTime: ''
   * }]
  **/
  return{
    MY_ARTICLE_DATA: JSON.stringify(list)
  }
}