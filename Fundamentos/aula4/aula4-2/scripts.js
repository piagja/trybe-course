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
console.log('\nExercício 1');
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let totalSum = 0;
console.log('\nExercício 2');
for (let index = 0; index < numbers.length; index += 1) {
  totalSum += numbers[index];
}
console.log(totalSum);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
console.log('\nExercicio 3');
totalSum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  totalSum += numbers[index];
}

let mediaSum = totalSum / numbers.length;
console.log(mediaSum);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
console.log('\nExercício 4');
if (mediaSum > 20) {
  console.log('Valor do Exercicio 3 é maior que 20');
} else {
  console.log('Valor do Exercicio 3 é menor ou igual a 20');
}

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
console.log('\nExercício 5');
let maxNumber = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  if(numbers[index] > maxNumber) {
    // adiciona o numero encontrado ao maxNumber daí
    maxNumber = numbers[index];
  }

  // Outra forma de realizar o exercício 5, é usar o objeto Math, com o método max(...args).
  // Este método retorna o maior valor dentre uma série de valores.
  // Apenas comparei o numbers[index] com o maxNumber (indice 0 = valor 5) e trouxe o 100 também
  // maxNumber = Math.max(numbers[index], maxNumber)
}

console.log(maxNumber);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
console.log('\nExercício 6')
let odds = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    // odds segura o tanto de ímpares que existe na lista
    odds += 1;
  }
}

if (odds === 0) {
  // se a lista de impares for 0, ou seja, não conter um numero impar sequer, retorna a msg
  console.log('nenhum número impar encontrado');
} else {
  // do contrário, retorna quantos impares tem
  console.log(odds);
}

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
console.log('\nExercício 7');
let minNumber = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
  // verifica se o numero da lista é menor que o menor numero contido em numbers[0] (que é igual a 5)
  if (numbers[index] < minNumber) {
    // coloca esse numero pra dentro
    minNumber = numbers[index];
  }
}
console.log(minNumber);

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
console.log('\nExercício 8')
let num1to25 = [];
for (let index = 1; index <= 25; index += 1) {
  num1to25.push(index);
}
console.log(num1to25);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
console.log('\nExercício 9');
num1to25 = [];
for (let index = 1; index <= 25; index += 1) {
  num1to25.push(index / 2);
}
console.log(num1to25);

// Exercicio Bônus
// 1. Ordene o array numbers em ordem crescente e imprima seus valores;
console.log('\nExercício Bônus 1 - Ordem Crescente')
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers)

// 2. Ordene o array numbers em ordem decrescente e imprima seus valores;
console.log('\nExercício Bônus 2 - Ordem Decrescente')
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers)

// 3. Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push .
console.log('\nExercício Bônus 3 - Multiplicação de valores pelo índice * indice + 1')
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArr = []

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArr.push(numbers[index] * numbers[index + 1])
  } else {
    newArr.push(numbers[index] * 2)
  }
}
console.log(newArr)