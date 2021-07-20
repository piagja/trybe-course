const api = require('./api')

describe('testing the request', () => {
  const apiURL = jest.spyOn(api, 'fetchURL')
  afterEach(apiURL.mockReset)

  test('should return a resolved promise', async () => {
    apiURL.mockResolvedValue('request resolved successfully')

    apiURL()
    expect(apiURL).toHaveBeenCalled()
    expect(apiURL).toHaveBeenCalledTimes(1)
    expect(apiURL()).resolves.toBe('request resolved successfully')
    expect(apiURL).toHaveBeenCalledTimes(2)
  })

  test('should test if the request had been rejected', () => {
    apiURL.mockRejectedValue('the request has been rejected')

    expect(apiURL).toHaveBeenCalledTimes(0)
    expect(apiURL()).rejects.toMatch('the request has been rejected')
    expect(apiURL).toHaveBeenCalledTimes(1)
  })
})
