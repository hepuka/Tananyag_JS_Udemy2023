let a = 5;

console.log(a++);
console.log(++a);

console.log(0 == 0);
console.log(0 === 0);

console.log(0 == "0");
console.log(0 === "0");
console.log(0 !== "0");

console.log(undefined == undefined);
console.log(undefined == null);
console.log(undefined === null);
console.log(undefined === 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined === 0);
console.log(undefined == true);
console.log(undefined === true);
console.log(undefined == false);
console.log(undefined === false);
console.log(undefined == "");
console.log(undefined == "a");
console.log(undefined == 0);
console.log(undefined == 1);
console.log(undefined == NaN);

//equality operator "==" to null or undefined, there is no numerical conversion because null can only be equal to null or undefined, and nothing else.
console.log(null == null);
console.log(null == undefined);
console.log(null === undefined);
console.log(null == "");
console.log(null == "a");
console.log(null == 0);
console.log(null == 5);
console.log(null == true);
console.log(null == false);
console.log(null == NaN);

//NaN is not equal to anything, even to itself.
console.log(NaN == NaN);

// Basic Operators
// Math operators
const now = new Date().getFullYear();
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // 25
x *= 4; // 100
x++; // 101
x--; //100
x--; //99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
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
console.log(num1 == num3); //true, mert a == számmá konvertálja a stringet, típuskényszerítést hajt végre
console.log(num1 === num3); //false, mert a === nem csinál típuskényszerítést

if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

//const favourite = Number(prompt("What's your favourite number?"));
const favourite = 23;
console.log(favourite, typeof favourite);

if (favourite === 23) {
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
const hasGoodVision = false; // B
const isTired = false; //C

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

//falsy values: undefined, null, NaN, 0, ""

//AND operátor az első false operandussal tér vissza, ne ha nincs az utolsóval
console.log(1 && 0 && 8);
console.log(1 && [] && 2);
console.log(NaN && 1);
console.log(NaN && undefined);
console.log(undefined && true);
console.log(1 && "str" && null);
console.log(1 && null && "str");

//OR operátor az első true operandussal tér vissza, ha nincs az utolsóval
console.log(0 || "" || undefined || null || 1 || 0);
console.log(1 || 6);
console.log(0 || 1);
console.log(1 || "str" || null);

//NOT operator, used to convert values to boolean type:
console.log(!undefined);
console.log(!null);
console.log(!NaN);
console.log(!0);
console.log(!"");
console.log(!10);
console.log(!"str");
console.log(!true);
console.log(!false);
console.log(!!"non-empty string");
console.log(!!null);
console.log(!!10);
console.log(!!true);
console.log(!!false);

//Priority of Operators
let b = 3;
let c = 5;
let d = ++b + c++;
console.log(d);

//Boolean Conversions
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0n));
console.log(Boolean("str"));
console.log(Boolean(1));
console.log(Boolean(2358543784542n));

let obj = { id: "b", date: 1977 };
let arr = [1, 2, 3, 4, 5];
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(Symbol()));
console.log(Boolean(obj));
console.log(Boolean(arr));

//Convert to number
let a1 = undefined;
let b1 = NaN;
let c1 = "str";
let d1 = null;
let e1 = true;
let f1 = false;
console.log(Number(a1));
console.log(Number(b1));
console.log(Number(c1));
console.log(Number(d1));
console.log(Number(e1));
console.log(Number(f1));
