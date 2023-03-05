console.log('-----------MAPS ITERATION-----------');

//új map feltöltése másképp, SET nélkül

//egy tömbe helyezzük el a külömbözó tömbökbe rakott kulcs érték párokat.
//a tömb 0.eleme a kulcs és az 1. eleme az érték
//quiz kérdést és válaszokat helyzünk bele
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
//A MAP is iterálható így a FOR LOOP használható rá

//key a kulcsot adja vissza, value az értéket
//mivel csak a válasz lehetőségeket akarom visszaadni, így egy if-el ki kell választani  a number típusú kulcsokat
console.log(question.get('question')); //csak a kérdés kulcsot kérem le, és adja vissza az értéket
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//prompt-ról bekérünk egy számot
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(question.get('correct') === answer));

// Convert map to array. annyit jelent, hogy a spread operátorral kicsomagolom és megkapom a tömböt
console.log([...question]);

//metzódusokat amiket tömböknél használhatunk
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
