function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
window.onload = onLoad()

function onLoad () {
  holidays("Feriados");
  clickToHolidays();
}

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const daysContainer = document.querySelector('#days');

for (let index = 0; index < dezDaysList.length; index += 1) {
  const li = document.createElement('li');
  const numeroDia = dezDaysList[index];

  li.setAttribute('class', 'day');
  li.innerHTML = numeroDia;

  daysContainer.appendChild(li);

  if (numeroDia === 25) li.setAttribute('class', 'day holiday friday');
  if (numeroDia === 24 || numeroDia === 31) li.setAttribute('class', 'day holiday');
  if (numeroDia === 4 || numeroDia === 11 || numeroDia === 18) li.setAttribute('class', 'day friday');
}

function holidays(feriados) {
  const btnContainer = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.setAttribute('id', 'btn-holiday');
  btn.innerText = feriados;
  btnContainer.appendChild(btn);
}

function clickToHolidays () {
  const btn = document.querySelector('#btn-holiday');
  btn.addEventListener('click', () => setHighlight())
}

function setHighlight () {
  const li = document.getElementsByClassName('day');
  for (let index = 0; index < li.length; index += 1) {
    const day = li[index];
    const holidays = day.classList.contains('holiday')

    if (holidays === true) {
      day.classList.toggle('highlight')
    }
  }
}
