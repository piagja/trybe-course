const removeDrinkFlavor = require('./remove-flavor')

describe('1) the function removeDrinkFlavor()', () => {
  it('should be a function', () => {
    expect(typeof removeDrinkFlavor).toBe('function')
  })

  it('should remove water', () => {
    const drinks = ['Water', 'Soda', 'Energetic Drink', 'Coffee', 'Apple Juice']
    expect(['Soda', 'Energetic Drink', 'Coffee', 'Apple Juice'])
      .toEqual(removeDrinkFlavor(drinks, 'Water'))
  })

  it('should remove soda', () => {
    const drinks = ['Water', 'Soda', 'Energetic Drink', 'Coffee', 'Apple Juice']
    expect(['Water', 'Energetic Drink', 'Coffee', 'Apple Juice'])
      .toEqual(removeDrinkFlavor(drinks, 'Soda'))
  })

  it('should remove energetic drink', () => {
    const drinks = ['Water', 'Soda', 'Energetic Drink', 'Coffee', 'Apple Juice']
    expect(removeDrinkFlavor(drinks, 'Energetic Drink')).not.toContain('Energetic Drink')
  })
})
