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

function clearData () {
  const form = document.querySelector("#input-form");
  form.reset();
}

function mountData () {
  const inputName = document.querySelector("#input-name").value;
  const inputEmail = document.querySelector("#input-email").value;
  const inputCPF = document.querySelector("#input-cpf").value;
  const inputEndereco = document.querySelector("#input-endereco").value;
  const inputCidade = document.querySelector("#input-cidade").value;
  const inputEstado = document.querySelector("#input-estado").value;
  const inputImovelCasa = document.querySelector("#input-imovel-casa").checked;
  const inputImovelAPT = document.querySelector("#input-imovel-apt").checked;
  const dataArea = document.querySelector("#all-data");

  const div = document.createElement("div");
  div.classList.add("data-submited");
  /* hora de colocar as infos pra "dentro" */
  div.innerHTML = `
    <p>Nome: ${inputName}</p>
    <p>Email: ${inputEmail}</p>
    <p>CPF: ${inputCPF}</p>
    <p>Endereço: ${inputEndereco}</p>
    <p>Endereço: ${inputCidade}</p>
    <p>Endereço: ${inputEstado}</p>
    <p>Endereço: ${inputImovelCasa}</p>
    <p>Endereço: ${inputImovelAPT}</p>
  `;

  dataArea.appendChild(div);
};

function submitData () {
  const submitBtn = document.querySelector("#btn-form-submit");
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    mountData();
    clearData();
  })
};