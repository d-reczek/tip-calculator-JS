const rockDiv = document.querySelector(".rock");
const paperDiv = document.querySelector(".paper");
const scissorsDiv = document.querySelector(".scissors");
let userChoice = "";
let computerChoice = "";

rockDiv.addEventListener("click", () => {
  userChoice = getUserChoiceItem("rock");
  computerChoice = getComputerChoice();
});

paperDiv.addEventListener("click", () => {
  userChoice = getUserChoiceItem("paper");
  computerChoice = getComputerChoice();
});
scissorsDiv.addEventListener("click", () => {
  userChoice = getUserChoiceItem("scissors");
  computerChoice = getComputerChoice();
});

function getUserChoiceItem(myChoice) {
  console.log("user", myChoice);
  return myChoice;
}

function compare() {

}

// function computerChoiceItem(compChoice) {
//   console.log("comp", compChoice);
//   return compChoice;
// }

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  // console.log(randomNumber);
  if (randomNumber === 0) {
    return "rock";
  }
  if (randomNumber === 1) {
    return "paper";
  }
  if (randomNumber === 2) {
    return "scissors";
  }
}


