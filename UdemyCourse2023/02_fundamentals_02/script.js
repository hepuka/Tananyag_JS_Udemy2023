///////////////////////////////////////
// Activating Strict Mode
//különleges védelmi mód bekapcsolása a biztonságos kód megírásához, hibák elkerülésére
//1. nem enged bizonyos kódok megírását
//2. megjeleníti a hibákat

"use strict";

let hasDriversLicense = false;
//const passTest = true;

//if (passTest) hasDriverLicense = true; //csak strick mód bekapcsolására jelez, hogy itt elírás van
if (hasDriversLicense) console.log("I can drive :D");

//const interface = "Audio"; //csak strict módba jelez, ogy ez egy foglalt szó
//const private = 534; //ez is csak strict módban jelez

// Functions
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
  return `Juice with ${apples} apples and ${oranges} oranges.`;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//const num = Number("23");

// Function Declarations vs. Expressions, ez a két függvénytípus van a JS-ben

// Function declaration, ez esetben a függvény hívás történhet a deklaráció előtt
const age1 = calcAge1(1991);

function calcAge1(birthYeah) {
  return 2022 - birthYeah;
}

// Function expression

//const age2 = calcAge2(1991); //ez esetben hibát dob, nem férünk hozzá a függvényhez a deklaráció előtt

//névnélküli függvény írunk, és ezt helyezzük el egy változóban.A függvényhíváskor erre a változóra hivatkozunk
const calcAge2 = function (birthYeah) {
  return 2022 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow functions

const calcAge3 = (birthYeah) => 2022 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2022 - birthYeah;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples); //függvényhívások egy másik függvényben
  const orangePieces = cutFruitPieces(oranges);

  return `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
}
console.log(fruitProcessor2(2, 3));

// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsUntilRetirement2 = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement2(1991, "Jonas"));
console.log(yearsUntilRetirement2(1950, "Mike"));

//CODING CHALLANGE1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. 
Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters 
('avgDolhins' and 'avgKoalas'), 
and then logs the winner to the console, together with the victory points, 
according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores

*/

const avg = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3;
};

const dolphinsScore = avg(85, 54, 41);
const koalasScore = avg(23, 34, 27);

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("No team wins!");
  }
}

checkWinner(dolphinsScore, koalasScore);

// Introduction to Arrays
//const y = new Array(1991, 1984, 2008, 2020);
const y = [1991, 1984, 2008, 2020];
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); //utolsó elem kiíratása

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas2 = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas2);
console.log(jonas2.length);

// Exercise
const years = [1990, 1967, 2002, 2010, 2018];

const result = [];
years.map(function (year) {
  result.push(calcAge(year));
});

console.log(result);

const age11 = calcAge(years[0]);
const age22 = calcAge(years[1]);
const age33 = calcAge(years[years.length - 1]); //utolsó elem kiíratása
console.log(age11, age22, age33);

//a 3 érték egy tömbben való tárolása
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// Basic Array Operations (Methods)
// Add elements
const newLength = friends.push("Hepu");
console.log(friends);
console.log(newLength);

friends.unshift("John"); //tömb elejére rakja be az új elemet
console.log(friends);

// Remove elements
friends.pop(); // utolsó elemet törli
console.log(friends);

friends.shift(); // első elemet törli
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
} else {
  console.log("No friend!");
}

//CODING CHALLANGE2
/*
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, 
the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
calculated based on the rules above (you can check out the code from first tip calculator challenge 
if you need to). Use the function type you like the most. Test the function using a bill value of 100.

2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, 
calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the 
returned value of a function! So you can just call a function as array values 
(so don't store the tip values in separate variables first, but right in the new array) 😉
*/

const bill = [125, 555, 44];
let tip = 0;
let tips = [];
let total = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300
    ? (tip = (15 * bill) / 100)
    : (tip = (20 * bill) / 100);
};

bill.map(function (bill) {
  tips.push(calcTip(bill));
  total.push(calcTip(bill) + bill);
});

console.log(tips);
console.log(total);

// Introduction to Objects
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2022 - 1977,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

// Dot vs. Bracket Notation
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

/* 
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
} */

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

// Object Methods
const jonas3 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1977,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2022 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas3.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

jonas3.calcAge();
console.log(jonas3.getSummary());

console.log(jonas3);

//CODING CHALLANGE3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). 
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

*/

const Mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,

  markBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};

const John = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,

  johnBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};

Mark.markBMI();
John.johnBMI();

console.log(Mark.BMI, John.BMI);

if (Mark.BMI > John.BMI) {
  console.log(
    `${Mark.fullname}'s BMI (${Mark.BMI}) is higher than ${John.fullname}'s BMI`
  );
} else if (John.BMI > Mark.BMI) {
  console.log(
    `${John.fullname}'s BMI (${John.BMI}) is higher than ${Mark.fullname}'s BMI`
  );
}

// Iteration: The for Loop
// for loop keeps running while condition is TRUE
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i}`);
}

console.log("--- Looping Arrays ---");
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  types.push(typeof jonasArray[i]);
}

console.log(types);

const ages2 = [];

for (let i = 0; i < years.length; i++) {
  ages2.push(2022 - years[i]);
}
console.log(ages2);

console.log("--- Breaking and Continuing ---");
console.log("--- ONLY STRINGS ---"); //csak a string típusúakat szedi ki és írja ki
const strings = [];
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue; //ha nem string típusú akkor menjen tovább és ne rakja bele a tömbbe

  strings.push(jonasArray[i]);
}

console.log(strings);

console.log("--- BREAK WITH NUMBER ---");
const elementsUntilNumber = [];
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break; //ha a következő elem number típusú akkor megszakítja a ciklus futását

  elementsUntilNumber.push(jonasArray[i]);
}

console.log(elementsUntilNumber);

// Looping Backwards and Loops in Loops
console.log("--- Looping Backwards ---");
for (let i = jonasArray.length - 1; i >= 0; i--) {
  //visszafele kiírja a tömb elemeit
  console.log(i, jonasArray[i]);
}

console.log("--- Loops in Loops ---");
for (let exercise = 1; exercise < 4; exercise++) {
  //külső ciklusban fut egy belső cilus. A külső ciklus csak címeket írja, a belső a sorokat
  console.log(` - Starting exercise ${exercise} -`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

// The while Loop
console.log("--- The while Loop ---");

let rep = 1;
while (rep <= 5) {
  console.log(`WHILE: Lifting weights repetition ${rep} `);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

//CODING CHALLANGE4
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for 
every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
This function calculates the average of all numbers in the given array. 
This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:

  4.1. First, you will need to add up all values in the array. 
  To do the addition, start by creating a variable 'sum' that starts at 0. 
  Then loop over the array using a for loop. 
  In each iteration, add the current value to the 'sum' variable. 
  This way, by the end of the loop, you have all values added together

  4.2. To calculate the average, divide the sum you calculated before by the length of the array 
  (because that's the number of elements)
  4.3. Call the function with the 'totals' array

*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipss = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tipss.push(tip);
  totals.push(bills[i] + tip);
}

console.log(tipss);
console.log(totals);

const calcAverage = (arr) => {
  let sum = 0;

  arr.map((item) => {
    sum += item;
  });

  /*   for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  } */

  return sum / arr.length;
};

console.log(calcAverage(totals));
