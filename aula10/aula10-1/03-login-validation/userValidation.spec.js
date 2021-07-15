const {
  greetingMessage,
  loginErrorMessage,
  verifyCredentials
} = require('./userValidation')

describe('a função verifyCredentials()', () => {
  it('verifica se a função verifyCredentials() é chamada corretamente dependendo do userName e pass', () => {
    expect(verifyCredentials({ userName, pass })).toBe(`Welcome to the system ${userName}`)
  })
})

it('greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`', () => {
  expect(greetingMessage('Lucas')).toBe(
    'Welcome to the system Lucas'
  )
})

it("loginErrorMessage() returns a message in the format: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
  expect(loginErrorMessage('Bob')).toBe(
    'User Bob not found'
  )
})
