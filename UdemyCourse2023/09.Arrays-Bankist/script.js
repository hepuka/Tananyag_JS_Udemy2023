//CSAK AKKOR KELL HA A BANKING APPHOZ KELL

'use strict';

console.log('--------Simple Array Methods---------');

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log('-------SLICE--------');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

console.log('-------SPLICE--------');

arr.splice(-1); //utolsó elemet törli
console.log(arr);
arr.splice(1, 2); //1.elemet kiírja majd 2-t töröl és az utána lévőt írja ki
console.log(arr);

console.log('-------REVERSE--------');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //az eredeti tömböt is módosítja
console.log(arr2);

console.log('-------CONCAT--------');
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

console.log('-------JOIN--------');
console.log(letters.join(' - '));

console.log('----------The new at Method---------');

arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// utolsó elemet 3 féleképpen is megkaphatom
//at metódussal a legegyszerűbb
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

//at-el a legegyszerűbb
console.log(arr.at(-1));

console.log('jonas'.at(0)); //jonas string első betűjét adja vissza
console.log('jonas'.at(-1)); //jonas string utolsó betűjét adja vissza

console.log('--------Looping Arrays: forEach--------------');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//forEach method
//1 paraméter az aktuális változó, a 2. az index
//continue és a break nem használható
//a ciklus folyamatába megy végig a tömbön
movements.forEach(function (movement, index) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

//for of-al ugyanaz
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---------forEach With Maps and Sets---------');

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//1 param az jelenlegi érték, 2. jelenlegi kulcs, 3. a teljes Map amit bejárunk
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

//1. param a jelenlegi érték, 2.param _ kell használni  mint elhanyagolható paraméter mert a key ugyanaz mint a value a Set adatstruktúránál
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

console.log();
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

console.log('-----------FIND Method---------');
//true vagy false-al tér vissza

// a find metódus csak at első negatív számot adja vissza, a filter metódus mindet visszaadja egy tömbe
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

//find metódussal egy objektumot adunk vissza amelyik megfelel a feltételeknek
//itt a Jessica Davis nevezetű objektumot keressük
const account = accounts.find(item => item.owner === 'Jessica Davis');
console.log(account);

console.log('-----------SOME, EVERY-----------');

console.log(movements);

// EQUALITY
//tru vagy false-al tér vissza
//van -130 szám a tömbben (true)
console.log(movements.includes(-130));

// SOME: CONDITION
//van -130 szám a tömbben (true)
console.log(movements.some(mov => mov === -130));

//van 1000-nél nagyobb érték a tömbben (true)
//van 5000-nél nagyobb érték a tömbben (false)
console.log(movements.some(mov => mov > 5000));

//van pozitív érték a tömbben?? (true)
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
//ellenőrzi, hogy minden elem pozitív-e, eredmény: false
console.log(movements.every(mov => mov > 0));

//accoun4-ben minden elem pozitív (true)
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
//callback függvény átadása some,every és filter metódusoknak

//callback függvény
const deposit = mov => mov > 0;

//a függvény átadása a metódusoknak
console.log(movements.some(deposit)); //van pozitív érték a tömbben?
console.log(movements.every(deposit)); //minde érték pozitív a tömbben???
console.log(movements.filter(deposit)); //visszaadja a pozitív értékeket

console.log('-----------FLAT, FLATMAP method-----------');
//ES2019-ben jelent meg

//beágyazott tömb
const arr3 = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr3);

//beágyazott tömbből visszaad egy sima tömböt amiben minden elem benne van
//arr3 = [[1, 2, 3], [4, 5, 6], 7, 8];
//arr3 = [1,2,3,4,5,6,7, 8];
console.log(arr3.flat());

//többmélységű tömb
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
//() jelbe kell rakni a mélység számát, ez a depth argument
console.log(arrDeep.flat(2));

// flat
//ez esetben nem csak egy accountot járunk és adjuk vissza az összeget, úgy mint az alkalmazásban, hanem a az egyberakott tömböt járjuk be amiben több account van
console.log(accounts);
const overalBalance = accounts
  .map(acc => acc.movements) //ezzel egy tömböt kapunk ami tartalmazza az összes movement array-t
  .flat() //egy tömböt kapunk amiben az összes movement eleme benne van
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
//ebben a verzióban a map és az azt követő flat metódusv van egybe
const overalBalance2 = accounts
  .flatMap(acc => acc.movements) //itt már rögtön egy tömböt kapunk amiben benne van az összes movement elem
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

console.log('--------Sorting Arrays-------');

// Strings
//az eredeti tömböt is módosítja
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); //JS beépített sor metódusával abc sorrendbe rakom. ebben a formában, csak string-re használható. Számokra nem
console.log(owners);

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

//növekvő sorrebe rakja az elemeket
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

//csökkenő sorrenbe rakja az elemeket
movements.sort((a, b) => b - a);
console.log(movements);

console.log('----------Creating and Filling Arrays-----------');

arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty arrays + fill method
//7 üres elemet rak a tömbbe, erre az üres tömbre nem hívható meg semmi
const x = new Array(7);
console.log(x);

//1-es számokat rak a 3.indextől kezdve az 5-ig. a többi üres elem marad
x.fill(1, 3, 5);
console.log(x);

//1-esekkel tölti fel a tömböt
x.fill(1);
console.log(x);

//az eredeti tömböt módosítja
//23-as számot rak a 2.indextől kezdve a 6-ig, a többi értéket változatlanul hagyja
arr.fill(23, 2, 6);
console.log(arr);

// Array.from
//7 elemű tömböt hozok létre amit 1-esekkel töltök fel
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

//7 elemű tömböt tölt fel 1-7-ig
//azért _,i mert a (curr,i)-ből nekünk csak az í kell
// az _ egy throwaway paraméter
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

/* 
- queryselectorAll egy NodeList-el tér vissza ami egy tömb(nem valós tömb) és tartalmazza az összes kiválasztott elemet  
- mivel ez a NodeList nem egy valós tömb, ebből egy valósat kell konvertálni, hogy tudjuk rá alkalmazni a metódusokat. Array.from() metódussal tudjuk ezt megtenni
*/

//ha a teljes összegre kattintok akkor visszaadja annak movement tömbe rakott értékeit
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    //movements__value osztályú elemeket választom
    //2. argumentumnak megadhatok egy callback függvényt is
    document.querySelectorAll('.movements__value'),

    //ezen a elemeken
    item => Number(item.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];

  console.log(movementsUI2);
});

console.log('----------Which array method to use?-----------');

//elméleti rész, pdf-ben

console.log('----------Array Methods Practice----------');

// 1.
const bankDepositSum = accounts
  //több tömbö trak egy nagy tömbbe, mivel több movement tömb van
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
//mennyi elem van benne ami legalább 1000 és a fölött van

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Prefixed ++ oeprator
let a = 10;
console.log(++a);
console.log(a);

// 3.
const { deposits2, withdrawals2 } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits2: 0, withdrawals2: 0 }
  );

console.log(deposits, withdrawals);

// 4.
//minden szó kezdőbetűjét nagyra rakja, kivéve a megadottakat
// this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');

  //azért nem csak simán kell visszaadni a titleCase-t hanem meghívni rá erre is a függvényt, mert ha az új sort egy kivételszó kezd akkor arra is érvényesnek kell lenni a nagybetűs résznek
  return capitzalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

console.log('----------- Coding Challenge #1----------');
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/
const checkDogs = function (dogsJulia, dogsKate) {
  //shallow copy, and select the dogs
  const dogsJuliaCorrected = dogsJulia.slice(1, 3);

  //2. Create an array with both Julia's (corrected) and Kate's data
  const allDogs = [...dogsJuliaCorrected, ...dogsKate];
  console.log(allDogs);
  //2.verzió, ha splice-ot használunk
  /*  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);*/

  allDogs.forEach((element, index) => {
    /*     if (element >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${element} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    } */

    element >= 3
      ? console.log(
          `Dog number ${index + 1} is an adult, and is ${element} years old`
        )
      : console.log(`Dog number ${index + 1} is still a puppy`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

console.log('----------- Coding Challenge #1 VÉGE----------');

console.log('-----------Coding Challenge #2----------');
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
5. Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

const calcAverageHumanAge = ages => {
  return ages
    .map(item => (item <= 2 ? 2 * item : 16 + item * 4))
    .filter(item => item >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

console.log('-----------Coding Challenge #2 VÉGE----------');

console.log('-----------Coding Challenge #4----------');
/* Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint). */

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

/* 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
 */

dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));

/* 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) */

//megkeresi azt a tömböt ahol Sara a kutya tulajdonosa
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

/* 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle'). */

const ownersEatTooMuch = dogs
  .filter(item => item.curFood > item.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(item => item.curFood < item.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);

/* 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!" */

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

/* 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false) */

console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// current > (recommended * 0.90) && current < (recommended * 1.10)

const eatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(eatingOkay);

/* 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.) */

const dogsEatingOkay = dogs.filter(eatingOkay);
console.log(dogsEatingOkay);

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]

//rendezés előtt a slice-al másolatot készítek
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

console.log('-----------Coding Challenge #4 VÉGE----------');
