const uppercase = (name, callback) => {
  callback(name.toUpperCase())
}

describe('the function uppercase()', () => {
  it('should return the name as a uppercase format', () => {
    expect(uppercase('José', (name) => {
      expect(name).toEqual('JOSÉ')
    }
    ))
  })
})
