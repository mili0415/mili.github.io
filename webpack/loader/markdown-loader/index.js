const showdown = require("showdown")
module.exports = function(content, map){
  //1. 把---  ---之间的内容去掉
  var start = content.indexOf("---");
  var end = content.indexOf("---", start + 3) + 3;
  content = content.slice(0, start) + content.slice(end)


  const converter = new showdown.Converter()
  const html = converter.makeHtml(content)
  this.callback(null, html, map)
}