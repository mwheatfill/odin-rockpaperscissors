console.log('Starting Rock, Paper, Scissors');
// Ask player for selection
const playerSelection = 'rock';

const computerPlay = () => {
  let options = ['rock', 'paper', 'scissors'];
  return options[getRandomNumber()];
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * 3);
};

// Return random selection from computer
const computerSelection = computerPlay();

console.log(computerPlay());

// Play a round with the player and computer
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return 'Its a tie.';
  }

  if (playerSelection == 'rock') {
    if (computerSelection == 'paper') {
      result = 'Computer won';
    } else {
      result = 'Player won';
    }
  }

  if (playerSelection == 'paper') {
    if (computerSelection == 'scissors') {
      result = 'Computer won';
    } else {
      result = 'Player won';
    }
  }

  if (playerSelection == 'scissors') {
    if ((computerSelection = 'rock')) {
      result = 'Computer won';
    } else {
      result = 'Player won';
    }
  }

  return result;
};
console.log(playRound('paper', 'scissors'));

// Calculate winner. If tie, prompt again, if winner, return winner.
// Display results to user

// const playerSelection = prompt('Type your selection:').toLowerCase();
