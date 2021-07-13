// fazer com que uma função aguarde a outra, passa um callback como parametro
// ai a função1 vira uma HoF assíncrona
const funcao1 = (callback) => {
  setTimeout(() => {
    console.log('1 - Whopper')
    callback()
  }, Math.random() * 5000)
}
const funcao2 = () => {
  setTimeout(() => {
    console.log('2 - X Saladão raíz')
  }, Math.random() * 5000)
}

console.log('LANCHES')

funcao1(funcao2)

console.log('FIM')
