const assert = require("assert");
const books = require("./books");

// Exercicio 6
// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.


const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  return books
  .filter(book => book.releaseYear < 1961)
  .map(book => book.name)
  .sort((a, b) => a.name - b.name)
}

assert.deepStrictEqual(oldBooks(), expectedResult);