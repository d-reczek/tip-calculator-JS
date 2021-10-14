const rockDiv = document.querySelector(".rock");
const paperDiv = document.querySelector(".paper");
const scissorsDiv = document.querySelector(".scissors");
const resultSpan = document.querySelector(".result");
const userScoreBoard = document.querySelector(".user-score");
const computerScoreBoard = document.querySelector(".computer-score");
const choiceItemDiv = document.querySelector(".choice-item");
const gameOverDiv = document.querySelector(".game-over")
let userScore = 0;
let computerScore = 0;
let userChoice = "";
let computerChoice = "";
let computerChoiceNameChange = "";

rockDiv.addEventListener("click", () => {
  userChoice = getUserChoiceItem("rock");
  computerChoice = getComputerChoice();
  computerChoiceNameChange = nameChange();
  console.log("user", userChoice);
  console.log("comp", computerChoice);
  console.log(computerChoiceNameChange);
  compare();
});

paperDiv.addEventListener("click", () => {
  userChoice = getUserChoiceItem("paper");
  computerChoice = getComputerChoice();
  console.log("user", userChoice);
  console.log("comp", computerChoice);
  computerChoiceNameChange = nameChange();
  compare();
});
scissorsDiv.addEventListener("click", () => {
  userChoice = getUserChoiceItem("scissors");
  computerChoice = getComputerChoice();
  console.log("user", userChoice);
  console.log("comp", computerChoice);
  computerChoiceNameChange = nameChange();
  compare();
});

function getUserChoiceItem(myChoice) {
  // console.log("user", myChoice);
  return myChoice;
}

function nameChange() {
  if (computerChoice === "paper") {
    return "papier";
  }
  if (computerChoice === "rock") {
    return "kamień";
  }
  if (computerChoice === "scissors") {
    return "nożyce";
  }
}

function compare() {
  // user WIN
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("wygrana");
    // if (computerChoice === "scissors") {
    //   computerChoice = "nożyce";
    // }
    resultSpan.textContent =
      "Przeciwnik wybrał " + computerChoiceNameChange + " WYGRAŁEŚ! :)";
    userScore++;
    userScoreBoard.textContent = userScore;
    resultSpan.classList.add("win");
    resultSpan.classList.remove("lose");
    resultSpan.classList.remove("draw");
    if (userScore === 3) {
      resultSpan.textContent = "ugabuga";
      console.log("wynik" + userScore);
    }
  }

  //user Loser
  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("przegrana");
    resultSpan.textContent =
      "Przeciwnik wybrał " +
      computerChoiceNameChange +
      " przegrałes";
    computerScore++;
    computerScoreBoard.textContent = computerScore;
    resultSpan.classList.add("lose");
    resultSpan.classList.remove("win");
    resultSpan.classList.remove("draw");
  }

  //draw
  if (
    (userChoice === "rock" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "scissors")
  ) {
    console.log("remis");
    resultSpan.textContent =
      "Przeciwnik wybrał " + computerChoiceNameChange + " jest remis";
    resultSpan.classList.add("draw");
    resultSpan.classList.remove("win");
    resultSpan.classList.remove("lose");
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
