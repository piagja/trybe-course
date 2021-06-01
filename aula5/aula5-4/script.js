window.onload = function () {
  changeBgColor()
  changeTextColor()
}

function changeBgColor () {
  const inputBgColor = document.querySelector(".bgcolor");
  const btnBgColor = document.querySelector(".bgcolor-click");
  
  btnBgColor.addEventListener("click", function () {
    const inputValue = inputBgColor.value;
    document.body.style.backgroundColor = inputValue
  })

  inputBgColor.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
      const inputValue = inputBgColor.value;
      document.body.style.backgroundColor = inputValue
    }
  })
}

function changeTextColor () {
  const divTextArea = document.querySelector("#text-area");
  const btnTextColor = document.querySelector(".textcolor-click");
  const inputTextColor = document.querySelector(".textcolor")

  btnTextColor.addEventListener("click", function () {
    const inputValue = inputTextColor.value
    divTextArea.style.color = inputValue
  })

  inputTextColor.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
      const inputValue = inputTextColor.value;
      divTextArea.style.color = inputValue
    }
  })
}