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
console.log('Exercício 1')
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index])
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let totalSum = 0;
console.log('Exercício 2')
for (let index = 0; index < numbers.length; index += 1) {
  totalSum += numbers[index]
}
console.log(totalSum);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
console.log('Exercicio 3')
totalSum = 0
for (let index = 0; index < numbers.length; index += 1) {
  totalSum += numbers[index]
}

let mediaSum = totalSum / numbers.length
console.log(mediaSum)

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
console.log('Exercício 4')
if (mediaSum > 20) {
  console.log('Valor do Exercicio 3 é maior que 20')
} else {
  console.log('Valor do Exercicio 3 é menor ou igual a 20')
}