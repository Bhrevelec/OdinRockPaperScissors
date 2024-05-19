//global variables
let humanScore = 0;
let computerScore = 0;

getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 0
    ? "rock"
    : randomNumber === 1
    ? "paper"
    : "scissors";
};
/*
getHumanChoice = () => {
  let humanChoice = prompt("Rock, paper, scissors, shoot!").toLowerCase();
  if (humanChoice.match(/^(rock|paper|scissors)$/)) {
    return humanChoice;
  } else {
    getHumanChoice();
  }
};
*/
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resultContainer = document.querySelector("#resultContainer");
const scoreContainer = document.querySelector("#scoreContainer");

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    //console.log(`Tie, you both played ${humanChoice}. Try again.`);
    resultContainer.textContent = `Tie, you both played ${humanChoice}. Try again.`;
    //playRound(getHumanChoice(), getComputerChoice());
  } else {
    if (
      (humanChoice === "rock") & (computerChoice === "paper") ||
      (humanChoice === "paper") & (computerChoice === "scissors") ||
      (humanChoice === "scissors") & (computerChoice === "rock")
    ) {
      //computer wins
      //console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
      resultContainer.textContent = `You lose, ${computerChoice} beats ${humanChoice}.`;
      computerScore += 1;
      scoreContainer.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
    } else {
      //human wins
      //console.log(`You win, ${humanChoice} beats ${computerChoice}`);
      resultContainer.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
      humanScore += 1;
      scoreContainer.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
    }
  }
  if (humanScore >= 5) {
    scoreContainer.textContent = `You win the game with ${humanScore} to ${computerScore}.`;
  }
  if (computerScore >= 5) {
    scoreContainer.textContent = `You lose the game with ${humanScore} to ${computerScore}.`;
  }
};

/*
playGame = () => {
  for (let i = 1; i <= 5; i++) {
    console.log(`ROUND ${i}:`);
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    console.log("You win");
  } else {
    console.log("You lose");
  }
};

playGame();
*/
