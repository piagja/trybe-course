const btn = document.querySelector('#btn');
const area = document.querySelector('#counter-area')
let counter = 0;

const count = (num) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();

    counter += 1;
    area.innerText = counter;
  })
}

count();