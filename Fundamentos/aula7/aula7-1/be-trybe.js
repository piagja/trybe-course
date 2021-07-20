const replaceX = (word) => {
  word.forEach(item => {
    if (item === 'x') {
      item.replace(word)
    }

    return item;
  });
}

console.log(replaceX('Tryber x aqui'))