//global variables
let humanScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resultContainer = document.querySelector("#resultContainer");
const scoreContainer = document.querySelector("#scoreContainer");

//Random number generator picks rock, paper or scissors
getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 0
    ? "rock"
    : randomNumber === 1
    ? "paper"
    : "scissors";
};

//UI button functions
rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

//Game logic
playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    resultContainer.textContent = `Tie, you both played ${humanChoice}. Try again.`;
  } else {
    if (
      (humanChoice === "rock") & (computerChoice === "paper") ||
      (humanChoice === "paper") & (computerChoice === "scissors") ||
      (humanChoice === "scissors") & (computerChoice === "rock")
    ) {
      //computer wins
      resultContainer.textContent = `You lose, ${computerChoice} beats ${humanChoice}.`;
      computerScore += 1;
      scoreContainer.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
    } else {
      //human wins
      resultContainer.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
      humanScore += 1;
      scoreContainer.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
    }
  }
  if (humanScore >= 5) {
    scoreContainer.textContent = `You win the game with ${humanScore} to ${computerScore}.`;
    computerScore = 0;
    humanScore = 0;
  }
  if (computerScore >= 5) {
    scoreContainer.textContent = `You lose the game with ${humanScore} to ${computerScore}.`;
    computerScore = 0;
    humanScore = 0;
  }
};
