var querystring = require('querystring')
var parse = require('./parse')

module.exports = function (value) {
  if (typeof value !== 'string') {
    throw new TypeError('Expected string, got ' + typeof(value) + '.')
  }
  return parse(querystring.parse(value))
}
