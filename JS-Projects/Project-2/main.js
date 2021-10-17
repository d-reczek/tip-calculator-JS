function init() {
  const billInput = document.querySelector(".bill");
  const rangeInput = document.querySelector(".range-tip");
  const tipValue = document.querySelector(".tip-value");
  const percent = document.querySelector(".percent");
  const totalAmount = document.querySelector(".total-amount");
  const button10Percent = document.querySelector(".button-10");
  const button20Percent = document.querySelector(".button-20");

  rangeInput.addEventListener("change", function () {
    console.log(billInput.value);
    let rangeInputValue = parseFloat(rangeInput.value) / 100;
    let billInputValue = parseFloat(billInput.value);
    percent.innerText = rangeInput.value + "%";
    let result = billInputValue * rangeInputValue;
    let billPlusTip = result + billInputValue;
    totalAmount.innerText = billPlusTip.toFixed(2);
    tipValue.innerText = result.toFixed(2) + "zł";
  });

  let buttonPerecent10Value = "";
  button10Percent.addEventListener("click", function (event) {
    event.preventDefault();
    buttonPerecent10Value = rangeInput.value = 10;
    let rangeInputValue = buttonPerecent10Value / 100;
    let billInputValue = parseFloat(billInput.value);
    percent.innerText = rangeInput.value + "%";
    let result = billInputValue * rangeInputValue;
    let billPlusTip = result + billInputValue;
    totalAmount.innerText = billPlusTip.toFixed(2);
    tipValue.innerText = result.toFixed(2) + "zł";
    console.log(buttonPerecent10Value);
  });

  let buttonPerecent20Value = "";
  button20Percent.addEventListener("click", function (event) {
    event.preventDefault();
    buttonPerecent20Value = rangeInput.value = 20;
    let rangeInputValue = buttonPerecent20Value / 100;
    let billInputValue = parseFloat(billInput.value);
    percent.innerText = rangeInput.value + "%";
    let result = billInputValue * rangeInputValue;
    let billPlusTip = result + billInputValue;
    totalAmount.innerText = billPlusTip.toFixed(2);
    tipValue.innerText = result.toFixed(2) + "zł";
  });
}

window.onload = init;
