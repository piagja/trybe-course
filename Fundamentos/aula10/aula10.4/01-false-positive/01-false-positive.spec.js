const { expect, test } = require('@jest/globals')

const randomNumber = () => Math.floor(Math.random() * 100)

const divByTwo = () => (randomNumber() % 2) === 0

test('should return true when random number is even', () => {
  console.log(randomNumber())
  expect(divByTwo()).toBe(true)
})
