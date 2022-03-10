// Function to get random selection back for computer
const computerPlay = () => {
  const options = ['rock', 'paper', 'scissors'];
  return options[getRandomNumber(3)];
};

// helper function to randomize a number
const getRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

// displays running game results
const displayResults = (result) => {
  const display = document.querySelector('.display');
  const output = document.createElement('p');
  output.textContent = result;
  display.appendChild(output);
};

// displays the end results when a competitor reaches the game limit first
const endGame = (isPlayerWinner) => {
  const display = document.querySelector('.display');
  const output = document.createElement('h3');
  isPlayerWinner
    ? (output.textContent = `You won ${playerScore} games to ${computerScore}`)
    : (output.textContent = `You lost ${playerScore} games to ${computerScore}`);

  display.appendChild(output);
};

// disables buttons once the game limit has been reached
const disableButtons = () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

// Play a round with the player and computer
const playRound = (e) => {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();

  if (playerSelection == computerSelection) {
    displayResults('Its a tie. Play again.');
    return;
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
    if (computerSelection == 'rock') {
      playerWon = false;
    } else {
      playerWon = true;
    }
  }

  if (playerWon) {
    playerScore++;
    if (playerScore < 5) {
      displayResults(
        `You win! ${playerSelection} beats ${computerSelection}. (You: ${playerScore} Opponent: ${computerScore})`
      );
    } else {
      endGame(playerWon);
      disableButtons();
    }
  } else {
    computerScore++;
    if (computerScore < 5) {
      displayResults(
        `You lost! ${computerSelection} beats ${playerSelection}. (You: ${playerScore} Opponent: ${computerScore})`
      );
    } else {
      endGame(playerWon);
      disableButtons();
    }
  }
};

// Add event listener to buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', playRound);
});

//initialize variables
let playerScore = 0;
let computerScore = 0;
