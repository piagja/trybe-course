const assert = require("assert");
const books = require("./books");

// Exercicio 5
// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const expectedResult = [
  "Frank Herbert",
  "George R. R. Martin",
  "Isaac Asimov",
  "J. R. R. Tolkien",
];

function fantasyOrScienceFictionAuthors() {
  return books
    .filter((book) => book.genre !== 'Terror' ? true : false)
    .map((book) => book.author.name)
    .sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
