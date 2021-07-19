const {
  getCities,
  removeCity,
  retrieveCitiesFromCache,
  requestCities,
  isCity,
  resetCities
} = require('./03-cities')

describe('Retrieving cities from cache', () => {
  beforeEach(() => {
    retrieveCitiesFromCache()
  })

  afterEach(() => {
    resetCities()
  })

  it('should have one city left when i remove a city', () => {
    removeCity('Belo Horizonte')
    expect(getCities().length).toBe(1)
  })

  it('should have two cities after retrieving from cache', () => {
    expect(getCities().length).toBe(2)
  })
})

describe('Requesting cities from api', () => {
  beforeEach(() => {
    return requestCities()
  })

  afterEach(() => {
    resetCities()
  })

  it('should have eight cities after requestiong from api', () => {
    expect(getCities().length).toBe(8)
  })

  it('should have the city Belo Horizonte', () => {
    expect(isCity('Belo Horizonte')).toBeTruthy()
  })

  it('should have the city Fortaleza', () => {
    expect(isCity('Fortaleza')).toBeTruthy()
  })

  it('should have the city São Paulo', () => {
    expect(isCity('São Paulo')).toBeTruthy()
  })

  it('should have the city Recife', () => {
    expect(isCity('Recife')).toBeTruthy()
  })

  it('should have the city Porto Alegre', () => {
    expect(isCity('Porto Alegre')).toBeTruthy()
  })

  it('should have the city Goiania', () => {
    expect(isCity('Goiânia')).toBeTruthy()
  })

  it('should have the city Manaus', () => {
    expect(isCity('Manaus')).toBeTruthy()
  })

  it('should have the city Piauí', () => {
    expect(isCity('Piaui')).toBeTruthy()
  })
})
