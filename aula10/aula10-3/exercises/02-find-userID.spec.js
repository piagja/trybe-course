const { getUserName } = require('./02-find-userID')

describe('should retrieve user id', () => {
  expect.assertions(2)
  it('validate user id', () => {
    expect(getUserName(4)).resolves.toEqual('Gustavo')
    expect(getUserName(5)).resolves.toEqual('João')
  })
})

describe('when passed a wrong id, should return an error', () => {
  it('should return an error message', () => {
    return getUserName(2).catch(error => {
      expect(error).toEqual(new Error('User with id 2 not found.'))
    }
    )
  })
})
