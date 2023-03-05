console.log('--------Coding Challenge #2-----------');
//Let's continue with our football betting app!

/* //1.Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski") */
console.log('1.)');
for (const [index, playerName] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${playerName}`);
}
//2.verzió
for (const [index, playerName] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(index) + 1}: ${playerName}`);
}

/* 
2.) Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember) */
console.log('2.)');
let total = 0;

//Object.values kell mivel csak a property értéke kell nekünk
for (const item of Object.values(game.odds)) {
  total += item;
}
console.log(`Average odd: ${total / Object.values(game.odds).length}`);

/* 3.) Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). 

HINT: Note how the odds and the game objects have the same property names. */
console.log('3.)');

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;

  console.log(`Odds of ${teamStr}: ${odd}`);
}

/* BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      } */

console.log('--------Coding Challenge #2 VÉGE-----------');
