const fatorial = (num) => {
  let multi = num;
  while (num > 2) {
    multi *= --num
  };

  return multi;
};

console.log(fatorial(6));