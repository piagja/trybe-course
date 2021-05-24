// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function isPalindrome(word) {
  /**
   * comentar aqui cada passo a passo que tenho
   * 1. aqui abaixo, esta sendo criado um for clássico
   * 2. o legal é ver se o indice de cada letra bate com o length sendo diminuído!
   * 3. aí é aquela condição: SE for X retorna true SE NÃO false
   * 4. vou deixar as tentativas comentadas
   * ... a many few moments later ...
   * 5. depois de quebrar a cabeça pesquisei sobre palíndromo sem ser como código e 
   * percebi que para cada caracter na posição INDEX, comparamos com o caractere na   posição INDEX do final. E se nãof or igual a gente cessa!
   * peguei a explicação aqui: https://itnext.io/11-way-to-check-for-palindromes-in-javascript-85dbfe7dfb5d
   * aqui também vi que falhei na lógica porque só precisa passar pela metade de tudo
   * ou seja: word.length dividido por dois
   */

  for (let index = 0; index < word.length / 2; index += 1) {
    // depois de muitos few moments later ...
    // a gente vai comparar o indice de cada letra da palavra;
    // depois checa se o indice da palavra é diferente do
    // indice final de cada letra da palavra sendo
    // "regredido" do final pro inicial (por isso o -1 e menos o INDEX)
    // dessa forma ele acessa o ultimo indice e vem voltando pro inicio
    // sendo checado o primeiro com o ultimo, o segundo com o penultimo,
    // o terceiro com o antepenultimo e assim em diante!
    if (word[index] !== word[word.length - 1 - index]) {
      // aqui é quando os indices iniciais e finais não batem, retornando falso
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('desenvolvimento')); // output esperado: false
console.log(isPalindrome('arara')); // output esperado: true

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
// 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
// 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false