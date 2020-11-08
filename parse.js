module.exports = function (object) {
  if (object === null || typeof object !== 'object') {
    throw new TypeError('Expected object, got ' + typeof(object) + '.')
  }
  for (var name in object) {
    if (name.slice(-5) === ':json') {
      var value = object[name]
      object[name.slice(0, -5)] = typeof value === 'string' ?
        JSON.parse(value) :
        value.map(function (_) { return JSON.parse(_) })
      delete object[name]
    }
  }
  return object
}
