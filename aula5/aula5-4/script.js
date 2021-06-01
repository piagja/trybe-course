window.onload = function () {
  changeBgColor();
  changeTextColor();
  changeFontSize();
  changeLineHeight();
  changeFontFamily();
}

const storage = localStorage;

function savingData (item, value) {
  storage.setItem(item, value);
}

function changeBgColor () {
  const loadData = storage.getItem("bg-color");
  const inputBgColor = document.querySelector(".bgcolor");
  const btnBgColor = document.querySelector(".bgcolor-click");
  
  document.body.style.backgroundColor = loadData;

  btnBgColor.addEventListener("click", function () {
    const inputValue = inputBgColor.value;
    document.body.style.backgroundColor = inputValue;
    savingData("bg-color", inputValue);
  })

  inputBgColor.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const inputValue = inputBgColor.value;
      document.body.style.backgroundColor = inputValue;
      savingData("bg-color", inputValue);
    }
  })
}

function changeTextColor () {
  const divTextArea = document.querySelector("#text-area");
  const btnTextColor = document.querySelector(".textcolor-click");
  const inputTextColor = document.querySelector(".textcolor");
  const loadData = storage.getItem("text-color");

  divTextArea.style.color = loadData;

  btnTextColor.addEventListener("click", function () {
    const inputValue = inputTextColor.value;
    divTextArea.style.color = inputValue;
    savingData("text-color", inputValue);
  })

  inputTextColor.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const inputValue = inputTextColor.value;
      divTextArea.style.color = inputValue;
      savingData("text-color", inputValue);
    }
  })
}

function changeFontSize () {
  const divTextArea = document.querySelector("#text-area");
  const btnFontSize = document.querySelector(".fontsize-click");
  const inputFontSize= document.querySelector(".fontsize");
  const loadData = storage.getItem("font-size");

  divTextArea.style.fontSize = loadData;

  btnFontSize.addEventListener("click", function () {
    const inputValue = inputFontSize.value;
    divTextArea.style.fontSize = `${inputValue}px`;
    savingData("font-size", inputValue);
  })

  inputFontSize.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const inputValue = inputFontSize.value;
      divTextArea.style.fontSize = `${inputValue}px`;
      savingData("font-size", inputValue);
    }
  })
}

function changeLineHeight () {
  const divTextArea = document.querySelector("#text-area");
  const btnLineHeight = document.querySelector(".lineheight-click");
  const inputLineHeight = document.querySelector(".lineheight");
  const loadData = storage.getItem("line-height");

  divTextArea.style.lineHeight = loadData;

  btnLineHeight.addEventListener("click", function () {
    const inputValue = inputLineHeight.value;
    divTextArea.style.lineHeight = `${inputValue}px`;
    savingData("line-height", inputValue);
  })

  inputLineHeight.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const inputValue = inputLineHeight.value;
      divTextArea.style.lineHeight = `${inputValue}px`;
      savingData("line-height", inputValue);
    }
  })
}

function changeFontFamily () {
  const divTextArea = document.querySelector("#text-area");
  const btnFontFamily = document.querySelector(".fontfamily-click");
  const inputFontFamily = document.querySelector(".fontfamily");
  const loadData = storage.getItem("font-family");

  divTextArea.style.fontFamily = loadData;

  btnFontFamily.addEventListener("click", function () {
    const inputValue = inputFontFamily.value;
    divTextArea.style.fontFamily = inputValue;
    savingData("font-family", inputValue);
  })

  inputFontFamily.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const inputValue = inputFontFamily.value;
      divTextArea.style.fontFamily = inputValue;
      savingData("font-family", inputValue);
    }
  })
}