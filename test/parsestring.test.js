var parsestring = require('../parsestring')

test('simple', function () {
  expect(parsestring('x:json={"foo":true,"bar":[1,null,"a"]}')).toEqual({
    x: {
      foo: true,
      bar: [ 1, null, 'a' ]
    }
  })
})

test('same key', function () {
  expect(parsestring('x:json="a"&x:json="b"')).toEqual({
    x: [ 'a', 'b' ]
  })
})
