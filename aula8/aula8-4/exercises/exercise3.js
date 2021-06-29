const assert = require('assert');
const books = require('./books');

const expectedResult = 43;

function averageAge() {
  const length = books.length;
  const sum = books.reduce((acc, book) => (
    acc + (book.releaseYear - book.author.birthYear)
  ), 0)

  return sum / length;
}

assert.strictEqual(averageAge(), expectedResult);