const math = require('./math')
jest.mock('./math')

describe('mocking a sort of math functions', () => {
  test('should mock the subtrair fn', () => {
    const subMock = jest.fn(math.subtrair)

    subMock.mockImplementation((a, b) => a - b)
    subMock(3, 2)

    expect(subMock).toHaveBeenCalled()
    expect(subMock).toHaveBeenCalledTimes(1)
    expect(subMock).toHaveBeenCalledWith(3, 2)
    expect(subMock(3, 2)).toBe(1)
  })

  test('should mock the multiplicar fn with default value of 10', () => {
    const multiMock = jest.fn(math.multiplicar).mockReturnValue(10)

    multiMock(5, 2)

    expect(multiMock).toHaveBeenCalled()
    expect(multiMock).toHaveBeenCalledTimes(1)
    expect(multiMock(5, 2)).toBe(10)
  })

  test('should mock the somar fn with two params and test the call, result and params', async () => {
    const sumMock = jest.spyOn(math, 'somar')

    sumMock.mockResolvedValue(3)

    sumMock(1, 2)
    expect(sumMock).toHaveBeenCalled()
    expect(sumMock).toHaveBeenCalledTimes(1)
    expect(sumMock).toHaveBeenCalledWith(1, 2)
    await expect(sumMock(1, 2)).resolves.toBe(3)
  })

  test('should mock the dividir fn with default value of 15, and for first and second call, 2 and 5, respectively', () => {
    const divMock = jest.fn(math.dividir)
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5)

    expect(divMock).toHaveBeenCalledTimes(0)

    expect(divMock(10, 5)).toBe(2)
    expect(divMock).toHaveBeenCalledTimes(1)

    expect(divMock(10, 2)).toBe(5)
    expect(divMock).toHaveBeenCalledTimes(2)

    expect(divMock(30, 2)).toBe(15)
    expect(divMock).toHaveBeenCalledTimes(3)
  })

  test('should mock subtrair fn with default value of 20, and at the end of the fn, must restore the original implementation', () => {
    const subMock = jest
      .spyOn(math, 'subtrair')
      .mockImplementation((a, b) => a * b)
      .mockReturnValue(20)

    expect(subMock(10, 2)).toBe(20)
    expect(subMock).toHaveBeenCalled()
    expect(subMock).toHaveBeenCalledTimes(1)
    expect(subMock).toHaveBeenCalledWith(10, 2)

    // restoring the original implementation
    subMock.mockRestore()
    subMock.mockReturnValue(8)

    // implementação original
    expect(subMock(10, 2)).toBe(8)
    expect(subMock).toHaveBeenCalled()
    expect(subMock).toHaveBeenCalledTimes(1)
    expect(subMock).toHaveBeenCalledWith(10, 2)
  })
})
