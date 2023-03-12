console.log('----------Prototypes----------');

const Person = function (firstName, birthYear) {
  // Instance properties

  //this a Person class-ra mutat
  this.firstName = firstName;
  this.birthYear = birthYear;
};

//prototype property a Person class-hoz
//Itt készítünk egy prototype metódust a Person osztálynak, hogy az osztály példányai megörökölhessék. Minden példányra meghívható ami a Person osztályból készült, nem kell mindegyiknél megírni
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';

//osztyály prototype tulajdonságai
console.log(Person.prototype);

//osztály példányai
const jonas = new Person('Hepuka', 1977);
const matilda = new Person('Kata', 1981);

console.log(jonas, matilda); //a tulajdonságok között ott van a calcAge és a species prototype

jonas.calcAge();
matilda.calcAge();
console.log(jonas.species, matilda.species);

//prototype-ot tudjuk lekérdezni
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

//prototype ellőnőrzés
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//saját property ellenőrzése
console.log(jonas.hasOwnProperty('firstName'));

//false, mert nem közvetlenül a jonas pédányhoz tartozik
console.log(jonas.hasOwnProperty('species'));
