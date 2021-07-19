// test('should not pass', (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5)
//     console.log('Should fail!')
//     done()
//   }, 500)
// })

const { expect } = require('@jest/globals')

const sumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b
    callback(result)
  }, 500)
}

test('should return sum 15', (done) => {
  sumNumbers(5, 10, (result) => {
    expect(result).toBe(15)
    done()
  })
})
