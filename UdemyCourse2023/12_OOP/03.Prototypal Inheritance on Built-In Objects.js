console.log('-------Prototypal Inheritance on Built-In Objects------');

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const jonas = new Person('Jonas', 1977);

console.log(jonas.__proto__);

// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

//2.pld
const arr = [3, 6, 6, 5, 6, 9, 9];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

//tömb prototype-jához adom hozzá a tömbből alakított Set-et, a set az azonos elemeket nem tartalmazza az arr tömbből
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
