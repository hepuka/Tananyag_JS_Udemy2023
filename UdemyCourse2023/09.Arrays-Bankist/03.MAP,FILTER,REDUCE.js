('--------------MAP Method------------');

//elméleti rész pdf-ben

const eurToUsd = 1.1;

//normál függvénnyel
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

//nyílfüggvénnyel
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

//for-of-al map helyett
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

//indexet és az elemet is kiírja map method-al
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

console.log('-----------------FILTER Method-----------');

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

//ugyanez a szelekció for-of-al
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

//negatív számok szelekciója nyílfüggvénnyel
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

console.log('-----------REDUCE Method------------');
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

//acc accumulator ehhez adja hozzá mindig a cur értéket és a 0 az acc alapértéke
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

//2.verzió
let balance2 = 0; //ez az accumulator
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]); //ezzel adjuk meg, hogy az acc alapértéke a tömb 0. eleme legyen
console.log(max);

console.log('----------Chaining Methods---------');

console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalDepositsUSD);
