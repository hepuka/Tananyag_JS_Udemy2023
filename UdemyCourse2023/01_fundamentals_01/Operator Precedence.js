// Operator Precedence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const now = new Date().getFullYear();
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

/////////////////////////////////////////////
const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

let markBmi = markMass / Math.pow(markHeight, 2); //markHeight**2
let johnBmi = johnMass / Math.pow(johnHeight, 2);
let ismarkHigherBMI = markBmi > johnBmi;
console.log(markBmi, johnBmi, ismarkHigherBMI);

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
  console.log(`John's BMI (${johnBmi}) is higher than Marks's (${markBmi})!`);
}
