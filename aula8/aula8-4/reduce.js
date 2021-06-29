const numbers = [2, 4, 5, 7, 9, 10, 12, 13, 14, 15]

const onlyEvensWithReduce = numbers.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    return acc + curr
  }

  return acc + 0
}, 0)

const onlyDoubledEvensWithFilter = numbers.filter(number => {
  return number % 2 === 0
}).map(number => number * 2)

const epic = ['A', 'long', 'time', 'ago,', 'in a', 'galaxy', 'far far', 'away']

const epicPhrase = epic.reduce((acc, curr) => {
  return `${acc} ${curr}`
})

const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br'},
  { fullName: 'Ronaldinho Gaucho', email: 'bruxo@futebol.br'},
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br'},
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br'},
]

const newPlayers = players.reduce((acc, curr) => {
  console.log('accumulator: ', acc, 'currentValue: ', curr)
  acc[curr.fullName] = curr.email
  return acc
}, {})