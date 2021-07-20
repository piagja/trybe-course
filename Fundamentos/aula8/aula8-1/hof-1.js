const person = {
  name : 'Gustavo',
  lastName: 'Xavier',
  greet: param => param()
}

// const greetingPeople = (person) => {
//   console.log(`Olá ${person.name}, como vai?`);
//   console.log(person)
// }

const formalGreeting = () => {
  console.log(`Olá como vai?`)
}

const goodGreet = () => {
  console.log(`Dia ta bom!`);
}

const badGreet = () => {
  console.log(`Não fale comigo!`);
}

person.greet = (greetingPeople) => {
  return greetingPeople();
}

person.greet(goodGreet);
