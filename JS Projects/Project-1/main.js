const rockDiv = document.querySelector(".rock");
const paperDiv = document.querySelector(".paper");
const scissorsDiv = document.querySelector(".scissors");
const resultSpan = document.querySelector(".result");
const userScoreBoard = document.querySelector(".user-score");
const computerScoreBoard = document.querySelector(".computer-score");
const choiceItemDiv = document.querySelector(".choice-item");
const gameOverDiv = document.querySelector(".all-game");
const gameWin = document.querySelector(".game-win");
const gameLose = document.querySelector(".game-lose");
let userScore = 0;
let computerScore = 0;
let userChoice = "";
let computerChoice = "";
let computerChoiceNameChange = "";

//assignment user choice and computer to variable and launch function
rockDiv.addEventListener("click", () => {
  userChoice = getUserChoiceItem("rock");
  computerChoice = getComputerChoice();
  computerChoiceNameChange = nameChange();
  // console.log("user", userChoice);
  // console.log("comp", computerChoice);
  // console.log(computerChoiceNameChange);
  compare();
});

paperDiv.addEventListener("click", () => {
  userChoice = getUserChoiceItem("paper");
  computerChoice = getComputerChoice();
  // console.log("user", userChoice);
  // console.log("comp", computerChoice);
  computerChoiceNameChange = nameChange();
  compare();
});
scissorsDiv.addEventListener("click", () => {
  userChoice = getUserChoiceItem("scissors");
  computerChoice = getComputerChoice();
  // console.log("user", userChoice);
  // console.log("comp", computerChoice);
  computerChoiceNameChange = nameChange();
  compare();
});

//return user choice to function
function getUserChoiceItem(myChoice) {
  return myChoice;
}

//translate english name to polish
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
//main game compare user choice and computer choice
function compare() {
  // user WIN
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    // console.log("wygrana");

    resultSpan.textContent =
      "Przeciwnik wybrał " + computerChoiceNameChange + " WYGRAŁEŚ! :)";
    userScore++;
    userScoreBoard.textContent = userScore;
    resultSpan.classList.add("win");
    resultSpan.classList.remove("lose");
    resultSpan.classList.remove("draw");
    if (userScore === 10) {
      gameOverDiv.classList.add("end");
      gameWin.classList.add("show");
    }
  }

  //computer win
  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    // console.log("przegrana");
    resultSpan.textContent =
      "Przeciwnik wybrał " + computerChoiceNameChange + " przegrałes";
    computerScore++;
    computerScoreBoard.textContent = computerScore;
    resultSpan.classList.add("lose");
    resultSpan.classList.remove("win");
    resultSpan.classList.remove("draw");

    if (computerScore === 10) {
      gameOverDiv.classList.add("end");
      gameLose.classList.add("show");
    }
  }

  //draw
  if (
    (userChoice === "rock" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "scissors")
  ) {
    // console.log("remis");
    resultSpan.textContent =
      "Przeciwnik wybrał " + computerChoiceNameChange + " jest remis";
    resultSpan.classList.add("draw");
    resultSpan.classList.remove("win");
    resultSpan.classList.remove("lose");
  }
}

//random computer choice

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
