let student = {
  name: "Gustavo", /** entrada (chave: valor) -- Propriedade do Objeto */
  age: 31,
  hardSkills: 3,
  softSkills: 5,
  careerSkills: 0,
  nick: ['piá', 'gustavo piá', 'piaxd'],
  address: {
    street: 'Rua X',
    number: 1
  }
};

function trybe(trybeStudent) {
  trybeStudent.hardSkills = 10;
  trybeStudent.softSkills = 10;
  trybeStudent.careerSkills = 10;
  trybeStudent.tryber = true;

  return trybeStudent;
}

console.log(trybe(student))
console.log(student)