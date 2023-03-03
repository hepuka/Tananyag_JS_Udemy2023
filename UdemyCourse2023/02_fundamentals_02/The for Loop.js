// Iteration: The for Loop
// for loop keeps running while condition is TRUE
for (let i = 1; i <= 10; i++) {
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
  console.log(jonasArray[i], typeof jonasArray[i]);

  types.push(typeof jonasArray[i]);
}

console.log(types);

const ages2 = [];

for (let i = 0; i < years.length; i++) {
  ages2.push(2022 - years[i]);
}
console.log(ages2);
