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

var z1 = true == "true";
var z2 = false == "true";
var z3 = true === "true";
var z4 = false === "true";

console.log(z1);
console.log(z2);
console.log(z3);
console.log(z4);

console.log("1" + 2 - (1 * "2") / "2");

console.log(10 - "5");
console.log(10 * "5");
console.log(10 / "5");
console.log(10 % "5");

console.log(typeof !1);
console.log(typeof !!1);
