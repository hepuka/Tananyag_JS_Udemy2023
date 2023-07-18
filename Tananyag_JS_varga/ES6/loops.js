let oldal1 = 1;
let oldal2 = 5;
let terulet;

/*do{

    terulet=oldal1*oldal2;
    console.log("oldal1 x oldal2 területe: "+terulet);
    oldal1++;

}while(oldal1<=10)*/

while (oldal1 <= 10) {
  terulet = oldal1 * oldal2;
  console.log("oldal1 x oldal2 területe: " + terulet);
  oldal1++;
}
console.log("\n");

/////////////////---------------///////////////

function faktoriálisertek(szam) {
  let i;
  let faktoriális = 1;

  for (i = 1; i <= szam; i++) {
    faktoriális *= i;
  }

  return faktoriális;
}

console.log(`Faktorérték: ${faktoriálisertek(20)}\n`);

/*for in ciklus (for each ciklus)

amikor nem tudjuk, hogy hány elem van a tömbben, de ki akarjuk íratni mindet

index változót kezdetben 0-ra állítjuk*/

let index = 0;

for (index in pontszamok) {
  console.log("A pontszamok " + index + ".eleme: " + pontszamok[index]);
}

console.log("\n");
for (index in pontszamok) {
  if (pontszamok[index] % 2 === 0) {
    console.log("A pontszamok " + index + ".eleme páros ");
  }
}
