const longestWord = (phrase) => {
  let word = phrase.split(' ');
  let longestCount = 0;
  var theNew = [];

  // abordagem com for clássico
  // for (let index = 0; index < word.length; index += 1) {
  //   if (longestCount < word[index].length) {
  //     longestCount = word[index].length;
  //     theNew = word[index];
  //   }
  // }
  // return theNew;

  // abordagem com forEach
  word.forEach(string => {
    if (longestCount < string.length) {
      longestCount = string.length;
      theNew = string;
    }
  });

  return theNew;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));