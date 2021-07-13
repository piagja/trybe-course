const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11)

  if (number <= 5) {
    return reject(number)
  }

  resolve(number)
})
  .then(number => `${number} é maior que 5. Venceu =)`)
  .then(msg => console.log(msg))
  .catch(number => console.log(`${number} é menor ou igual a 5. Perdeu =(`))

console.log(promise)
