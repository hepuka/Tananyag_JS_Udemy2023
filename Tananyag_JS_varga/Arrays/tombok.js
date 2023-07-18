let pontszamok = [100, 11, 2, 8, 1000, 765];
let valosszamok = [2.34, 3.14];
let szavak = ["egyes", "kettes", "hármas"];
var korok = new Array(35, 40, 10, 20); //így is deklarálhatunk egy fv-t
let adatok = ["Béla", 20, "magyar", "SV23456", true]; //a tömbbe eltérő típusú értékek is mehetnek

console.log("A pontszámok tömb elemei: " + pontszamok);
pontszamok.sort((a, b) => a - b);
console.log("A pontszámok tömb rendezve: " + pontszamok);

pontszamok[3] = 5; //a tömb 3.indexére rakja az elemet
pontszamok.push(6); //push a tömb végére rakja a megadott értékű elemet
pontszamok.unshift(1); // a tömb elejére teszi az új elemet
console.log("A pontszámok tömbhöz adott elemek után: " + pontszamok);

pontszamok.pop(); //kitörli a tömb utolsó elemét
console.log(pontszamok);
pontszamok.shift(); //kitörli a tömb legelső elemét
console.log(pontszamok);

pontszamok.splice(1, 2); //1-es indexű elemtől kezdve kitöröl 2 elemet, ez esetben az 1-es és a 2-es elem lesz kitörölve
console.log(pontszamok);

console.log(pontszamok.indexOf(11)); //megadja a 11-es elem indexét a tömbben

//egy adott elem benne van-e a tömbben
let szam =
  pontszamok.indexOf(2000) === -1
    ? "A tömb nem tartalmazza a megadott számot"
    : "A tömb tartalmazza a megadott számot";
console.log(szam);

pontszamok.sort((a, b) => a - b);
console.log("A pontszámok újabb rendezés után: " + pontszamok);
console.log("A pontszamok tömb hossza: " + pontszamok.length);

console.log("A szavak tömb elemei: " + szavak);
szavak.push("négyes");
console.log(szavak);

szavak.sort();
console.log("A szavak tömb elemei sort után: " + szavak);
console.log("A szavak tömb hossza: " + szavak.length);

console.log(korok);
console.log(adatok);

console.log("\n");

const myArray = ["A", "B", "C", "D", "E", "F"];
const myArray2 = ["A", "B", "C"];
const myArray3 = ["D", "E", "F"];
const newArray = myArray.slice(2); //a tömb 2. elemétől kezdve adja vissza a tömb elemeit
const newArray2 = myArray.slice(2, 5); //a tömb 2. elemétől kezdve az 5.ig adja vissza a tömb elemeit
console.log(newArray);
console.log(newArray2);

console.log(myArray.reverse()); //fordítva adja vissza a tömb elemeit

const concatArray = [...myArray2, ...myArray3];

console.log(concatArray);

function avg(array) {
  let total = 0;

  for (let i of array) {
    total += i;
  }

  return total / array.length;
}

let avr = avg(pontszamok);
console.log(avr);
