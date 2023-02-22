console.log('-------Exporting and Importing in ES6 Modules---------');

console.log('Importing module');

/* importálás verzió 1.

import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
addToCart('bread', 5);
console.log(price, tq);

 */

/* importálás verzió 2.

--- az összes exportált változót, függvényt, metódust importálom egy *-al és adok neki egy alias nevet ----

import * as ShoppingCart from './shoppingCart.js';

--- az aliasnév után pontot követően tudjuk megadni az importált változó nevét ---

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice); 

*/

//importálás verzió 3.

// default függvény és a voltozók importálása
//az add az export default function változója, a {}-ban az importált változók
import add, { cart, totalPrice as price } from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
console.log(price);
/* 
console.log('-----Top-Level Await (ES2022)------');
//await kulcsszó használata az async függvényen kívül

//top-level await használata fetch-eléskor
console.log('Start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//szükség van még egy await-re, hogy parse-oljuk az adatot  JSOn formátumúvá
const data = await res.json();
console.log(data);
console.log('Something');

//top-level await használta async függvényen kívül
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  //csak az utolsó elem címét és tartalmát íratjuk ki
  return { title: data.at(-1).title, text: data.at(-1).body };
};

//await nélkül csak a promise van meg, az objektum nem. Azért mert az async függvény hívása egy promiss-al tér vissza
const lastPost = getLastPost();

//await használatával kapjuk emg az adatot
const lastPost2 = await getLastPost();

console.log(lastPost);
console.log(lastPost2);
*/

console.log('-------The Module Pattern------');

const ShoppingCart2 = (function () {
  //---------PRIVATE SECTION----------//
  //a változók és a függvények kívülről nem látszódnak közvetlenül
  //ha el akarjuk érni őket kívülről akkor a return objektumba kell rakni

  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  //----------PUBLIC, EXPORTED SECTION-----------//
  //public API

  return {
    addToCart,
    orderStock,
    cart,
    totalPrice,
    totalQuantity,
  };
})(); //azonnal meghívódó függvényként deklaráljuk mert nem fogjuk külön meghívni

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
ShoppingCart2.orderStock('banana', 10);

console.log(ShoppingCart2);
console.log(ShoppingCart2.cart);
console.log(ShoppingCart2.totalPrice);

console.log(ShoppingCart2.shippingCost); //undefined, mivel ez nincs a public section-ben

console.log('------CommonJS Modules------');

//NPM rendszerben való exportálás és importálás szintaxisa

/* 

Export
export.addTocart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };
  
  Import
  const { addTocart } = require('./shoppingCart.js'); */

console.log('------Introduction to NPM------');

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

//objektum másolása JS-el
const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);

//ojektum másolása NPM cloneDeep csomaggal
const stateDeepClone = cloneDeep(state);
//stateDeepClone.user.loggedIn = false;
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);
console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));
