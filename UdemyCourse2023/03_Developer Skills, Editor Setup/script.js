// Remember, we're gonna use strict mode in all scripts now!
//setup default formatter.
/*setting - beírni default formatter, majd a default formatter résznél kiválasztani a
Prettier - Coed formattert*/

'use strict';

///////////////////////////////////////
//Our most recent task is this: "Given an array of temperatures of one day,
//calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue; //kizárjuk a nem number típusúakat

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }

  return `Min: ${min}, Max: ${max}, Diff: ${max - min}`;
};
console.log(calcTempAmplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps, Just merge two arrays

const t1 = [3, 5, 1, 'error'];
const t2 = [9, 2, 5];

const calcTempAmplitudeNew = function (t1, t2) {
  //const temps = t1.concat(t2); //ES5 verzió, konkatenálás
  const temps = [...t1, ...t2]; //ES6 destruktúrálás
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
console.log(calcTempAmplitudeNew(t1, t2));

////////////////////////////Debugging with the Console and Breakpoints/////////////////////////////

const measureKelvin = value => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:')), Number nélkül BUG keletkezik....prompt stringként kezeli a megadott értéket
    value: value,
  };

  return measurement.value + 273.15 + ' Kelvin ';
};
console.log(measureKelvin(10));

//////////////////////////////////////Using a debugger//////////////////////////////////////

const calcTempAmplitudeBug = function (t1, t2) {
  //chrome, source fül, megnyitni a js fájlt, töréspontot elhelyezni, elemezni sorról-sorra
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    //debugger; // a futás közben ennél a pontnál megáll, és megnyitja a debugger-t
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
console.log(calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]));

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
*/

const forecasted = [17, 21, 23];

const printForecast = arr => {
  let out = '';

  for (let i = 0; i < arr.length; i++) {
    out += `${arr[i]}C in ${i + 1} days ... `;
  }

  return `...${out}`;
};

console.log(printForecast(forecasted));
