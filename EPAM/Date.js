let simplyDate = new Date();
let simplyDate1 = new Date().valueOf();
let simplyDate2 = new Date(0);
let simplyDate3 = Date();
let formedActDate = new Date().toLocaleDateString();
let formedActTime = new Date().toLocaleTimeString();
let formedActDateAndTime = new Date().toLocaleString();

console.log(simplyDate);
console.log(simplyDate1);
console.log(simplyDate2);
console.log(simplyDate3);

console.log(formedActDate);
console.log(formedActTime);
console.log(formedActDateAndTime);

console.log(typeof simplyDate);
console.log(typeof Date);
console.log(typeof simplyDate3);

//Date constructor
console.log(new Date(2023, 4, 13));

//Date methods
let lullaby = new Date(-2042586000000);
console.log("start date: " + lullaby);
let lullaby2 = new Date(lullaby.setFullYear(2023));
console.log("manipulated start date: " + lullaby2);
let lullaby3 = new Date(lullaby.setFullYear(2023)).getFullYear();
console.log("get only full year: " + lullaby3);
console.log(lullaby.toDateString());

const getMilliSeconds = new Date(2023, 6, 32).valueOf();
console.log(getMilliSeconds);

console.log(new Date(1690786570038));
