console.log('----------Prototypes----------');

console.log(Person.prototype);

//Itt készítünk egy prototype metódust a Person osztálynak
//minden példányra meghívható ami a Person osztályból készült, nem kell
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

//prototype-ot tudjuk lekérdezni
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

//prototype ellőnőrzés
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//új prototype property a Person class-hoz
Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda); //a tulajdonságok között ott van a calcAge és a species prototype

console.log(jonas.species, matilda.species);

//saját property ellenőrzése
console.log(jonas.hasOwnProperty('firstName'));

//false, mert nem közvetlenül a jonas pédányhoz tartozik
console.log(jonas.hasOwnProperty('species'));
