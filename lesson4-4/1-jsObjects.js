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

// student.name (dot notation/notação de ponto): atribuindo novo e cidade nova
student.name = "Jose";
student.city = "Minas Gerais";

console.log(student['nick'][1]); // acessar posição array atraves da notação de colchetes
console.log(student.nick[1]); // acessar posição array através da notação de ponto
console.log(student['city']);
console.log(student.address.street);
console.log('------------------------------------')
console.log('               FOR/IN               ')
console.log('------------------------------------')

for (let key in student) {
  console.log(`Chave: ${key} Valor: ${student[key]}`);
}