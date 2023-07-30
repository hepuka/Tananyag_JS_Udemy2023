"use strict"; //beépített javascript biztonsági mód

let variable = "Dave"; //alaphelyzetben kiírná a változó értékét,de strict módban nem definiáltnak veszi a változónevet
console.log(variable);

///////////////////////////////////////

const makeError = () => {
  try {
    let name;
    name = "katika";
    console.table(name);
  } catch (error) {
    throw new Error(error);
  }
};

makeError();
