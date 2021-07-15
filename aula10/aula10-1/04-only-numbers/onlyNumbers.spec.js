const onlyNumbers = require('./onlyNumbers')

describe('verifies onlyNumbers() suit tests', () => {
  it('1) should be a function', () => {
    expect(typeof onlyNumbers).toBe('function')
  })

  it('2) should verify if only numbers is passed to array', () => {
    expect(onlyNumbers([1, 2, 3])).toEqual(true)
  })

  it('3) should verify if not only numbers is passed to array', () => {
    expect(onlyNumbers([1, 'a', 2, 3])).toEqual(false)
  })
})
