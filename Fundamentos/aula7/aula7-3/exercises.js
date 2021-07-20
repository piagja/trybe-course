/** Parte 1 */
// const assert = require('assert');

// const sum = (a, b) => {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('Parameter must be numbers')
//   }

//   return a + b;
// }

// assert.strictEqual(sum(4, 5), 9)
// assert.strictEqual(sum(0, 0), 0)
// assert.strictEqual(sum(4, '5'), 9)

/** Parte 2 */

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// console.log(assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3)), [1, 2, 3, 4])

// implemente seus testes aqui

/** Parte 3 */

// const assert = require('assert');

// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1);
//       index -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

// // implemente seus testes aqui

// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4])
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4])

/** Parte 4 */

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

// implemente seus testes aqui

// assert.strictEqual(myFizzBuzz(15))
// assert.strictEqual(myFizzBuzz(5))
// assert.strictEqual(myFizzBuzz(3))
assert.deepStrictEqual(myFizzBuzz(false))