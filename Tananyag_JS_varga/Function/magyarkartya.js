// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// function getCard() {
// 	const values = [
// 		'1',
// 		'2',
// 		'3',
// 		'4',
// 		'5',
// 		'6',
// 		'7',
// 		'8',
// 		'9',
// 		'10',
// 		'J',
// 		'Q',
// 		'K',
// 		'A'
// 	];
// 	const valIdx = Math.floor(Math.random() * values.length);
// 	const value = values[valIdx];

// 	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
// 	const suitIdx = Math.floor(Math.random() * suits.length);
// 	const suit = suits[suitIdx];
// 	return { value: value, suit: suit };
// }

function pick(arr) {
  //return random element from arr
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getCard() {
  const value = ["7", "8", "9", "10", "alsó", "felső", "király", "ász"];
  const color = ["piros", "zöld", "makk", "tök"];
  let pont, szin, ertek;

  szin = pick(color);
  ertek = pick(value);

  switch (ertek) {
    case "7":
      pont = 7;
      break;
    case "8":
      pont = 8;
      break;
    case "9":
      pont = 9;
      break;
    case "10":
      pont = 10;
      break;
    case "alsó":
      pont = 11;
      break;
    case "felső":
      pont = 12;
      break;
    case "király":
      pont = 13;
      break;
    case "ász":
      pont = 14;
      break;
  }

  return { szin: szin, ertek: ertek, pont: pont };
}

let kartya = getCard();

console.log(kartya);
