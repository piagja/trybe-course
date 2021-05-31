function createDaysOfTheWeek() {
  const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
window.onload = onLoad()

function onLoad () {
  holidays("Feriados");
  fridays("Sexta-Feira");
  clickToHolidays();
  clickToFridays();

  setScaleHover();
  unsetScaleHover();

  addItem();

  addDivColor("green");
}


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const daysContainer = document.querySelector("#days");

for (let index = 0; index < dezDaysList.length; index += 1) {
  const li = document.createElement("li");
  const numeroDia = dezDaysList[index];

  li.setAttribute("class", "day");
  li.innerHTML = numeroDia;

  daysContainer.appendChild(li);

  if (numeroDia === 25) li.setAttribute("class", "day holiday friday");
  if (numeroDia === 24 || numeroDia === 31) li.setAttribute("class", "day holiday");
  if (numeroDia === 4 || numeroDia === 11 || numeroDia === 18) li.setAttribute("class", "day friday");
}

/**
 * grandes funções, repetidas, que precisam ser melhoradas
 * uma pra criar, receber escuta do click e setar highlight
 * nos dias determinados, sendo o primeiro feriados e o segundo
 * esta dando highlight nas sextas-feiras, entretanto, o dia 25
 * que é o dia que tem todas as classes (day, holiday e friday)
 * ele desativa junto com outro botão, então nunca fica selecionado
 * se ambos os botões forem clicados.
 * TODO: tenho que melhorar aqui.
 * este código foi feito através do material da Trybe, MDN e W3S
 */

function holidays (string) {
  const btnContainer = document.querySelector(".buttons-container");
  const btn = document.createElement("button");
  btn.setAttribute("id", "btn-holiday");
  btn.innerText = string;
  btnContainer.appendChild(btn);
}

function clickToHolidays () {
  const btn = document.querySelector("#btn-holiday");
  btn.addEventListener("click", () => setHighlightHolidays());
}

function setHighlightHolidays () {
  const li = document.getElementsByClassName("day");
  for (let index = 0; index < li.length; index += 1) {
    const day = li[index];
    const holidays = day.classList.contains("holiday");

    if (holidays === true) {
      day.classList.toggle("highlight");
    }
  }
}

function fridays (string) {
  const btnContainer = document.querySelector(".buttons-container");
  const btn = document.createElement("button");
  btn.setAttribute("id", "btn-friday");
  btn.innerText = string;
  btnContainer.appendChild(btn);
}

function clickToFridays () {
  const btn = document.querySelector("#btn-friday");
  btn.addEventListener("click", () => setHighlightFridays());
}

function setHighlightFridays () {
  const li = document.getElementsByClassName("day");
  for (let index = 0; index < li.length; index += 1) {
    const day = li[index];
    const fridays = day.classList.contains("friday");
    if (fridays === true) {
      day.classList.toggle("highlight");
      day.classList.toggle("active-friday");
    }
  }
}
/* fim das funções em relação a anotar o feriado e sextas-feiras */

function setScaleHover () {
  const li = document.getElementsByClassName("day");
  for (let index = 0; index < li.length; index += 1) {
    const day = li[index];
    day.addEventListener("mouseover", function (event) {
      event.target.style.transform = "scale(1.5)";
    })
  }
}

function unsetScaleHover () {
  const li = document.getElementsByClassName("day");
  for (let index = 0; index < li.length; index += 1) {
    const day = li[index];
    day.addEventListener("mouseout", function (event) {
      event.target.style.transform = "scale(1)";
    })
  } 
}

function addItem () {
  const input = document.querySelector("#task-input");
  const btn = document.querySelector("#btn-add");
  const taskArea = document.querySelector(".my-tasks");
  

  btn.addEventListener("click", function () {
    const span = document.createElement("span");
    span.innerHTML = input.value;
    span.style.display = "block";
    taskArea.appendChild(span);
  })
}

function addDivColor (color) {
  const div = document.createElement("div");
  const taskArea = document.querySelector(".my-tasks");

  div.className = "task";
  div.style.backgroundColor = color;

  taskArea.appendChild(div);

  div.addEventListener("click", function (event) {
    if (event.target.className === "task") {
      div.className = "task selected";
    } else {
      div.className = "task"
    }
  })
}

function setDayColor () {
  const days = document.querySelector("#days");
  const selectedTask = document.getElementsByClassName("selected task");
  const divTask = document.querySelector(".task");
  const colorTask = divTask.style.color;

  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== colorTask) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === colorTask && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

setDayColor()