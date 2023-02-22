// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(now - 1991 > now - 2018);

x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

/*Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

let markBmi = markMass / (markHeight * markHeight); //markHeight**2
let johnBmi = johnMass / (johnHeight * johnHeight);
let ismarkHigherBMI = markBmi > johnBmi;
console.log(markBmi, johnBmi, ismarkHigherBMI);

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
  console.log(`John's BMI (${johnBmi}) is higher than Marks's (${markBmi})!`);
}
// Strings and Template Literals
const job = "teacher";
let birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String 
multiple 
lines`);

// Taking Decisions: if / else Statements
let age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// type conversion - manuálisan adjuk meg a konverziót (típuskonverzió)
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion - JS automatikusan csinálja (típuskényszerítés)
console.log("I am " + 23 + " years old"); // a + operátor konvertálja a számot string-é
console.log("23" - "10" - 3); // ez esetben a - operátor számmá alakítja a stringet
console.log("23" / "2"); // a / operátor is számmá alakítja a stringet

let n = "1" + 1; // '11'
n = n - 1; // n-et mint stringet a - operátor számmá alakítja
console.log(n);

// Truthy and Falsy Values
// HAMISNAK, false-nak MINŐSÜLŐ ÉRTÉKEK
// undefined, null, 0, '', NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));

console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

// Equality Operators: == vs. ===34
let num1 = 18;
let num2 = 7;
let num3 = "18";
let num4 = 18;
console.log(num1 === num4); //a típust is ellenőrzi
console.log(num1 === num2);
console.log(num1 == num3); //true, mert a == számmá konvertálja a stringet, típuskonverziót hajt végre
console.log(num1 === num3); //false, mert a === nem csinál típuskényszerítést

if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

//const favourite = Number(prompt("What's your favourite number?"));
const favourite = 23;
console.log(favourite, typeof favourite);

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log("Cool! 23 is an amzaing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with 
the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score
 than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score 
and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const avgDolphinsScore = (96 + 108 + 89) / 3;
const avgKoalasScore = (88 + 91 + 110) / 3;
console.log(avgDolphinsScore, avgKoalasScore);

if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore >= 100) {
  console.log("DolphinsScoreaverage is the winner");
} else if (avgKoalasScore > avgDolphinsScore && avgKoalasScore >= 100) {
  console.log("KoalasScoreaverage is the winner");
} else if (
  avgDolphinsScore === avgKoalasScore &&
  avgDolphinsScore >= 100 &&
  avgKoalasScore >= 100
) {
  console.log("Both of them win the trophy");
} else {
  console.log("No one wins the trophy");
}

// The switch Statement
const day = "wednesday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

// Statements and Expressions
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);

// The Conditional, Ternary Operator
age = 31;

age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

//ternáris operátor használata template literálban
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. 
It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, 
and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
Example: ''

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300
*/

const bill = 275;
let tip = 0;

bill >= 50 && bill <= 300
  ? (tip = (15 * bill) / 100)
  : (tip = (20 * bill) / 100);

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
