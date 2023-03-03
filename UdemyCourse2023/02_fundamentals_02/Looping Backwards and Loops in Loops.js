// Looping Backwards and Loops in Loops

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  //visszafele kiírja a tömb elemeit
  console.log(i, jonasArray[i]);
}

console.log("------------- Loops in Loops -----------");

for (let exercise = 1; exercise < 4; exercise++) {
  //külső ciklusban fut egy belső cilus. A külső ciklus csak címeket írja, a belső a sorokat
  console.log(` - Starting exercise ${exercise} -`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
