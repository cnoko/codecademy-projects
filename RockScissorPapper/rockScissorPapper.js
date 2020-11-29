const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' 
      || userInput === 'paper' 
      || userInput === 'scissors')
    return userInput;
    console.log('Error: userInput is not valid');
  return '';
};
/*
console.log(getUserChoice('paper'));
console.log(getUserChoice('rock'));
console.log(getUserChoice('scissors'));
console.log(getUserChoice('test'));
*/
const getComputerChoice = () => {
    /*
    variant 1
  const types = ['rock', 'paper', 'scissors'];
  return types[Math.floor(Math.random()*3)];
  */
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
          return 'scissors';
        break;
      default:
        console.log('Invalid random number');
        return '';
        break;
  }
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
      return 'The game is tie!';
  }
if (userChoice === 'rock') {
    if (computerChoice === 'paper')
      return 'ComputerChoice is winner!';
    else
      return 'UserChoice is winner!';
} else if(userChoice === 'paper') {
    if (computerChoice === 'scissors') 
      return 'ComputerChoice is winner!';
    else 
      return 'Userchoice is winner!';
  } else {
      if(computerChoice === 'rock')
        return 'ComputerChoice is winner!'
      else 
        return 'UserChoice is Winner!';
  }
}

/*
test 
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
*/
function playGame(userChoiceStr, computerChoiceStr) {
  //cheat
  if (userChoiceStr === 'bomb') {
    console.log('User choice has won!');
    return;
}
userChoiceStr = getUserChoice(userChoiceStr);

let result = determineWinner(userChoiceStr, computerChoiceStr);
console.log(`user choice is ${userChoiceStr} and computer choice is ${computerChoiceStr} then ${result} `);
}
playGame('bomb', getComputerChoice());