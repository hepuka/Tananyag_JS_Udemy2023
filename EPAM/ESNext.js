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

//Destructuring

let [wallE, EVE, ...otherRobots] = robots;

console.log(wallE);
console.log(EVE);
console.log(otherRobots);

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
