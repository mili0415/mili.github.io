var common = require('./config.common')
const fs = require('fs')
const path = require('path')


module.exports = function (webpackConfig, redSkull, webpackPlugins) {

  webpackConfig = common(webpackConfig, redSkull, webpackPlugins)

  webpackConfig.devtool = 'source-map'

  const src = redSkull.src
  const dirs = fs.readdirSync(src)
  //添加别名
  dirs.forEach(function(dirname){
    webpackConfig.resolve.alias[dirname] = path.join(src,dirname)
  })
  webpackConfig.resolve.alias["article"] = path.join(src, "../article")

  webpackConfig.resolveLoader.modules.push(path.join(src,'../webpack/loader'))
  //添加loader，按添加顺序逆序执行
  webpackConfig.module.loaders.push({
    test: /\.md$/,
    loader: 'html-loader',
  })
  webpackConfig.module.loaders.push({
    test: /\.md$/,
    loader: 'markdown-loader'
  });

  return webpackConfig
}