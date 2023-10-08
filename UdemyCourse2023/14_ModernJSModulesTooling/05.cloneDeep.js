import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

//objektum másolása JS-el, nem csinál deep copy-t
// const stateClone = Object.assign({}, state);
// state.user.loggedIn = false;
// console.log(stateClone);

//ojektum másolása NPM cloneDeep csomaggal, ez már deep copy-t csinál
const stateDeepClone = cloneDeep(state);
stateDeepClone.user.loggedIn = false;
console.log(state);
console.log(stateDeepClone);
