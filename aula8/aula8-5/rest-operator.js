const assert = require('assert');

const restWithReduce = (...args) => args.reduce((acc, curr) => acc + curr);

// Passe numeros como parametros o suficiente para o resultado ser 12

assert.strictEqual(restWithReduce(3, 3, 6), 12)