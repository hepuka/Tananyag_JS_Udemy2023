/*
importálás verzió 1.
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

importálás verzió 2.
az összes exportált változót, függvényt, metódust importálom egy *-al és adok neki egy alias nevet
import * as ShoppingCart from './shoppingCart.js';
az aliasnév után pontot követően tudjuk megadni az importált változó nevét
ShoppingCart.addToCart('bread', 5);

importálás verzió 3.
az add az export default function változója, a {}-ban az importált változók
*/

import add, {
  addToCart,
  cart,
  totalPrice as price,
  shippingCost,
  tq,
} from './shoppingCart.js';

addToCart('pizza', 2);
addToCart('bread', 5);
addToCart('apples', 4);

add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
console.log(price, shippingCost, tq);
