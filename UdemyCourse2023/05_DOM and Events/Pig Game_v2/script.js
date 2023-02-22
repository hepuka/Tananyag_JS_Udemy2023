'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = () => {
  scores = [0, 0]; //0.elem a playr0 értéke, az 1.elem a player1 értéke
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('active');
  player1El.classList.remove('active');
};

init();

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; //a htmlben az img tag attributuma az src, és ezt állítjuk be a véletlenszám értékére

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0; //váltáskor le kell nullázni, mert a másik játékosnál az összeg továbbmegy, nem kezdi 0-ről
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('active');
  player1El.classList.toggle('active');
};

btnHold.addEventListener('click', () => {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore; //itt tároljuk el az értéket a tömben

    document.getElementById(`score--${activePlayer}`).textContent = //itt jelenítjük meg az aktívplayer felületén
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
