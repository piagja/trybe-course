const removeDrinkFlavor = (array, remove) => {
  array.splice(array.indexOf(`${remove}`), 1)
  return array
}

module.exports = removeDrinkFlavor
