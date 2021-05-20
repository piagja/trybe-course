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

calc(10, '+', 2) // output: 12
calc(10, '-', 2) // output: 8
calc(10, '*', 2) // output: 20
calc(10, '/', 2) // output: 5
calc(11, '%', 2) // output: 1