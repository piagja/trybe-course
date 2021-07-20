const onlyNumbers = (number) => {
  for (let i = 0; i < number.length; i += 1) {
    if (typeof number[i] !== 'number') {
      return false
    }
  }
  return true
}

module.exports = onlyNumbers
