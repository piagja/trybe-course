const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' }
]

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type)
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals)
      }

      return reject(new Error('Não possui esse tipo de animal.'))
    }, 100)
  })
)

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
)

describe('When animal type exist', () => {
  test('should return the animals list', () => {
    expect.assertions(2)
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco')
      expect(listDogs[1].name).toEqual('Soneca')
    })
  })

  test('Async/Await - When animal type exist', async () => {
    try {
      await getListAnimals('Cat')
    } catch (error) {
      expect(error).toEqual({ error: 'Não possui esse tipo de animal' })
    }
  })
})

getListAnimals('Dog')
