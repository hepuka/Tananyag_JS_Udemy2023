///////////////////////////////////////
console.log('-------------SETS----------------');

//egyedi értékek kollekciója
//nincs indexelve, nem tudjuk úgy elérni az elemeket mint a tömbben
//csak értékeket tartalmaz
//kiíratásnálés egyébb műveleteknél az azonos értékeknél csak az első előfordulást kezeli, a többit figyelmen kívül hagyja . 539.sor

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza')); //tru vagy false-al tér vissza, attól függően, hogy benne van-e a keresett érték a set-ben
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread'); //hozzáaadunk egy új értéket a set-hez
ordersSet.add('Garlic Bread'); //ezt már figyelmen kívül hagyja mert már hozzáadtuk
console.log(ordersSet);
ordersSet.delete('Risotto'); //törli a megadott elemet a set-ből
console.log(ordersSet);
// ordersSet.clear(); törli a teljes set-et

//FOR-OF használható a set-ben
for (const order of ordersSet) console.log(order);

// Example

//inicializálunk egy tömböt, amiben azonos értékek is vannak
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

//ebből a tömbből set-et csinálunk, azonos elemekből csak az első előfordulást teszi bele a set-be, ami egy tömb
const staffUnique = new Set(staff);
console.log(staffUnique);

//konverzió set-ből tömböt, SPREAD operátorral
const staffUniqueArray = [...new Set(staff)];
console.log(staffUniqueArray);

//itt már eltudjuk érni az elemeket az indexxel. A Set nem indexelt, így a setből tömböt kell csinálni
console.log(staffUniqueArray[1]);

//visszaadja hány különböző elem van a tömbben
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

//visszaadja hány különböző karakter van egy string-be
console.log(new Set('jonasschmedtmann').size);
