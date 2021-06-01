window.onload = function () {
  changeBgColor();
  changeTextColor();
  changeFontSize();
  changeLineHeight();
  changeFontFamily();
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

function changeLineHeight () {
  const divTextArea = document.querySelector("#text-area");
  const btnLineHeight = document.querySelector(".lineheight-click");
  const inputLineHeight = document.querySelector(".lineheight");

  btnLineHeight.addEventListener("click", function () {
    const inputValue = inputLineHeight.value;
    divTextArea.style.lineHeight = `${inputValue}px`;
  })
}

function changeFontFamily () {
  const divTextArea = document.querySelector("#text-area");
  const btnFontFamily = document.querySelector(".fontfamily-click");
  const inputFontFamily = document.querySelector(".fontfamily");

  btnFontFamily.addEventListener("click", function () {
    const inputValue = inputFontFamily.value;
    divTextArea.style.fontFamily = inputValue
  })
}