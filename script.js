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

getHumanChoice = () => {
  let humanChoice = prompt("Rock, paper, scissors, shoot!").toLowerCase();
  if (humanChoice.match(/^(rock|paper|scissors)$/)) {
    return humanChoice;
  } else {
    getHumanChoice();
  }
};

playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log(`Tie, you both played ${humanChoice}. Try again.`);
    playRound(getHumanChoice(), getComputerChoice());
  } else {
    if (
      (humanChoice === "rock") & (computerChoice === "paper") ||
      (humanChoice === "paper") & (computerChoice === "scissors") ||
      (humanChoice === "scissors") & (computerChoice === "rock")
    ) {
      //computer wins
      console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
      computerScore += 1;
    } else {
      //human wins
      console.log(`You win, ${humanChoice} beats ${computerChoice}`);
      humanScore += 1;
    }
  }
};

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
