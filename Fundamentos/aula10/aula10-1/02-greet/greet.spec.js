const greet = require('./greet')

test('It should greet a person name', () => {
  expect(greet('Gustavo')).toBe('Hello Gustavo, how are you?')
})
