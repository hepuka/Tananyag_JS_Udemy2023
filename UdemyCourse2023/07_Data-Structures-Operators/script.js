'use strict';

/*
TÉMÁK

- destructuring Arrays
- destructuring Objects

*/

//destructuring Arrays
console.log('------------------Destructuring Arrays-------------------');

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//tömb destruktúrálása egy objektum tulajdonságnevének
//weekdays tömben lévő elemeket destrultúráljuk egy tömb property-ének
/* const openingHours = {
  //alaphelyzetben thu:{
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}; */

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literal- egy külső objektumot adok hozzá az objektumhoz
  openingHours: {
    //alaphelyzetben thu:{
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  //visszaadja a startermenu és a mainmenü elemét.
  //A híváskor adom meg a két indexet, hogy melyiket akarom
  order(starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },

  //order metódus fordítottja. Megadhatunk alapértelmezett értéket is ha szükséges, híváskor ez módosítható
  orderDelivery({
    starterMenuIndex = 0,
    mainMenuIndex = 0,
    time = '20.00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered at ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`The ingredients are ${ing1}, ${ing2} and ${ing3}`);
  },

  //ennél a függvénynél egy hozzávalót kell kötelezően megadni a többit egy tömbbe gyűjti össze
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//a tömb vagy objektum értékeinek kicsomagolása, elhelyezése különálló változókba
//komplex adatstruktúra lebontása egy kisebb adatstruktúrába, pl. változóba
const arr = [2, 3, 4];

//destructuring assignment - const [x, y, z]
const [x, y, z] = arr; //arr tömb elemeit szervezem ki 3 változóba
console.log(x, y, z);

console.log(restaurant.categories);

//restaurant objektum categories tulajdonságának első 2 elemét szedtük ki
let [first, second] = restaurant.categories;
console.log(first, second);

//a tömb 2.elemét kihagyja és a következőt írja ki
const [firsts, , seconds] = restaurant.categories;
console.log(firsts, seconds);

//1. és a 3. elemet felcserélem
/* let temp = firsts;
firsts = seconds;
seconds = temp;
console.log(firsts, seconds); */

//1. és a 2. elemet felcserélem. 2.verzió
let [menu1, menu2] = restaurant.mainMenu;
console.log(menu1, menu2);
[menu1, menu2] = [menu2, menu1];
console.log(menu1, menu2);

//a cserétől függetlenül a tömb érintetlen marad.
console.log(restaurant.categories);

//startermenu 2. elemét, és a mainmenu 0. elemét adja vissza
console.log(restaurant.order(2, 0));

//ha el is akarom menteni a kiválasztást
const [starterMenuItem, mainMenuItem] = restaurant.order(2, 0);
console.log(starterMenuItem, mainMenuItem);

//destruktúrálás ha beágyazott tömb van. Tömb van egy tömbben

//visszaadja a tömb előtti értékeket és magába a tömböt
const nested = [2, 4, [5, 6]];
const [i, j, k] = nested;
console.log(i, j, k);

//visszaadja a tömb előtti értékeket és kibontva a beágyazott tömböt
const [a, b, [c, d]] = nested;
console.log(a, b, c, d);

//Default values
//ha kevesebb értékre hivatkozunk mint amennyi van a tömbe, akkor azok undefined-ek lesznek
//ezért alapértelmezett értékeket tudunk adni a változólnak, és amelyikhez nenm tartozik érték,
//azok alapértelmezett értékét adja vissza. pl.: r=0;
const [p = 0, q = 0, r = 0] = [5, 6];
console.log(p, q, r);

//destructuring Object

//{}-be kell rakni az objektum tulajdonságait amire szükség van
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//ha nem akarjuk használni az obejktum tulajdonságneveit, mint az előzőben, akkor hozzárendelhetünk
//egy változónevet is
//name: restaurantName; itt a name az objektumban lévő tulajdonségnév és a restaurantName a használni kívánt változó
const {
  name: restaurantName,
  openingHours: hours,
  categories: cat,
} = restaurant;
console.log(restaurantName, hours, cat);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let l = 111;
let m = 999;
const obj = { l: 23, m: 7, n: 14 };
({ l, m } = obj);
console.log(l, m);

//nested objects
//objektum egyik objektumának destruktúrlása
//a restaurannt openingHours objektumának fri objektumára hivatkozunk, azt destruktúráljuk
//amit visszaad az egy objektum open és a close tulajdonsággal és annak értékével- pl.:const {fri},
// fri: { open, close } = openingHours; majd console.log(open, close); követően csak az open és a close értékét adja vissza

const { fri } = openingHours;
console.log(fri);

//ez esetben az obejktum tulajdonságának a nevét is megadjuk, majd rendelünk hozzá egy változót
const {
  fri: { open: o, close: ce },
} = openingHours;
console.log(o, ce);

//restaurant objektum orderDekivery metódusának hívása
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Del Sol3, 21',
  mainMenuIndex: 1,
  starterMenuIndex: 2,
});

//ha az objektum metódusában megvannak adva az alapéterlemezett értékek, akkor itt nem kell mindent megadni
//csak amelyiknek az értékét változtatni szeretnénk, a többi érték az alapértelmezett lesz
restaurant.orderDelivery({
  address: 'Via Del Sol3, 21',
  starterMenuIndex: 1,
});

console.log('----------SPREAD OPERATOR-------------------');

//SPREAD OPERÁTOR ALKALMAZÁSA:
//-EGY UJ TÖMB LÉTREHOZÁSA ÉS FELTÖLTÉSE
//-TÖBB PARAMÉTER ÁTADÁSA EGYSZERRE A FÜGGVÉNYNEK
//- EGY TÖMB KITERJESZTÉSE ÚJ ELEMEKKEL

//ES5 verzió, régimódi
const arr2 = [4, 5, 6];
const newBadArray = [1, 2, 3, arr2[0], arr2[1], arr2[2]];
console.log(newBadArray);

//ES6
const addArray = [1, 2, 3];
const newRightArray = [...addArray, ...arr2];
console.log(newRightArray);

//kiírja a tömb egyes elemeit
//ha szükség van a tömb elemeire egyenként akkor csak a spread operátort használjuk a tömbhöz
console.log(...newRightArray);

//newMenu tömbe berakja az eredeti meinMenu tömböt és hozzáadja még az elemeket
//ilyenkor az eredti tömb nem változik, ezért mindenegyes iterációkor használni kell a spread operátort és megadni az új tömböt
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu3 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu3);

//Iterables: array, string, maps, sets. NOT OBJECT
const str = 'Kun-Fagyal';
const letters2 = [...str, ' ', 'Z.'];
console.log(letters2);
console.log(...str);

//ha a prompt-ból akarom emgadni a hozzávalókat, azokat egy tömbe helyezem el
/* const ingredients = [
  prompt("Let's make pasta! Ingredient1 ?"),
  prompt("Let's make pasta! Ingredient2 ?"),
  prompt("Let's make pasta! Ingredient3 ?"),
];
 */
const ingredients = ['mushrooms', 'aspargus', 'cheese'];
console.log(ingredients);

//paraméterátadáskor is használható a spread operátor. egy tömb elemeit adjuk át
restaurant.orderPasta(...ingredients);

//SPREAD oprátor objektumokra ES2018 óta csak
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

//másolatot készítünk az eredetiről
const restaurantCopy = { ...restaurant };

//másoltban lévő nevet megváltoztatjuk
restaurantCopy.name = 'Ristorante Rome';

//az eredeti objektumot nem módosította
console.log(restaurantCopy.name);
console.log(restaurant.name);

console.log('----------REST OPERATOR-------------------');

//KÜLÖNBSÉG A SPREAD ÉS A REST KÖZÖTT:
//A SPREAD KICSOMAGOLJA A TÖMB ELEMEIT
//A REST BECSOMAGOLJA AZ ELEMEKET EGY TÖMBBE
//A REST ELEMNEK KELL LENNIE AZ UTOLSÓNAK - onst [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];

//1.) destrukturing

//SPREAD IS RIGHT SIDE OF =
const arr4 = [1, 2, 3, ...[4, 5, 6]];

//REST IS LEFT SIDE OF =
const [a1, b1, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a1, b1, others);

//destruktúrálva a 2 összetett menü.
//pizza, , risotto - ezzel destruktúráltam a mainMenu-t, a többit beraktam az otherFood-ba
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//Object
//A MARADVÁNY ELEMEKET EGY ÚJ OBEJKTUMBA RAKJA (nem egy új tömbbe)

//egy objektumba pakolta a tru és a fri objektumokat, a sat-ot csak átvette
const { sat, ...weekdayss } = restaurant.openingHours;
console.log(sat, weekdayss);

//2.) functions

//a függvény paramétereként a több függvényhíváskor megadott argumentumokat rakja egybe
//a több függvényhíváskor átadott argumentumokat hívásonként összeadja

//itt a numbers kicsomagolja (spread) az értékeket és azokkal dolgozik a függvény
const add2 = function (...numbers) {
  console.log(numbers);

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};

add2(2, 3);
add2(5, 3, 7, 2);
add2(8, 2, 5, 3, 2, 1, 4);

//egy tömbben lévő értékeket adjuk át a függvénynek
const x1 = [23, 5, 7];

//itt meg becsomagolja (rest) az argumentumokat egy tömbbe
add2(...x1);

//itt a mushroom a mainIngredient, és a többit bepakolja egy tömbbe és így adja át
restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

//itt csak a fő hozzávalót adtuk meg a többit nem, így a mushroom után egy üres tömböt ad vissza
restaurant.orderPizza('mushroom');

console.log('-----------NULLISH COALESCING OPERATOR------------');

//ES2020-ban jött ki

//NULLISH: null and undefined. NOT INCLUDE  0  or ''
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log('-----------LOGICAL ASSIGNMENT OPERATOR------------');

//ES2021-től

const restaurant1 = {
  name: 'Capri',
  numGuests: 20,
  //numGuests: 0,
};

const restaurant2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR ASSIGNMENT OPERATOR

//mivel a restaurant1-nek van már numGests tulajdonsága így ez adja vissza
//mivel az első tag true, mivel már van ilyen tulajdonság így a 20-at adja vissza

//ha az obejkumban a numGuests érték 0 lenne, akkor az első tag false lenne, így a visszaadott érték 10 lenne
restaurant1.numGuests = restaurant1.numGuests || 10;
//restaurant1.numGuests ||= 10; rövidített változat

//mivel a restaurant2-nek nincs numGests tulajdonsága így az első tag false a 2. true így hozzáadja az objektumhoz ezt a
//tulajdonságot és értéket
restaurant2.numGuests = restaurant2.numGuests || 10;

console.log(restaurant1);
console.log(restaurant2);

//NULLISH OPERÁTORRAL - null or undefined
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

restaurant1.owner = restaurant1.owner && '<ANONYMOUS>';
//restaurant1.owner &&= '<ANONYMOUS>'; rövidített változat
restaurant2.owner = restaurant2.owner && '<ANONYMOUS>';

console.log(restaurant1);
console.log(restaurant2);

console.log('--------FOR-OF LOOP-----------');

//for-of-al bejárom az menu3 tömböt és visszakapom az elemeket, az elemek indexeit nem
for (const item of menu3) console.log(item);

//ha az elemet és annak indexét is szeretném megkapni:
//item[0] kell az index eléréséhez és item[1] magának az elemhez, mivel alapból egy tömböt kapunk vissza
for (const item of menu3.entries())
  console.log(`${item[0]} item is ${item[1]}`); //ez a régi verzió

console.log('------FOR-OF LOOP KIÍRATÁSA DESTRUKTÚRÁLVA--------');

//destruktúrálva a egyes iterációkat: ES6
for (const [index, element] of menu3.entries())
  console.log(`${index} item is ${element}`);

//for of loop használata egy objektum kulcsainak, property-ének kiíratására
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

console.log('------ENHANCED OBJECT LITERALS-------');

//a restaurant objektum object literal-al lett létrehozva
//ES6 három új módot vezetett be az object literal írására

//1.) Emhanced object literal létrehozása. 28.sor. Egy külső objektumot adunk hozzá egy objektumhoz egy tulajdonságnévvel

//2.) egy objektum metódus írásakor elegendő a tulajdonságnév majd azt követő ()-ben a paraméterek megadása, majd a {}-ben a törzs megírása
//pl.: order: function(bla, bla, bla){} helyett elég a order(bla, bla, bla){}

//3.) egytömb destruktúrálása egy objektum tulajdonságnevéhez. pl. egy tömb elemét destruktúrálom egy objektum property-éhez

console.log('--------OPTIONAL CHAINING-----------');
//ES2020-től
//ha egy bizonoys property nem létezik az obejktumban, akkor indefined-ként tér vissza, és nem dob ki hibaüzenetet. (a kód továbbfut rendesen hiba nélkül, csak ennél egy undefined-el tér vissza)

//NULLISH érték null vagy undefined lehet

//optional chaining operátort (?) a nullish oprátorral (??) használjuk együtt

//ebben a formában nem true a kiértékelés, mivel a mon nem létezik így nem is ír ki semmit. az else ág nincs definiálva
//ha csk ezt használnánk  console.log(restaurant.openingHours.mon.open); akkor hibát ír ki, mert a mon nem létezik
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//itt kiírja a fri open idejét mivel ez létezik az objektumban
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

//WIDTH OPTIONAL CHAINING

//ebben az esetben hibaüzenet írna ki
//console.log(restaurant.openingHours.mon.open);

//ebben az esetben már nem dob hibát, undefined-el tér vissza, mivel a mon mint property nem létezik az openingHours objektumban
//itt a ? előtti property-t vizsgálja, ha az létezik, akkor az utána lévő property értéke kerül visszaadásara, ha a mon nem létezik, akkor undefined-el tér vissza (nem dob hibát és nem áll le a kód futása)
console.log(restaurant.openingHours.mon?.open);

//itt a fri létezik így annak az értéke kerül visszaadásra
console.log(restaurant.openingHours.fri?.open);

//MULTIPLE OPTIONAL CHAINING

//itt az openingHours és a mon property-t is ellenőrizzük. azt vizsgáljuk, hogy mindkettő létezik-e
//megvizsgálja, hogy az openingHours létezik-e, igen létezik és tovább megy
//majd megvizsggálja, hogy a mon létezik-e, mivel nem itt azonnal undefined-el tér vissza
console.log(restaurant.openingHours?.mon?.open);

//EXAMPLE
//for-al végigjárom és megvizsgálom,hogy az adott napon az étterem nyitva van-e vagy zárva van
//movel csak a thi, fri, sat van definálva az openingHours-ben így a többi undefined érték lesz
//mivel nem szeretnénk, hogy ilyen sima undefined-el térjen vissza az || (or) ágban definiálunk egy default értéket(closed)
//mivel szombaton 0-tól van nyitva ez esetben is closed lenne az érték attól függetlenül, hogy a property létezik. Azért kapunk closed eredményt ha a || operátort használunk mivel a 0 egy false érték, ezért a ?? (nullish coalescing operator) kell használni
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//METHODS hívásánál is működik az optional chaining
//optional chaining-el tudjuk megvizsgálni, hogy az adott metódus lézezik-e mielőtt meghívjuk azt

//ez esetben a restaurant objektum order metódusát vizsgáljuk, hogy létezik-e. Ha igen akkor tovább megy és meghívja azt a megadott argumentumokkal, ha nem akkor kiírja a megadott szöveget
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//Tömböknél is működik az optional chaining
//ez esetben azt vizsgálja, hogy a tömb üres-e vagy sem
const users = [
  {
    name: 'Jonas',
    email: 'blabla@gmail.com',
  },
];

//ha true a kiértékelés akkor visszaadja a nevet ha nem akkor a megadott szöveget, mivel ez esetben a tömb üres
console.log(users[0]?.name ?? 'Users array empty!');

//ígyy is lehetne, ennek a rövidített változata az optional chaining
console.log(users[0].name ? users[0].name : 'Users array empty!');

//ennek is a rövidített változata az optional chaining
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('User array empty!');
}

// Looping Objects: Object Keys, Values, and Entries
console.log('-----Looping Objects: Object Keys, Values, and Entries-----');
//PROPERTY NAMES
//itt egy tömbe rakja bele az openingHours tömb property-eiket
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open ${properties.length} days per week. `);

//ha egy string-be nem csak ezt szeretném kiírni, hanem utána csatolva azt is hogy melyiknapokon akkor létre kell, hozni egy string-et (We are open ${properties.length} days per week) ezzel majd egy for of-al bejárni a properties tömböt és a stringhez hozzácsatolni az éppen aktuális iterációt
let openStr = `We are open ${properties.length} days per week: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

//PROPERTY VALUES
//itt egy tömbe kapjuk vissza a három objektumot
const values = Object.values(openingHours);
console.log(values);

// Entire object
//itt egy tömbe kapjuk vissza külön tömbökbe a property-tés egy tömbe az open, close-t
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
//itt külön tömbökbe kapjuk vissza az obejktumokat, ezért destruktúrálni tudjuk azt, kiszedni a kulcsot és a tömben lévő objektumot:
for (const [key, { open, close }] of entries)
  console.log(`On ${key} we open at ${open} and close at ${close}`);

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

console.log('-----------MAPS FUNDAMENTAL-----------');

//MAPS jobban használhatóbb mint a SET
//az értékek feltérképezése a kulcshoz
//itt is kulcs érték párokat tárolunk, de míg az objektumban a kulcsok stringek, itt bármilyen típusú lehet a kulcs

//hasznos elsőnek egy üres map-et készíteni utána feltölteni azt
const rest = new Map();

//map feltöltése. első a kulcs utána az érték
//itt string a kulcs
rest.set('name', 'Classico Italiano');

//itt number típusú a kulcs
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

//ebben az estben is kiírja a teljes map-et, nem csak a 2-es kulccsal rendelkező adatotokat
//set visszatér a teljes map-el
console.log(rest.set(2, 'Lisbon, Portugal'));

//a set metódusokból egy láncot is alkothatunk. nem kell egyenként megadni a kulcs értékeket, hanem az első után hozzáláncoljuk a többit
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest);

//MAP lekérdező metódusa a GET
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

//példa a boolean típusú kulcsra
const time = 14;

//mivel a megadott érték (8) nem felel meg a feltételeknek így false a kiértékelés, így a visszaadott érték a mapben megadott true kulcs értéke (We are closed)
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//kulcs létezésének ellenőrzése, ha van ilyen kulcs akkor true-val tér vissza
console.log(rest.has('categories'));

//törli a 2-es kulcsot és annak értékét
rest.delete(2);
console.log(rest);
// rest.clear(); törli a teljes map-et
console.log(rest.size); //map mretét adja vissza, mennyi kulcs-érték pár vann benne

//tömb  használata kulcsként
//2 kulcsot tartalmazó tömb. ez nem működik így a kiírásnál 636.sor, ezért a két kulcsot egy tömbe kell rakni. és a tömböt kell átadni a set metódusnak. így már az itt lévő arr3 és a 637.sorban lévő ugyanazon a memóriahelyen van
const arr3 = [1, 2];
rest.set(arr3, 'Test');

//undefined-et kapunk vissza, mert ez és a 632. sorban lévő nem ugyanaz az objektum a heap-ben
//a két objektum nem ugyanazon a memóriahelyen van.
console.log(rest.get(arr3));

//objektum  használata kulcsként
//document.querySelector('h1') ez ad vissza egy objektumot és ez lesz a kulcs, tehát h1 lesz a kulcs és Heading az érték
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);

console.log('-----------MAPS ITERATION-----------');

//új map feltöltése másképp, SET nélkül

//egy tömbe helyezzük el a külömbözó tömbökbe rakott kulcs érték párokat.
//a tömb 0.eleme a kulcs és az 1. eleme az érték
//quiz kérdést és válaszokat helyzünk bele
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
//A MAP is iterálható így a FOR LOOP használható rá

//key a kulcsot adja vissza, value az értéket
//mivel csak a válasz lehetőségeket akarom visszaadni, így egy if-el ki kell választani  a number típusú kulcsokat
console.log(question.get('question')); //csak a kérdés kulcsot kérem le, és adja vissza az értéket
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//prompt-ról bekérünk egy számot
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(question.get('correct') === answer));

// Convert map to array. annyit jelent, hogy a spread operátorral kicsomagolom és megkapom a tömböt
console.log([...question]);

//metzódusokat amiket tömböknél használhatunk
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

console.log('-----------WHICH DATASTUCRURE TO USE?-----------');

//elméleti anyag. PDF-ben ez a rész

console.log('-----------Working With Strings - Part 1-----------');
// Working With Strings - Part 1

const airline = 'TAP Air Portugal';
const plane2s = 'A320';

console.log(plane2s[0]); //A-at ad vissza
console.log(plane2s[1]); //3-at ad vissza
console.log(plane2s[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

//4.indextől kezdve visszaadja a teljes string-et
console.log(airline.slice(4));

//4.indextől kezdve a 7.indexig adja vissza
console.log(airline.slice(4, 7));

//0.indextől kezdve adja vissza az első szóközig
console.log(airline.slice(0, airline.indexOf(' ')));

//az utolsó szöközt követő karaktertől kezdve adja vissza a stringet
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//háulról a 2.karaktertől kezdve adja vissza
console.log(airline.slice(-2));

//1.karaktertől kezdve adja vissza az utolsó előtti betűig. (az utolsó már nincs benne)
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats

  //az s visszaadja a string utolsó betűjét
  const s = seat.slice(-1);

  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got not lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

console.log('-----------Working With Strings - Part 2-----------');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas

//elsőnek a teljeset kisbetűssé tesszük
const passengerLower = passenger.toLowerCase();

//majd az első karaktert nagybetűssé tesszük és utána a többit kisbetűssé, úgy hogy slice(1)-et adunk meg. Ezzel az első karaktert követően az összeset módosítja
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';

//ezzel hasonlítjuk össze az eredeti emailt
const loginEmail = '  Hello@Jonas.Io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';

//kicserélem a font jelet dollár jelre és a vesszőt pontra (mit, mire)
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

//itt csak a door első előfordulásánál cserél
console.log(announcement.replace('door', 'gate'));

//itt a door összes előfordulását cseréli
//console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans

//true vagy false-al tér vissza
const plane2 = 'Airbus A320neo';

console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Airb'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  //kisbetűvé teszem a kapott string-et
  const baggage = items.toLowerCase();

  //ellenőrzöm, hogy a tiltott szavak benne vannak-e a string-be
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('-----------Working With Strings - Part 3-----------');

//SPLIT and JOIN
//a megadott karakternél szétvégja a stringet és a részstringet egy tömb elemeként egy tömbe rakja
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

//split-et destruktúráláshoz is használhatjuk
//a visszakapott tömb első elem lesz a firstName és a második lesz a lastName
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

//a JOIN-al tudom a tömben lévő elemeket konkatenálni egymáshoz a megadott karakterrel. itt egy szóközt adtam meg
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//a kapott név első betűit nagybetűssé teszi
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = []; //új tömb az új névnek

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' ')); //az új tömbben lévő elemeket szóközökkel konkatenáljuk
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';

//a megadott string elé és mögé tesz karaktereket. padStart és End első paramétere, hogy a megadott karakterrel mennyi legyen a string hossza

//padStart miatt összesen a hozzáadott + jellel együtt 20 karakter lenne a string, de hozzá van fűzve egy padEnd is, így a string végleges hossza 30 lesz
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

//
const maskCreditCard = function (number) {
  //itt a kapott számot elsőnek stringé alakítjuk
  //a + jel stringé alakítja a számot
  const str = number + '';

  //a kárytakód utolsó 4 karakterét adja csak vissza
  const last = str.slice(-4);

  //ez a 4 karakter elé rak annyi csillagot hogy a végeleges string hossza az az eredeti string hossza legyen
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';

//5-ször egymás után rakja a megadott stringet
console.log(message2.repeat(5));

//a megadott számú repülőgépet rak a string után
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

console.log('--------Coding Challenge #1-----------');
/* 
We're building a football betting app (soccer for my American friends)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. 
So here are your tasks:

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored

*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ] /*  */,
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Create one player array for each team (variables 'players1' and 'players2')
//külön tömbökbe szedem ki a két tömböt az objektumból
console.log('1.)');
const [players1, players2] = game.players;
console.log(players1, players2);

//players1 tömb első és harmadik elemét írja ki
const [pl1, , pl2] = players1;
console.log(pl1, pl2);

//itt players tömben lévő két tömböt szedtem ki egy változóba
const pl3 = game.players;
console.log(pl3);

/* 2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, 
and one array ('fieldPlayers') with all the remaining 10 field players */
//gk a players1 legelső eleme (kapus), és a többit a REST operátorral egy tömbbe rakom(játékosok)
console.log('2.)');
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);
const [gk2, ...fieldPlayers2] = players2;
console.log(gk2);
console.log(fieldPlayers2);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)
console.log('3.)');
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

/* 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') 
containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' */
console.log('4.)');
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
console.log('5.)');

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//2.verzió, ha csak a game-re hivatkozunk, nem konkrétan az odds objektumra
//1.lépésben hivatkozunk az odds obejktumra, majd azt is destruktúráljuk
/*const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);*/

/* 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and 
prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in) */
console.log('6.)');

//a függvény paraméterének egy REST operátorral összegyűjtött, egy tömbbe rakott argumentumokat adunk át
const printGoals = function (...players) {
  //console.log(players);
  console.log(`${players.length} goals were scored by ${players}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

/* 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator. */
console.log('7.)');
team1 < team2 && console.log('Team1 is more likely to win!');
team2 < team1 && console.log('Team2 is more likely to win!');

//mivel nincs else ág így ezen formában hibát ad, mert nincs :-al folytatva
//ezért kell használni a ? helyett az &&-t mint logikai operátort.
//Azért kell a && használni mert a kiértékelésnél az első true értéket keressük. nekünk az kell, hogy a team1 legyen a kisebb
//team2 < team1 ? console.log('Team2 is more likely to win!');

console.log('--------Coding Challenge #1 VÉGE-----------');

console.log('--------Coding Challenge #2-----------');
//Let's continue with our football betting app!

/* //1.Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski") */
console.log('1.)');
for (const [index, playerName] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${playerName}`);
}
//2.verzió
for (const [index, playerName] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(index) + 1}: ${playerName}`);
}

/* 
2.) Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember) */
console.log('2.)');
let total = 0;

//Object.values kell mivel csak a property értéke kell nekünk
for (const item of Object.values(game.odds)) {
  total += item;
}
console.log(`Average odd: ${total / Object.values(game.odds).length}`);

/* 3.) Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). 

HINT: Note how the odds and the game objects have the same property names. */
console.log('3.)');

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;

  console.log(`Odds of ${teamStr}: ${odd}`);
}

/* BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      } */

console.log('--------Coding Challenge #2 VÉGE-----------');

console.log('--------Coding Challenge #3-----------');
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time)
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.) Create an array 'events' of the different game events that happened (no duplicates)
console.log('1.)');
const events = [...new Set(gameEvents.values())];
console.log(events);

/* 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log. */
console.log('2.)');
gameEvents.delete(64);

/* 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes) */
console.log('3.)');
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time2 = [...gameEvents.keys()].pop();
console.log(time2);

console.log(
  `An event happened, on average, every ${time2 / gameEvents.size} minutes`
);

/* 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17:  GOAL */
console.log('4.)');

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

console.log('--------Coding Challenge #3 VÉGE-----------');

console.log('--------Coding Challenge #4-----------');
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  //a szövegdoboz tartalmát íratom ki a console-ra
  const text = document.querySelector('textarea').value;

  //sortörésnél szétvágom a stringet, és ezek a sorok lesznek atömb egyes elemei
  const rows = text.split('\n');

  for (const [index, row] of rows.entries()) {
    //a kapott sort kisbetűssé teszem, kiszedem a szóközöket majd _-nál szétvágom
    const [first, second] = row.toLowerCase().trim().split('_');

    // a tömb 0.elemét (first) és az 1. elemét(second) egymásmellé teszem, majd a az első elem kezdőbetűjét kicserélem az az első elem nagybetűjére
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    //padEnd-el adom meg, hogy a string teljes hossza 20 karakter legyen. az egyes sorokban lévő stringek hossza egyforma lesz, kiegészítve üres stringekkel.
    //az így elkészített stringhez hozzá kell rakni a pipa jelet,majd erre meghívni a repeat metódust
    console.log(`${output.padEnd(20)}${'✅'.repeat(index + 1)}`);
  }
});

console.log('--------Coding Challenge #4 VÉGE-----------');

console.log('-----------------String Methods Practice-----------------');

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//  Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    '  '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
