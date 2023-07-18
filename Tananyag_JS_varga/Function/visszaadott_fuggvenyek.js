//visszaadott függvények

//firstClass függvény
function interjuKerdes(foglalkozas) {
  if (foglalkozas === "tanár") {
    return function (nev) {
      //névtelen függvény

      console.log(nev + ", megtudnámondani, hogy milyen tárgyakat oktat?");
    };
  } else if (foglalkozas === "elado") {
    return function (nev) {
      console.log(nev + ", hogyan kezelne egy vevő reklamációt?");
    };
  } else {
    return function (nev) {
      console.log("Mi a foglalkozása kedves " + nev + "?");
    };
  }
}

/* let kerdes = interjuKerdes("elado");

kerdes("Pál"); */

//így is meghívhatjuk a firstClass és a benne lévő függvényeket

interjuKerdes("elado")("Péter");

//függvény visszatér egy publikus függvénnyel
//ezzel megoldható, hogy a fő függvény változói nem publikusak

function pizzafactory(pizzaSize) {
  const crust = "original"; //private változó
  const size = pizzaSize; //private változó

  return {
    //public function
    bake: () => {
      console.log(`Baking a ${size} ${crust} crust pizza.`);
    },
  };
}

const myPizza = pizzafactory("small");

myPizza.bake();

console.log(myPizza.size); //undefined, mert private láthatóságú, csak a bake() függvény fér hozzá
