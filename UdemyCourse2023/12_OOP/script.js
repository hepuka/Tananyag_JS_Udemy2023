'use strict';
console.log('-------What is OOP---------');
console.log('-------OOP in JS---------');
//pdf elméleti anyag

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

console.log('----------Prototypal Inheritance and prototype chain--------');
//pdf elméleti anyag

console.log('-------Prototypal Inheritance on Built-In Objects------');

console.log(jonas.__proto__);

// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []

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

console.log('-------------Setters and Getters------------');

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

//getter használata
console.log(account.latest);

//setter használata
account.latest = 50;
console.log(account.movements);

console.log('-------Object.create--------');

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1980);
sarah.calcAge();

console.log(sarah);

console.log(
  '-----------Inheritance Between "Classes": Constructor Functions----------'
);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //student kiterjesztése Person osztállyal
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
//prototype-ok átadása,
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log('----Inheritance Between "Classes": ES6 Classes----');

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2022 - this.birthYear
      } years old, but as a student I feel more like ${
        2022 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

console.log('--- Inheritance Between Classes Object.create----');

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  // BUG in video:
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);

  // FIX:
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

console.log(jay);

console.log('---------Another Class Exxample-------');
console.log('------Encapsulation: Protected Properties and Methods-----');
console.log('------Encapsulation: Private Class Fields and Methods------');

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances), nem érhető el kívülről csak egy API-on keresztül
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //this.#movements = [];
    //this.locale = navigator.language;
  }

  // public interface
  //mivel a #-el private láthatóságú a movement, az csak egy API-al kérdezhető le
  getMovement() {
    return this.#movements;
  }

  // public interface
  deposit(val) {
    this.#movements.push(val);
    return this; //nem szükséges, de akkor kell ha chaining-et akarunk 387.sor
  }

  // public interface
  withdraw(val) {
    this.deposit(-val);
    return this; //nem szükséges, de akkor kell ha chaining-et akarunk 387.sor
  }

  // public interface
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved!');

      return this; //nem szükséges, de akkor kell ha chaining-et akarunk 387.sor
    }
  }

  //az osztályra vonatkozik, az osztálynév és nem a példány metódusaként hívható meg
  static helper() {
    console.log('Helper');
  }

  // Private methods, kívülről nem hívható meg, ez csak a requestLoan public metódus része
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.getMovement());

Account.helper();

console.log('-------Chaining Methods------');

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovement());

console.log('------ES6 Classes Summary----------');

//elméleti anyag

console.log('------------Coding Challenge #1-----------');

/* 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h; */

const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

/* 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console; */

Car.prototype.accelerate = function () {
  this.speed += 10;

  console.log(`${this.make} is going at ${this.speed} km/h`);
};

/* 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console; */

Car.prototype.break = function () {
  this.speed -= 5;

  console.log(`${this.make} is going at ${this.speed} km/h`);
};

/* 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them. */

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.break();
mercedes.accelerate();
mercedes.break();

/* DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h */

console.log('---------Coding Challenge #2--------');

//1. Re-create challenge 1, but this time using an ES6 class;

class CarES6 {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }

  //2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);

  get speedUS() {
    return this.speed / 1.6;
  }
  /* 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6); */

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}

/* 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter. */
//DATA CAR 1: 'Ford' going at 120 km/h

const ford = new CarES6('Ford', 120);

console.log(ford);

ford.accelerate();
ford.break();
ford.accelerate();
ford.break();

ford.speedUS = 10;
console.log(ford);
console.log(ford.speed);

console.log('---------Coding Challenge #3--------');

/* 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property); */

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

/* 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'; */

//link to prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

/* 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'; */

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;

  console.log(
    `${this.make} accelerate at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

EV.prototype.break = function () {
  this.speed -= 20;
  this.charge += 1;

  console.log(
    `${this.make} break at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

/* 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉 */
//DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

const tesla = new EV('Tesla', 120, 23);

console.log(tesla);

tesla.chargeBattery(90);
console.log(tesla);

tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();

tesla.break();
tesla.break();
tesla.break();
console.log(tesla);

console.log('------Coding Challenge #4------');

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  //2. Make the 'charge' property private;
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 10;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );

    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;

    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

/* 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining! */
//DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .brake()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .brake();
console.log(rivian.speedUS);
