const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const sum = async (a, b) => {
  await sleep(10000)
  return a + b
}

const sub = (a, b) => a - b
const mult = (a, b) => a * b
const div = (a, b) => a / b
const modulos = (a, b) => a % b

module.exports = {
  sum,
  sub,
  mult,
  div,
  modulos
}
