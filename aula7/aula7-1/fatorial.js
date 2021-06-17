// vi na pagina que a Trybe deixou pra gente: http://www.devfuria.com.br/logica-de-programacao/recursividade-fatorial/
const fatorial = (num) => {
  let multi = num;
  while (num > 2) {
    multi *= --num
  };

  return multi;
};

console.log(fatorial(6)); // output: 720