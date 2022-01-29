console.log('Starting Rock, Paper, Scissors');
// Ask player for selection
const playerSelection = prompt('Type [rock, paper or scissors]');

// Get random selection back for computer
const computerPlay = () => {
  let options = ['rock', 'paper', 'scissors'];
  return options[getRandomNumber()];
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * 3);
};

const computerSelection = computerPlay();

// Play a round with the player and computer
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return 'Its a tie. Play again.';
  }

  if (playerSelection == 'rock') {
    if (computerSelection == 'paper') {
      playerWon = false;
    } else {
      playerWon = true;
    }
  }

  if (playerSelection == 'paper') {
    if (computerSelection == 'scissors') {
      playerWon = false;
    } else {
      playerWon = true;
    }
  }

  if (playerSelection == 'scissors') {
    if ((computerSelection = 'rock')) {
      playerWon = false;
    } else {
      playerWon = true;
    }
  }

  return playerWon;
  // ? `You win! ${playerSelection} beats ${computerSelection}`
  // : `You lost! ${computerSelection} beats ${playerSelection}`;
};

console.log(playRound(playerSelection, computerSelection));

// Calculate winner. If tie, prompt again, if winner, return winner.
// Display playerWons to user

// const playerSelection = prompt('Type your selection:').toLowerCase();

// game functiom that accepts one argument for how many rounds should be played
const game = (numberOfRounds) => {
  // object to hold game results
  // - total rounds, rounds won by player, rounds won by computer
  // minimum to keep score and report at the end of all rounds who won
};
