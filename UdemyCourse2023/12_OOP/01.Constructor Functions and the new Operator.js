console.log('--------Constructor Functions and the new Operator------');

const Person = function (firstName, birthYear) {
  // Instance properties

  //this a Person class-ra mutat
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const jonas = new Person('Jonas', 1977);
const matilda = new Person('Matilda', 1981);
const jack = new Person('Jack', 1975);

console.log(jonas);
console.log(matilda);

//true-val tér vissza mert Jonas a Person osztály példánya
console.log(jonas instanceof Person);

//false, mert nem a Car osztály példánya
//console.log(jonas instanceof Car);

//Person class metódusa
Person.hey = function () {
  console.log('Hey there 👋');
};

Person.hey();
