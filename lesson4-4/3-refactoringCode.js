// ================================================

// let num1 = 30;
// let num3 = 20;
// let num3 = 10;

// function average(num1, num2, num3) {
//   return (num1 + num2 + num3) / 3
// }

// console.log(average(30, 20, 10))

// ================================================

// let firstName = "Gustavo";
// let lastName = "Moraes";

// let fullName = `${firstName} ${lastName}`;

// console.log(fullName)

// =================================================

// function fullName(firstName, lastName) {
//   return `${firstName} ${lastName}`
// }
// console.log(fullName('Gustavo', 'de Moraes'));

// ==================================================

// function generateArray(character) {
//   let myArray = [];

//   for (let index = 0; index < 100; index += 1) {
//     myArray.push(character);
//   }

//   return myArray;
// }

// console.log(generateArray('a'));

// ==================================================

// let firstNumber = Math.ceil(Math.random() * 60)
// let secondNumber = Math.ceil(Math.random() * 60)
// let thirdNumber = Math.ceil(Math.random() * 60)
// let fourthNumber = Math.ceil(Math.random() * 60)
// let fifthNumber = Math.ceil(Math.random() * 60)
// let sixthNumber = Math.ceil(Math.random() * 60)
// console.log(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber)

function randomNumber (maxValue) {
  return Math.ceil(Math.random() * maxValue);
}

function generateNumbers () {
  let numbers = [];
  for (let index = 0; index < 6; index += 1) {
    if (numbers.indexOf(numbers[index]) !== index) {
      numbers.push(randomNumber(60));
    }
  }

  return numbers;
}

let firstGame = generateNumbers().sort()
let secondGame = generateNumbers()

console.log(firstGame)
console.log(secondGame)
