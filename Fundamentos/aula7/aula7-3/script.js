/**
 * Testes em javascript usando assert()
 */

const assert = require('assert')

// assert.strictEqual(50, 70) // literalmente para pelo erro, 50 não é igual a 70
// assert.strictEqual(50, 50) // continua de boas

// const division = (x, y) => x / y;

// const expected = division(9, 3)
// assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três')


const summationOf = (number) => {
  if (typeof(number) !== 'number') {
    throw new Error('Use only numbers')
  }

  let summation = 0;
  
  for (let index = 0; index < number; index += 1) {
    summation += index;
  }

  return summation
}

assert.strictEqual(typeof(summationOf), 'function', 'This if a function')
assert.strictEqual(summationOf(1), 1)
assert.strictEqual(summationOf(3), 6)
assert.strictEqual(summationOf(5), 15)
assert.strictEqual(summationOf(0), 0)

assert.throws(() => {
  summationOf(0)
});

assert.ok(true)