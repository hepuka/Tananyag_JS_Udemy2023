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
