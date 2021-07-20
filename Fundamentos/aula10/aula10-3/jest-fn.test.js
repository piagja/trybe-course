function randomDice (sides) {
  const random = Math.random()
  return Math.random(random * sides)
}

test('Testando se a função foi chamada', () => {
  randomDice = jest.fn().mockReturnValue(10)
  const result = randomDice(1)
  expect(randomDice).toHaveBeenCalled()
  expect(result).toBe(10)
})
