const assert = require('assert');
const books = require('./books');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((acc, curr, index, array) => {
    if (index === array.length - 1) return `${acc} ${curr.author.name}.`.trim()
    return `${acc} ${curr.author.name},`.trim()
  }, '')
}

assert.strictEqual(reduceNames(), expectedResult);