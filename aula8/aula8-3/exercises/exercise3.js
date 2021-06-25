const assert = require("assert");
const books = require("./books");

// Exercício 3
// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const expectedResult = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: { name: "George R. R. Martin", birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: { name: "J. R. R. Tolkien", birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: { name: "Isaac Asimov", birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: { name: "Frank Herbert", birthYear: 1920 },
    releaseYear: 1965,
  },
];

function fantasyOrScienceFiction() {
  books.filter((book) => {
      if (book.releaseYear < 1961) {
        return {
          id: book.id,
          name: book.name,
          genre: book.genre,
          author: { name: book.author.name, birthYear: book.author.birthYear },
          releaseYear: book.releaseYear,
        };
      }
    }).sort((a, b) => a.releaseYear - b.releaseYear);
}

assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);
