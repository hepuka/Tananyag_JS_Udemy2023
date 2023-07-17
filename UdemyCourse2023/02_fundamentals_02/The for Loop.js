for (let i = 0; i > -10; i -= 3) {
  console.log(`i= ${i}`);
}

//A ciklus iterációs változója nem egy, hanem több is lehet. Ebben az esetben minden változót a megfelelő blokkba írunk, vesszővel elválasztva.
for (let i = 0, j = 10; i <= j; i++, j--) {
  console.log(`i= ${i} , j= ${j}`);
}

//first block is not filled

//this ivariable will be used int he loop
let i = 0;
for (; i < 3; i++) {
  console.log(i);
}

//second block is not filled
//This block corresponds to exit condition. If it is not filled, then in the body of the loop it is necessary to provide a construction that will stop the execution of the loop.

for (let i = 0; ; i++) {
  if (i === 3) break;
  console.log(i);
}

//thiird block is not filled
//It is a block of the loop variable changes. It is executed after the loop body is executed. That is, nothing will change if the change in the variable is moved by the last operator of the loop body.
for (let i = 0; i < 3; ) {
  console.log(i);
  i++;
}

//2 blocks are not filled
let i2 = 0;
for (; i2 < 3; ) {
  console.log(i2);
  i2++;
}

//Loop witjout body
let sum = 0;
//sums of numbers from 1 to 5:
for (i = 1; i <= 5; sum += i++);
console.log(sum);

// Iteration: The for Loop
// for loop keeps running while condition is TRUE
for (let i = 1; i <= 5; i++) {
  console.log(`Lifting weights repetition ${i}`);
}

console.log("--- Looping Arrays ---");

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];
for (let i = 0; i < jonasArray.length; i++) {
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1990, 1967, 2002, 2010, 2018];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(new Date().getFullYear() - years[i]);
}
console.log(ages);
