const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality } = person;

console.log(nationality)

// exercicios de fixação sobre Default Destructuring

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));