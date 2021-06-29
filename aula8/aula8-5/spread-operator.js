// array
const carros = ['Gol', 'HB20', 'Focus']
const motos = ['Biz', 'R1']

const automoveis = [...carros, ...motos]

console.log(automoveis)
console.log('---------------------------------------------------------')

// objetos
const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  uptodateProjects: true
}

const pessoa = {
  nome: 'Gustavo',
  idade: 31,
  cidade: 'Guarujá'
}

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
  hobby: 'Games e Estudo'
}

console.log(pessoaTryber)
console.log('---------------------------------------------------------')

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Banana', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Abacate', 'Pêra', 'Laranja'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));