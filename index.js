console.log('Starting Rock, Paper, Scissors');

// Function to get random selection back for computer
const computerPlay = () => {
  const options = ['rock', 'paper', 'scissors'];
  return options[getRandomNumber(3)];
};

// helper function to randomize a number
const getRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

// Play a round with the player and computer
const playRound = () => {
  const playerSelection = prompt('Type [rock, paper or scissors]');
  const computerSelection = computerPlay();

  if (playerSelection == computerSelection) {
    console.log('Its a tie. Play again.');
    return playRound();
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
  console.log(
    playerWon
      ? `You win! ${playerSelection} beats ${computerSelection}`
      : `You lost! ${computerSelection} beats ${playerSelection}`
  );
  return playerWon;
  // ? `You win! ${playerSelection} beats ${computerSelection}`
  // : `You lost! ${computerSelection} beats ${playerSelection}`;
};

// Calculate winner. If tie, prompt again, if winner, return winner.
// Display playerWons to user

// const playerSelection = prompt('Type your selection:').toLowerCase();

// game functiom that accepts one argument for how many rounds should be played
const game = (numberOfRounds) => {
  // object to hold game results
  let results = {
    gamesPlayed: 0,
    playerScore: 0,
    computerScore: 0,
  };

  for (let index = 0; index < numberOfRounds; index++) {
    const round = playRound();
    if (round) {
      results.playerScore++;
    } else {
      results.computerScore++;
    }
    results.gamesPlayed = index + 1;
  }
  return results;
};

const gameResults = game(5);
console.log(`Game results:`);
console.log(`Rounds played: ${gameResults.gamesPlayed}`);
console.log(`Your score: ${gameResults.playerScore}`);
console.log(`Computer score: ${gameResults.computerScore}`);
if (gameResults.playerScore > gameResults.computerScore) {
  console.log('Congrats, you won the game!');
} else {
  console.log('You lost the game. Better luck next time!');
}
