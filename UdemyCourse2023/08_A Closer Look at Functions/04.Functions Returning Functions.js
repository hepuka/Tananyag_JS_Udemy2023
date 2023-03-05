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
