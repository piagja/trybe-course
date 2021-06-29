const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao, fazSaudacao] = saudacoes 
console.log(fazSaudacao(saudacao));

console.log('-----------------------------------------------');

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';


console.log(comida, animal, bebida); // arroz gato água

[comida, animal, bebida] = [animal, bebida, comida]

console.log(comida, animal, bebida)

console.log('-----------------------------------------------');

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[,,, ...numerosPares] = numerosPares
console.log(numerosPares);
console.log('-----------------------------------------------');