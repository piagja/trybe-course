const person = {
  firstName: 'Gustavo',
  lastName: 'Moraes',
}

const addAge = {
  age: 32
}

console.log(Object.assign(person, addAge)) /* copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino */
console.log(`Object.keys(): ${Object.keys(person)}`); // extrai as chaves
console.log(`Object.values(): ${Object.values(person)}`); // extrai os valores
console.log(`Object.entries(): ${Object.entries(person)}`); // extrai todas as entradas

console.log('')
console.log('--------- SEPARADOR ----------')
console.log('')

// mais exemplos de assign
const book = {
  collection: "The Lord of the Rings",
  book1: 'The Fellowship',
  book2: 'Two Towers',
  book3: 'Return of the King'
}

const bookAuthor = {
  author: 'J. R. R. Tolkien'
}

const nullObject = {}

const newBook = Object.assign(nullObject, book, bookAuthor)
console.log(newBook)