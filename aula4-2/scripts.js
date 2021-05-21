// exercicio 1
// Obtenha o valor "Serviços" do array menu :

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// Exercício 2
// Procure o índice do valor "Portfólio" do array menu :

// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);

// Exercício 3
// Adicione o valor "Contato" no final do array menu :
// menu.push('Contato')
// console.log(menu)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
console.log('\nExercício 1')
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index])
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let totalSum = 0;
console.log('\nExercício 2')
for (let index = 0; index < numbers.length; index += 1) {
  totalSum += numbers[index]
}
console.log(totalSum);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
console.log('\nExercicio 3')
totalSum = 0
for (let index = 0; index < numbers.length; index += 1) {
  totalSum += numbers[index]
}

let mediaSum = totalSum / numbers.length
console.log(mediaSum)

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
console.log('\nExercício 4')
if (mediaSum > 20) {
  console.log('Valor do Exercicio 3 é maior que 20')
} else {
  console.log('Valor do Exercicio 3 é menor ou igual a 20')
}

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
console.log('\nExercício 5')
let maxNumber = numbers[0]
for (let index = 1; index < numbers.length; index += 1) {
  if(numbers[index] > maxNumber) {
    // adiciona o numero encontrado ao maxNumber daí
    maxNumber = numbers[index]
  }

  // Outra forma de realizar o exercício 5, é usar o objeto Math, com o método max(...args).
  // Este método retorna o maior valor dentre uma série de valores.
  // Apenas comparei o numbers[index] com o maxNumber (indice 0 = valor 5) e trouxe o 100 também
  // maxNumber = Math.max(numbers[index], maxNumber)
}

console.log(maxNumber)

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
console.log('\nExercício 6')
let odds = 0
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    // odds segura o tanto de ímpares que existe na lista
    odds += 1
  }
}

if (odds === 0) {
  // se a lista de impares for 0, ou seja, não conter um numero impar sequer, retorna a msg
  console.log('nenhum número impar encontrado')
} else {
  // do contrário, retorna quantos impares tem
  console.log(odds)
}

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
console.log('\nExercício 7')
let minNumber = numbers[0]
for (let index = 0; index < numbers.length; index += 1) {
  // verifica se o numero da lista é menor que o menor numero contido em numbers[0] (que é igual a 5)
  if (numbers[index] < minNumber) {
    // coloca esse numero pra dentro
    minNumber = numbers[index]
  }
}
console.log(minNumber)

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let num1to25 = []
console.log('\nExercício 7')
for (let index = 1; index <= 25; index += 1) {
  num1to25.push(index)
}
console.log(num1to25)