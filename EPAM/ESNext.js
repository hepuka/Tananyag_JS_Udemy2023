let string = "Learning";

const array = [...string];
const copyArray = [...array];

console.log(string.split("")); //u.a. const array = [...string];
console.log(array);

console.log(array === copyArray);

let obj = [
  {
    name: "saadasd",
    age: 45,
  },
  {
    name: "fdgfdgdg",
    age: 15,
  },
];

let secondObj = {
  first: "first",
  second: "second",
  ...obj,
};

console.log(secondObj);

const robots = ["Wall-E", "EVE", "Optimus Prime", "R2-D2", "Mikrobi"];
const hero = {
  ...robots,
};
console.log(hero);

//REST OPERATOR

const collectedRobots = (...robots) => {
  return robots;
};

//collecting all parameters into an array
console.log(collectedRobots("sdffdds", "fsdfdsfs", ...robots));

////////////////////////////////////////Destructuring array
let [wallE, EVE, ...otherRobots] = robots;

console.log(wallE);
console.log(EVE);
console.log(otherRobots);

const changeElement = ["firstElement", "secondElement"];

[firstE, secondE] = changeElement;
console.log(firstE);
console.log(secondE);

[firstE, secondE] = [secondE, firstE];
console.log(changeElement);

///////////////////////////////////////Destructuring object
const robotsObj = {
  wallEE: "wallE",
  eve: "EVE",
  r2d2: "R2-D2",
  mikrobi: "mikrobi",
};

const { wallEE, eve, ...others } = robotsObj;
console.log(wallEE, eve);
console.log(others);

//combine array and object destructuring
const rob = ["EVE", { wallEEE: "wall-E", r2d2: "R2-D2" }];
const [first, { ...otherObjRob }] = rob;
console.log(first);
console.log(otherObjRob);

//shorthand
const first2 = "first2";
const second2 = "second2";

const newRobObj = {
  first: first2,
  second: second2,
};

const newObj = {
  first2,
  second2,
};
console.log(newObj);
console.log(newRobObj);

const datas = Object.entries(newRobObj);
console.log(datas);

//ESNEXT 2017-2022
const entries = Object.entries(newRobObj);
console.log(entries);

const keys = Object.keys(newRobObj);
console.log(keys);

const values = Object.values(newRobObj);
console.log(values);

const arr1flat = [0, 1, 2, [3, 4]];
console.log(arr1flat.flat());

const arr2flat = [0, 1, 2, [[[3, 4]]]];
console.log(arr2flat.flat(2));

//flatMap
const arrMap = [1, 2, 3, 4];
const modArrMap = arrMap.flatMap((x) => [x, x * 2]);
console.log(modArrMap);

//privatefield,methods in the class
class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = Person.#validate(firstName);
    this.#lastName = Person.#validate(lastName);
  }
  getFullName(format = true) {
    return format ? this.#firstLast() : this.#lastFirst();
  }
  static #validate(name) {
    if (typeof name === "string") {
      let str = name.trim();
      if (str.length >= 3) {
        return str;
      }
    }
    throw "The name must be a string with at least 3 characters";
  }

  #firstLast() {
    return `${this.#firstName} ${this.#lastName}`;
  }
  #lastFirst() {
    return `${this.#lastName}, ${this.#firstName}`;
  }
}

let person = new Person("John", "Doe");
console.log(person.getFullName());
