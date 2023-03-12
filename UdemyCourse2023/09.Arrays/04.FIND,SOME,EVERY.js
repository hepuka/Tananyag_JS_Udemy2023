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
