///////////////////////////////////////
// Activating Strict Mode
//különleges védelmi mód bekapcsolása a biztonságos kód megírásához, hibák elkerülésére
//1. nem enged bizonyos kódok megírását
//2. megjeleníti a hibákat

"use strict";

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //csak strick mód bekapcsolására jelez, hogy itt elírás van
if (hasDriverLicense) console.log("I can drive :D");

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
