const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

//a PersonProto objektum alapján egy üres objektum jön létre kezdetben
const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1980);
sarah.calcAge();

console.log(sarah);

///////////////////////////////////////////
const person = Object.create(null);
person.age = 21;

console.log(person);
if (Object.hasOwn(person, 'age')) {
  console.log(person.age); // true - works regardless of how the object was created
}

if (person.hasOwnProperty('age')) {
  // throws error - person.hasOwnProperty is not a function
  console.log('hasOwnProperty: ', person.age);
}
