var parse = require('./parse')

module.exports = function (ctx, next) {
  parse(ctx.request.query)
  return next()
}
