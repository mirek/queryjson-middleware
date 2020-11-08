/*

Start with:

node express

Go to:

http://localhost:3000/?foo:json={"bar":1,"baz":[null,"zz"]}

Result will be:

{"foo":{"bar":1,"baz":[null,"zz"]}}

*/

var express = require('express')
var jsonquery = require('../express')

var app = express()
app.use(jsonquery)

app.get('/', function (req, res) {
  res.send(req.query)
})

app.listen(3000, function () {
  console.log('Example app listening at http://localhost:3000')
})
