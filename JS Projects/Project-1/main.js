const rockDiv = document.querySelector(".rock");
const paperDiv = document.querySelector(".paper");
const scissorsDiv = document.querySelector(".scissors");
let userChoice = "";
let computerChoice = "";

rockDiv.addEventListener("click", () => {
  userChoice = getUserChoiceItem("rock");
  computerChoice = getComputerChoice();
  console.log("user", userChoice);
  console.log("comp", computerChoice);
  compare();
});

paperDiv.addEventListener("click", () => {
  userChoice = getUserChoiceItem("paper");
  computerChoice = getComputerChoice();
  console.log("user", userChoice);
  console.log("comp", computerChoice);
  compare();
});
scissorsDiv.addEventListener("click", () => {
  userChoice = getUserChoiceItem("scissors");
  computerChoice = getComputerChoice();
  console.log("user", userChoice);
  console.log("comp", computerChoice);
  compare();
});

function getUserChoiceItem(myChoice) {
  // console.log("user", myChoice);
  return myChoice;
}
function compare() {
  // user WIN
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("wygrana");
  }

  //user Loser
  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("przegrana");
  }

  //draw
  if (
    (userChoice === "rock" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "scissors")
  ) {
    console.log("remis");
  }
}

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
