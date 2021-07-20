const { getUserName } = require('./02-find-userID')

// promises + resolves + rejects
// describe('should retrieve user id', () => {
//   expect.assertions(2)
//   it('validate user id', () => {
//     expect(getUserName(4)).resolves.toEqual('Gustavo')
//     expect(getUserName(5)).resolves.toEqual('João')
//   })
// })

// describe('when passed a wrong id, should return an error', () => {
//   it('should return an error message', () => {
//     return getUserName(2).catch(error => {
//       expect(error).toEqual(new Error('User with id 2 not found.'))
//     }
//     )
//   })
// })

// async/await

describe('async/await - should retrieve user id', () => {
  it('validate user id', async () => {
    expect.assertions(1)
    const userName = await getUserName(4)
    expect(userName).toEqual('Gustavo')
  })
})

describe('async-await - should return an error when no id is passed', () => {
  it('should return an error message', async () => {
    expect.assertions(1)
    try {
      await getUserName(2)
    } catch (error) {
      expect(error).toEqual(new Error('User with id 2 not found.'))
    }
  })
})
