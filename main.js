function init() {
  const billInput = document.querySelector(".bill-value");
  const rangeInput = document.querySelector(".range-tip");
  const tipValue = document.querySelector(".tip-value");
  const percent = document.querySelector(".percent");
  const totalAmount = document.querySelector(".total-amount");
  const button10Percent = document.querySelector(".button-10");
  const button20Percent = document.querySelector(".button-20");

  function tipCalculate() {
    let rangeInputValue = parseFloat(rangeInput.value) / 100;
    let billInputValue = parseFloat(billInput.value);
    percent.innerText = `${rangeInput.value} %`;
    let result = billInputValue * rangeInputValue;
    let billPlusTip = result + billInputValue;
    totalAmount.innerText = `${billPlusTip.toFixed(2)} zł`;
    tipValue.innerText = `${result.toFixed(2)} zł`;
    if (billInput.value === "") {
      totalAmount.innerText = `0,00 zł`;
      tipValue.innerText = `0,00 zł`;
    }
  }
  const billInputValue = billInput.value;

  rangeInput.addEventListener("change", function () {
    tipCalculate();
  });

  billInput.addEventListener("change", () => {
    tipCalculate();
  });

  button10Percent.addEventListener("click", function (event) {
    event.preventDefault();
    let buttonPerecent10Value = (rangeInput.value = 10);

    tipCalculate();
  });

  button20Percent.addEventListener("click", function (event) {
    event.preventDefault();
    let buttonPerecent20Value = (rangeInput.value = 20);
    tipCalculate();
  });
}

window.onload = init;
