const math = require('./math')

test('#sum', () => {
  // implementação original
  expect(math.sum(1, 2)).resolves.toBe(3)

  // criando mock e substituindo a implementação para uma subtracao
  const mockSum = jest
    .spyOn(math, 'sum')
    .mockImplementation((a, b) => a - b)

  math.sum(5, 1)
  expect(mockSum).toHaveBeenCalledTimes(1)
  expect(mockSum(5, 1)).toBe(4)
  expect(mockSum).toBeCalledTimes(2)
  expect(mockSum).toHaveBeenCalledWith(5, 1)

  // resentado o mock
  math.sum.mockRestore()
  expect(math.sum(1, 2)).toBe(3)
})
