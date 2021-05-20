// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
// Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉

function calc(a, operator, b) {
  switch (operator) {
    case '+':
      console.log(a + b);
      break;
    case '-':
      console.log(a - b);
      break;
    case '*':
      console.log(a * b);
      break;
    case '/':
      console.log(a / b);
      break;
    case '%':
      console.log(a % b);
      break;
    default:
      console.log('Não se aplica');
  }
}
console.log('Exercício 1')
calc(10, '+', 2); // output: 12
calc(10, '-', 2); // output: 8
calc(10, '*', 2); // output: 20
calc(10, '/', 2); // output: 5
calc(11, '%', 2); // output: 1
console.log('')
// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
console.log('Exercício 2');
let aMax = 10;
let bMax = 8;
console.log(Math.max(aMax, bMax));

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
console.log('\nExercício 3');
let cMax = 5;
let dMax = 7;
let eMax = 9;
console.log(Math.max(cMax, dMax, eMax));

// 4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function isMoreThanZero(num) {
  let positive;
  if (num > 0) {
    positive = `The number ${num} is positive.`;
  } else if (num < 0) {
    positive = `The number ${num} is negative.`;
  } else {
    positive = `The number is zero or don't apply.`;
  }
  
  return positive
}
console.log('\nExercício 4')
console.log('')
console.log(isMoreThanZero(0))

// 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
console.log('\nExercício 5')
function checkTriangle(a, b, c) {
  let isTriangle = a + b + c === 180
  if(!isTriangle || isTriangle < 0) {
    console.log('Não é um triângulo válido!')
  } else {
    console.log('É um triângulo válido!')
  }

  return isTriangle
}
console.log(checkTriangle(50, 50, 80))

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
function movementsChessPieces(piece) {
  let lowerPiece = piece.toLowerCase()
  if (lowerPiece === 'bishop') {
    console.log('Bishops moves diagonally')
  } else if (lowerPiece === 'pawn') {
    console.log('Pawns moves one square ahead or two if is the first movement')
  } else if (lowerPiece === 'knight') {
    console.log('Knights move in a L shape')
  } else if (lowerPiece === 'rook') {
    console.log('Rooks moves horizontally and vertically')
  } else if (lowerPiece === 'queen') {
    console.log('Queen move diagonally, vertically and horizontally. As a bishop and rook together')
  } else if (lowerPiece === 'king') {
    console.log('King move to one of the eight squares around it')
  } else {
    console.log('Invalid chess piece')
  }
}
console.log('\nExercicio 6')
movementsChessPieces('BiShOp')

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
function turnIntoGrades(note) {
  if (note >= 90 && note <= 100) {
    console.log('Your grade is A')
  } else if (note >= 80 && note <= 90) {
    console.log('Your grande is B')
  } else if (note >= 70 && note <= 80) {
    console.log('Your grande is C')
  } else if (note >= 60 && note <= 70) {
    console.log('Your grande is D')
  } else if (note >= 50 && note <= 60) {
    console.log('Your grande is E')
  } else if (note < 50 && note >= 1 ) {
    console.log('Your grande is F')
  } else if (note >= 101) {
    console.log('Over 100% note')
  } else if (note < 0 ) {
    console.log('Negative note!')
  } else {
    console.log('Maybe ... you got a 0!')
  }
}

console.log('\nExercicio 7')
turnIntoGrades(2)

// 8. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if0.
function haveEven(a, b, c) {
  let evenNumber = a % 2 === 0 || b % 2 === 0 || c % 2 === 0
  let isEven;
  if (!evenNumber) {
    isEven = false
  } else {
    isEven = true
  }

  return isEven
}
console.log('\nExercício 8')
console.log(haveEven(2, 4, 6))

// 9. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .
function haveOdd(a, b, c) {
  let evenNumber = a % 2 === 0 || b % 2 === 0 || c % 2 === 0
  let isEven;
  if (!evenNumber) {
    isEven = true
  } else {
    isEven = false
  }

  return isEven
}
console.log('\nExercício 9')
console.log(haveOdd(1, 3, 5))

// 10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)
function productProfit(productCost, productValue) {
  let taxOverProductCost = productCost * 1.2
  let profit = productValue - taxOverProductCost - productCost

  if (productCost < 0 || productValue < 0) {
    console.log('Invalid Operation. Less than $0 product cost or value')
  } else if (profit < 0) {
    console.log(`Negative profit: ${profit}! Be careful`)
  } else {
    console.log(`You have a profit of $${profit}`)
  }

  return `Your product value: $${productValue}. Tax over a $${productCost} product: $${taxOverProductCost}`
}
console.log('\nExercício 10')
console.log(productProfit(1, 3))

// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
function impostoDeRenda(salary) {
  let aliquotaINSS;
  
  if (salary <= 1556,94) {
    aliquotaINSS = salary * 0.08;
  } else if (salary >= 1556.94 && salary <= 2594.92) {
    aliquotaINSS = salary * 0.09;
  } else if (salary >= 2594.93 && salary <= 5189.82) {
    aliquotaINSS = salary * 0.11;
  } else if (salary >= 5189.83) {
    aliquotaINSS = 570.88;
  }
  let aliquotaIR;
  
  let baseSalary = salary - aliquotaINSS
  
  if (baseSalary <= 1903.98) {
    aliquotaIR = 0
  }  else if (baseSalary <= 2826.65) {
    aliquotaIR = (baseSalary * 0.075) - 142.80;
  } else if (baseSalary <= 3751.05) {
    aliquotaIR = (baseSalary * 0.15) - 354.80;
  } else if (baseSalary <= 4664.68) {
    aliquotaIR = (baseSalary * 0.225) - 636.13;
  } else {
    aliquotaIR = (baseSalary * 0.275) - 869.36;
  };
  let liquidSalary = (baseSalary - aliquotaIR).toFixed(2)
  return liquidSalary
}
console.log('\nExercicio 11')
console.log(impostoDeRenda(1903.99))