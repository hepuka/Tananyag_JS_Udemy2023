console.log('--------Coding Challenge #1-----------');
/* 
We're building a football betting app (soccer for my American friends)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. 
So here are your tasks:

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored

*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ] /*  */,
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Create one player array for each team (variables 'players1' and 'players2')
//külön tömbökbe szedem ki a két tömböt az objektumból
console.log('1.)');
const [players1, players2] = game.players;
console.log(players1, players2);

//players1 tömb első és harmadik elemét írja ki
const [pl1, , pl2] = players1;
console.log(pl1, pl2);

//itt players tömben lévő két tömböt szedtem ki egy változóba
const pl3 = game.players;
console.log(pl3);

/* 2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, 
and one array ('fieldPlayers') with all the remaining 10 field players */
//gk a players1 legelső eleme (kapus), és a többit a REST operátorral egy tömbbe rakom(játékosok)
console.log('2.)');
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);
const [gk2, ...fieldPlayers2] = players2;
console.log(gk2);
console.log(fieldPlayers2);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)
console.log('3.)');
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

/* 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') 
containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' */
console.log('4.)');
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
console.log('5.)');

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//2.verzió, ha csak a game-re hivatkozunk, nem konkrétan az odds objektumra
//1.lépésben hivatkozunk az odds obejktumra, majd azt is destruktúráljuk
/*const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);*/

/* 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and 
prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in) */
console.log('6.)');

//a függvény paraméterének egy REST operátorral összegyűjtött, egy tömbbe rakott argumentumokat adunk át
const printGoals = function (...players) {
  //console.log(players);
  console.log(`${players.length} goals were scored by ${players}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

/* 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator. */
console.log('7.)');
team1 < team2 && console.log('Team1 is more likely to win!');
team2 < team1 && console.log('Team2 is more likely to win!');

//mivel nincs else ág így ezen formában hibát ad, mert nincs :-al folytatva
//ezért kell használni a ? helyett az &&-t mint logikai operátort.
//Azért kell a && használni mert a kiértékelésnél az első true értéket keressük. nekünk az kell, hogy a team1 legyen a kisebb
//team2 < team1 ? console.log('Team2 is more likely to win!');

console.log('--------Coding Challenge #1 VÉGE-----------');
