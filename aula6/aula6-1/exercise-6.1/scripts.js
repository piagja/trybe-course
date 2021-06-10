function populateSelect() {
  const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
  const select = document.querySelector("#input-estado");
  
  states.forEach((item) => {
    const options = document.createElement("option");
    options.innerHTML += `${item}`;
    select.appendChild(options);
  });
};

populateSelect();

function submitData (event) {
  event.preventDefault();
};

