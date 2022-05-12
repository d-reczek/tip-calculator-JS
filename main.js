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
    console.log(billInputValue);
  });

  billInput.addEventListener("change", () => {
    tipCalculate();
  });

  // billInputValue.addEventListener("change", function () {
  //   tipCalculate();
  // });

  // let buttonPerecent10Value = "";
  button10Percent.addEventListener("click", function (event) {
    event.preventDefault();
    let buttonPerecent10Value = (rangeInput.value = 10);

    tipCalculate();
    // let rangeInputValue = buttonPerecent10Value / 100;
    // let billInputValue = parseFloat(billInput.value);
    // percent.innerText = rangeInput.value + "%";
    // let result = billInputValue * rangeInputValue;
    // let billPlusTip = result + billInputValue;
    // totalAmount.innerText = billPlusTip.toFixed(2);
    // tipValue.innerText = result.toFixed(2) + "zł";
    // console.log(buttonPerecent10Value);
  });

  // let buttonPerecent20Value = "";
  button20Percent.addEventListener("click", function (event) {
    event.preventDefault();
    let buttonPerecent20Value = (rangeInput.value = 20);
    tipCalculate();
    // let rangeInputValue = buttonPerecent20Value / 100;
    // let billInputValue = parseFloat(billInput.value);
    // percent.innerText = rangeInput.value + "%";
    // let result = billInputValue * rangeInputValue;
    // let billPlusTip = result + billInputValue;
    // totalAmount.innerText = billPlusTip.toFixed(2);
    // tipValue.innerText = result.toFixed(2) + "zł";
  });
}

window.onload = init;
