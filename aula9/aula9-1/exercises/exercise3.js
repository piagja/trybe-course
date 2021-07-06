const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers'
    }
  }
  console.log('Returned planet: ', mars)
}

const timeout = (time) => {
  setTimeout(() => {
    getPlanet() // imprime Marte depois de 4 segundos
  }, time)
}

timeout(4000)
