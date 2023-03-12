console.log('------------ES6 Classes-----------');

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {

    return 2022 - this.birthYear;
  }

  get fullName() {
    return this._fullName;
  }

  // Set a property that already exists
  //settert adatellenőrzésre is használhatjuk
  //pl. a megadott név fullname-e
  set fullName(name) {
    //_fullname-ben a _ csak a névegyezőség miatt van
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  // Static method only to the class
  static hey() {
    console.log('Hey there 👋');
    //console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1977);
const petike = new PersonCl('Majoros Peter', 2005);

console.log(petike);

petike.calcAge();
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.hey();

//pédányra nem értvényes a static method, csak a teljes classra mint egy helper function
//jessica.hey();

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
