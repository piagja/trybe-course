const math = require('./math')
jest.mock('./math')

test('#somar', () => {
  math.sum.mockImplementation((a, b) => a + b)
  math.sum(1, 2)

  expect(math.sum).toHaveBeenCalled()
  expect(math.sum).toHaveBeenCalledTimes(1)
  expect(math.sum).toHaveBeenCalledWith(1, 2)
  expect(math.sum(1, 2)).toBe(3)
})
