'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

let computerNumber = Math.floor(Math.random() * 20) + 1; //kell a +1 mert enélkül a 0 is benne lenne
let score = 20;
let highscore = 0;

//kiírja a kívánt üzenetet
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const inputNumber = Number(document.querySelector('.guess').value); //a megadott számot számmá konvertálja és berakja a változóba

  // When there is no input
  if (!inputNumber) {
    displayMessage('No number!');

    // When player wins
  } else if (inputNumber === computerNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = computerNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (inputNumber !== computerNumber) {
    if (score > 1) {
      displayMessage(inputNumber > computerNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 10;
  computerNumber = Math.floor(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
