// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":
// Fixação
// let fruits = [3, 4, 10, 1, 12];
// let sum = 0
// for (let index = 0; index < fruits.length; index += 1) {
//   sum += fruits[index]
// }

// if (sum > 15) {
//   console.log(sum)
// } else if (sum <= 15) {
//   console.log('valor menor que 16')
// }

// 1. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5
/* *****
   *****
   *****
   *****
   ***** */
console.log('\nExercicio 2')
function quadrado(num) {
  let asterisco = '*'
  let novaLinha = ''

  if (num <= 0) {
    console.log('Não é possível executar com zero ou número negativo')
  } else {
    for (let linha = 0; linha < num; linha += 1) {
      novaLinha += asterisco
    }

    for (let linha = 0; linha < num; linha += 1) {
      console.log(novaLinha)
    }
  }
}

quadrado(2)

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// Copiar
// n = 5

// *
// **
// ***
// ****
// *****
console.log('\nExercicio 2')
function triangulo(num) {
  let asterisco = '*'
  let novaLinha = ''

  if (num <= 0) {
    console.log('Não é possível executar com zero ou número negativo')
  } else {
    for (let linha = 0; linha < num; linha += 1) {
      console.log(novaLinha)
      novaLinha = novaLinha + asterisco
    }
  }
}

triangulo(10)