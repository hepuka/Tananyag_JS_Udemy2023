let programming = "javascript";

for (let item of programming) {
  console.log(item);
}

/////
let programmingArray = ["js", "java", "python", "c++"];

for (let item of programmingArray) {
  console.log(item);
}

////
let programmingMap = new Map();
programmingMap.set("js", "java");
programmingMap.set("css", "sass");

for (let item of programmingMap) {
  console.log(item);
}

for (let item of programmingMap.keys()) {
  console.log(item);
}

for (let item of programmingMap.values()) {
  console.log(item);
}

for (let item of programmingMap.entries()) {
  console.log(item);
}

console.log(programmingMap.keys());

//for of loop in loop

let language = ["javascript", "java", "c++", "python"];

for (let x of language) {
  for (let z of x) {
    console.log(z);
  }
}
