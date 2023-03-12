console.log('---------TIMERS--------');

console.log('setTimeout');
const ingredients = ['olives', 'spinach'];

//3 mp után visszatér a string-el
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  //3.paraméter egy tömb is lehet
  ...ingredients
);

//elsőnek ez fog megjelnni, majd 3 mp után a pizza string
console.log('Waiting...');

//törölni is tudjuk a várakozást (settimeout futását) ha a megadott feltétel true
//mivel ezesetben a tömb tartalmazza a spinach-ot így nem fog elfutni a settimeout
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

console.log('setInterval');

//a setinterval minden megadott mp (10mp) után lefut
//minden 10mp-ben egy új date jön létre
/* setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000); */
