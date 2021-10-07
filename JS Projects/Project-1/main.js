const rockDiv = document.querySelector(".rock");
const paperDiv = document.querySelector(".paper");
const scissorsDiv = document.querySelector(".scissors");

function userChoice() {
  rockDiv.addEventListener("click", () => {
    // console.log("kliknolem rock");
    userChoiceItem("rock");
  });
  paperDiv.addEventListener("click", () => {
    console.log("kliknolem paper");
    userChoiceItem("paper");
  });
  scissorsDiv.addEventListener("click", () => {
    console.log("kliknolem nozyce");
    userChoiceItem("scissors");
  });
}
// userChoice();

function userChoiceItem(myChoice) {
  //   console.log(myChoice + " user");
}
userChoice();

function computerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber === 0) {
    computerChoiceItem("rock");
  }
  if (randomNumber === 1) {
    computerChoiceItem("paper");
  }
  if (randomNumber === 2) {
    computerChoiceItem("scissors");
  }
}

// computerChoice();
// function computerChoiceItem(computerChoice) {
//   console.log(computerChoice + "   comp");
// }
// computerChoice();
