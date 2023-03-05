'use strict';

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

    //const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
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
