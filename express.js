var parse = require('./parse')

module.exports = function (req, res, next) {
  parse(req.query)
  return next()
}
