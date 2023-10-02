const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//forEach method
//1. paraméter az aktuális változó, a 2. az index
//continue és a break nem használható
//a ciklus folyamatába megy végig a tömbön
movements.forEach((item, index) => {
  if (item > 0) {
    console.log(`Index: ${index} - Item: ${item}`);
  } else {
    console.log(`Index: ${index} - Item: ${Math.abs(item)}`);
  }
});

//for of-al ugyanaz
for (const [index, item] of movements.entries()) {
  if (item > 0) {
    console.log(`Index: ${index} - Item: ${item}`);
  } else {
    console.log(`Index: ${index} - Item: ${Math.abs(item)}`);
  }
}

console.log('---------forEach With Maps and Sets---------');

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//1. param az jelenlegi érték, 2. jelenlegi kulcs, 3. a teljes Map amit bejárunk
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

//1. param a jelenlegi érték, 2.param _ kell használni mint elhanyagolható paraméter mert a key ugyanaz mint a value a Set adatstruktúránál
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
