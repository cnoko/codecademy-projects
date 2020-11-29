let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}
function getAbsoluteDistance(a, b) {
    return Math.abs(a-b);
}
function compareGuesses(userGuess, computerGuess, secretTarget) {
    if(userGuess > 9 || userGuess < 0)
      alert('User guess is out of range');
  return  getAbsoluteDistance(secretTarget, userGuess) <= getAbsoluteDistance(secretTarget, computerGuess);
}
function updateScore(winner) {
  if (winner == 'human') 
    humanScore++;
  else 
    computerScore++;
}
function advanceRound() {
    currentRoundNumber++;
}