let a = 5;

console.log(a++);
console.log(++a);

console.log(0 == 0);
console.log(0 === 0);

console.log(0 == "0");
console.log(0 === "0");
console.log(0 !== "0");

//When comparing in JS, some data types are not converted to numeric type. So, the value undefined is compared with other values:
console.log(undefined === 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

//When applying the equality operator "==" to null or undefined, there is no numerical conversion because null can only be equal to null or undefined, and nothing else.
console.log(null == null);
console.log(null == undefined);
console.log(undefined == true);

console.log(null == "a");
console.log(null == 5);
console.log(null == true);
console.log(null == false);

//NaN is not equal to anything, even to itself.
console.log(NaN == NaN);
console.log(NaN === NaN);

// Basic Operators
// Math operators
const now = new Date().getFullYear();
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

// Equality Operators: == vs. ===34
let num1 = 18;
let num2 = 7;
let num3 = "18";
let num4 = 18;
let age = 45;
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

if (hasDriversLicense && hasGoodVision && isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

//AND operator returns the value of the first operand if it evaluates to false. Otherwise, it returns the value of the second operand.

//falsy values: undefined, null, NaN, 0, "",false

console.log(1 && 8);
console.log(0 && 6);
console.log(NaN && 1);
console.log(NaN && undefined);

//Operator && can be used in code chains.
console.log(1 && "str" && null);
console.log(1 && null && "str");

//OR operator returns the value of the first operand if it evaluates to true. Otherwise, returns the value of the second operand.
console.log(1 || 0);
console.log(1 || 6);
console.log(0 || 6); // because the 0  is a falsy value

//Operator || can be used in code chains.
console.log(1 || "str" || null);

//NOT operator
console.log(!true);
console.log(!0);

//Double NOT is used to convert values to boolean type:
console.log(!!"non-empty string");
console.log(!null);
console.log(!!null);

//Priority of Operators
let b = 3;
let c = 5;
let d = ++b + c++;
console.log(d);

//Boolean Conversions

let aa = "5";
let bb = "";

//If the string is empty returns false; otherwise — true.
console.log(Boolean(aa));
console.log(Boolean(bb));

let aaa = 5;
let bbb = 0;

//If a number is +0, -0, or NaN, then returns false; otherwise — true.
console.log(!!aaa);
console.log(!!bbb);

let undef = undefined;
console.log(Boolean(undef));

let n = null;
console.log(Boolean(n));

let s = Symbol(a);
console.log(Boolean(s));

let bigint = 0n;
let bigint2 = 2358543784542n;
console.log(Boolean(bigint));
console.log(Boolean(bigint2));

let obj = { id: "b", date: 245 };
console.log(Boolean(obj));

//Convert to number
let a1 = undefined;
let b1 = NaN;
let c1 = "7";
let d1 = null;
let e1 = true;
let f1 = false;
console.log(Number(a1));
console.log(Number(b1));
console.log(Number(c1));
console.log(Number(d1));
console.log(Number(e1));
console.log(Number(f1));
