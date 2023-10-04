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
