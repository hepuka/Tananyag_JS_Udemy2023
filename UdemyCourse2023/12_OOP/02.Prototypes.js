const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

//prototype a Person class-hoz
//Itt készítünk egy prototype metódust a Person osztálynak, hogy az osztály példányai megörökölhessék. Minden példányra meghívható ami a Person osztályból készült, nem kell mindegyiknél megírni.
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';

//osztyály prototype tulajdonságai
console.log(Person);
console.log(Person.prototype);

//osztály példányai
const jonas = new Person('Jonas', 1977);
const matilda = new Person('Matilda', 1981);

//a tulajdonságok között ott van a calcAge és a species prototype
console.log(jonas, matilda);

jonas.calcAge();
matilda.calcAge();
console.log(jonas.species, matilda.species);

//prototype-ot tudjuk lekérdezni
console.log(jonas.__proto__);

//prototype ellőnőrzés
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//saját property ellenőrzése
console.log(jonas.hasOwnProperty('firstName'));

//false, mert nem közvetlenül a jonas pédányhoz tartozik
console.log(jonas.hasOwnProperty('species'));
