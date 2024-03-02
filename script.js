let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (x, y) => Math.abs(x - y);

const compareGuesses = (humanGuess, computerGuess, target) => {
  if (humanGuess < 0 || humanGuess > 9) alert('Out of range');
  return getAbsoluteDistance(humanGuess, target) <= getAbsoluteDistance(computerGuess, target);
};

const updateScore = winner => {
  if (winner === 'human') humanScore++;
  else  computerScore++;
};

const advanceRound = () => currentRoundNumber++;
