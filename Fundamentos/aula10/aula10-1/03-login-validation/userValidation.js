const greetingMessage = (user) => {
  return `Welcome to the system ${user}`
}

const loginErrorMessage = (user) => {
  return `User ${user} not found`
}

const user = {
  userName: 'Gustavo',
  password: 1234
}

const verifyCredentials = ({ userName, password }) => {
  if (password === 1234 && userName === 'Gustavo') {
    return greetingMessage(userName)
  } else {
    return loginErrorMessage(userName)
  }
}

const { userName, password } = user

module.exports = {
  greetingMessage,
  loginErrorMessage,
  verifyCredentials,
  userName,
  password
}
