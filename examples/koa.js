/*

Start with:

node koa

Go to:

http://localhost:3000/?foo:json={"bar":1,"baz":[null,"zz"]}

Result will be:

{"foo":{"bar":1,"baz":[null,"zz"]}}

*/

var Koa = require('koa')
var jsonquery = require('../koa')

var app = new Koa
app.use(jsonquery)

app.use(function (ctx) {
  ctx.body = ctx.request.query
})

app.listen(3000, function () {
  console.log('Example app listening at http://localhost:3000')
})
