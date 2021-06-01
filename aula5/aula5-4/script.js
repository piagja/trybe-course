window.onload = function () {
  changeBgColor();
  changeTextColor();
  changeFontSize();
}

function changeBgColor () {
  const inputBgColor = document.querySelector(".bgcolor");
  const btnBgColor = document.querySelector(".bgcolor-click");
  
  btnBgColor.addEventListener("click", function () {
    const inputValue = inputBgColor.value;
    document.body.style.backgroundColor = inputValue;
  })

  inputBgColor.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
      const inputValue = inputBgColor.value;
      document.body.style.backgroundColor = inputValue;
    }
  })
}

function changeTextColor () {
  const divTextArea = document.querySelector("#text-area");
  const btnTextColor = document.querySelector(".textcolor-click");
  const inputTextColor = document.querySelector(".textcolor");

  btnTextColor.addEventListener("click", function () {
    const inputValue = inputTextColor.value
    divTextArea.style.color = inputValue
  })

  inputTextColor.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
      const inputValue = inputTextColor.value;
      divTextArea.style.color = inputValue;
    }
  })
}

function changeFontSize () {
  const divTextArea = document.querySelector("#text-area");
  const btnFontSize = document.querySelector(".fontsize-click");
  const inputFontSize= document.querySelector(".fontsize");

  btnFontSize.addEventListener("click", function () {
    const inputValue = inputFontSize.value;
    divTextArea.style.fontSize = `${inputValue}px`;
  })

  inputFontSize.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
      const inputValue = inputFontSize.value;
      divTextArea.style.fontSize = `${inputValue}px`;
    }
  })
}