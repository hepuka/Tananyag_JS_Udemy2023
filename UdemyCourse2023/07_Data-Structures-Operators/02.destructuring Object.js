//destructuring Object
console.log('----------Destructuring Object-------------');

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
