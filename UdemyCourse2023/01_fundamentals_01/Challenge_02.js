const bill = 350;
let tip = 0;

bill >= 50 && bill <= 300
  ? (tip = (15 * bill) / 100)
  : (tip = (20 * bill) / 100);

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
