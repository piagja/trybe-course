const libStats = require('')

test('(spyOn)Testa a função, quantidade de vezes, parâmetros e retornos', () => {
  const spyDestreza = jest.spyOn(libStats, 'destreza')

  spyDestreza(5)
})
