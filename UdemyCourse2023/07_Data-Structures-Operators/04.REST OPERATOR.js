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
