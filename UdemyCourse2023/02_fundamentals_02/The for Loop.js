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
