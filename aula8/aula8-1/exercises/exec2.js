const lottery = (pickedNumber, callback) => {
  const luckyNumber = callback;
  pickedNumber = Math.floor(pickedNumber)

  if (typeof pickedNumber !== 'number' || pickedNumber === 0 || pickedNumber > 5) {
    console.log('Use somente números inteiros e acima de 0 e menor que 5!')
  } else if (pickedNumber === luckyNumber) {
    console.log('Parabéns, você ganhou!')
  } else {
    console.log('Aaaa tente novamente =(')
  }

  return `Número escolhido: ${pickedNumber}\nNúmero sorteado: ${luckyNumber}`
};

const randomNumber = () => {
  const random = Math.floor(Math.random() * 5) + 1;
  return random;
}

console.log(lottery(6, randomNumber()))