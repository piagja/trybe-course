const users = {
  4: { name: 'Gustavo' },
  5: { name: 'João' }
}

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) return resolve(users[id])
    else return reject(new Error(`User with id ${id} not found.`))
  })
}

const getUserName = async (userID) => {
  return await findUserById(userID).then(user => user.name)
}

module.exports = {
  getUserName
}
