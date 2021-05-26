let numeros = [1, 2, 3, 4, 5];

// o laço for/of me parece ja trazer o valor de cada indice, sem precisar
// passar o indice entre colchetes, como ocorre com o for: numeros[index]
for (let numero of numeros) {
  console.log(numero);
}

// o similar ao for/of usando o laço for
for (let index = 0; index < numeros.length; index += 1) {
  console.log(numeros[index]);
}

// com strings, ele conta cada letra como indice
let word = 'Hello'
for (let letter of word) {
  console.log(letter)
}

// exercicio 1
// Utilize o for/of para imprimir os elementos da lista names com o console.log() :
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (elements of names) {
  console.log(elements)
}