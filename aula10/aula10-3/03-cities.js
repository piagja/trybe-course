let cities = []

function getCities () {
  return cities
}

function retrieveCitiesFromCache () {
  cities.push('Belo Horizonte')
  cities.push('Fortaleza')
}

function requestCities () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities.push('Fortaleza')
      cities.push('Belo Horizonte')
      cities.push('São Paulo')
      cities.push('Recife')
      cities.push('Porto Alegre')
      cities.push('Goiânia')
      cities.push('Manaus')
      cities.push('Piaui')
      resolve()
    }, 200)
  })
}

function removeCity (city) {
  const index = cities.indexOf(city)
  if (index > -1) return cities.splice(index, 1)
}

function isCity (name) {
  return cities.includes(name)
}

function resetCities () {
  cities = []
}

module.exports = {
  getCities,
  retrieveCitiesFromCache,
  requestCities,
  isCity,
  removeCity,
  resetCities
}
