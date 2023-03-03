let rep = 1;
while (rep <= 5) {
  console.log(`WHILE: Lifting weights repetition ${rep} `);
  rep++;
}

let dice = Math.floor(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.floor(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
