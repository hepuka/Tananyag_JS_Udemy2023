//setTimeOut()
const ingredients = ['olives', 'spinach'];
const time = 5000;

//3 mp után hívódik meg a függvény
const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(
      `After ${time / 1000} sec, here is your pizza with ${ing1} and ${ing2} 🍕`
    ),
  time,
  //3.paraméter egy paraméterlista vagy egy tömb is lehet
  ...ingredients
);

//elsőnek ez fog megjelnni, majd 3 mp után a pizza string
console.log('Waiting...');

//törölni is tudjuk a várakozást (settimeout futását) ha a megadott feltétel true
//mivel a tömb tartalmazza a spinach-ot így nem fog elfutni a settimeout
// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval()
//a setinterval minden megadott mp után lefut egyszer
//minden 10mp-ben egy új date objektum jön létre
// setInterval(() => {
//   console.log(new Date());
// }, time);
