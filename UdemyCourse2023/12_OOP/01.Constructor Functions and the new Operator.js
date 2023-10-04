// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
const Person = function (firstName, birthYear) {
  // Instance properties
  //this a létrehozandó aobjektumra mutat. Tehát itt a this kulcsszó az adott objektum firstname és birthyear kulcsát hozza létre, a paraméterként megadott firstname és birthyear alapján
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const Car = function (type) {
  this.type = type;
};

const jonas = new Person('Jonas', 1977);
const matilda = new Person('Matilda', 1981);
const jack = new Person('Jack', 1975);
const car1 = new Car('Mercedes');

console.log(jonas);
console.log(matilda);
console.log(jack);
console.log(car1);

//true-val tér vissza mert Jonas a Person osztály példánya
console.log(jonas instanceof Person);

//false, mert nem a Car osztály példánya
console.log(jonas instanceof Car);

//kizárólag csak a Person class metódusa,nem a példányoké
Person.hey = function () {
  console.log('Hey there 👋');
};

Person.hey();
