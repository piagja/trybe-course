const service = require('./service')

test('should return a random color', () => {
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('default call')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call')

  expect(service.randomRgbColor()).toHaveBeenCalledTimes(0)

  expect(service.randomRgbColor()).toBe('first call')
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1)

  expect(service.randomRgbColor()).toBe('second call')
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2)

  expect(service.randomRgbColor()).toBe('default call')
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3)
})
