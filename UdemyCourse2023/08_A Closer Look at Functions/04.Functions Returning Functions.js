console.log('------Functions Returning Functions-------');

//függvény ami egy függvénnyel tér vissza
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
//az ilyen típusú függvényeket így kell meghívni. az első a főfüggvénynek atódik át, a 2. argumentum a visszaadott függvénynek
greet('Hello')('Jonas');

//hosszabb változata
//greet függvénynek átadjuk a Hey stringet, a függvény eredménye egy függvény amit eltárolunk egy változóba
const greeterHey = greet('Hey');
//ennek a változónak, vagyis függvénynek adjuk át a Jonas stringet
greeterHey('Jonas');
greeterHey('Steven');

// greeat függvény nyílfüggvény formátumban
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');

//visszaadott függvények, VARGAJS

//firstClass függvény
function interjuKerdes(foglalkozas) {
  if (foglalkozas === 'tanár') {
    //névtelen függvény
    return function (nev) {
      console.log(nev + ', megtudnámondani, hogy milyen tárgyakat oktat?');
    };
  } else if (foglalkozas === 'elado') {
    return function (nev) {
      console.log(nev + ', hogyan kezelne egy vevő reklamációt?');
    };
  } else {
    return function (nev) {
      console.log('Mi a foglalkozása kedves ' + nev + '?');
    };
  }
}
//függvény hívása
interjuKerdes('elado')('Péter');

//függvény visszatér egy publikus függvénnyel
//ezzel megoldható, hogy a fő függvény változói nem publikusak

function pizzafactory(pizzaSize) {
  const crust = 'original'; //private változó
  const size = pizzaSize; //private változó

  return {
    //public function
    bake: () => {
      console.log(`Baking a ${size} ${crust} crust pizza.`);
    },
  };
}

const myPizza = pizzafactory('small');

myPizza.bake();

console.log(myPizza.size); //undefined, mert private láthatóságú, csak a bake() függvény fér hozzá
