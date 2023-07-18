/*Default paramétereket akkor hazsnáljuk ha egy vagy több előredefiniált paramétert szeretnénk megadni
a függvénynek*/

//ES5

//fv konstruktor az Adams családnak, mellyel a családtagokat tudjuk létrehozni
function AdamsFamily(keresztnev, szulev, csaladinev) {
  /*
  - ha kevesebb paramétert adunk meg mint ami a konstruktorban van, 
  akkor azokat undefined értékként kezeli
  - ha állandó családinevet akarok akkor így kell használni
  */

  csaladinev === undefined ? (csaladinev = "Adams") : (csaladinev = csaladinev);

  this.keresztnev = keresztnev;
  this.szulev = szulev;
  this.csaladinev = csaladinev;
}

var fester = new AdamsFamily("Fester", 1940);
var mortisha = new AdamsFamily("Mortisha", 1965);
var kuzin = new AdamsFamily("Kuzin", 1800, "HogyisHívják");

console.log(fester);
console.log(mortisha);
console.log(kuzin);

//ES6
//ES6-ban itt adok meg neki alapértelmezett értéket
function AdamsFamily(keresztnev, szulev, csaladinev = "Adams") {
  this.keresztnev = keresztnev;
  this.szulev = szulev;
  this.csaladinev = csaladinev;
}

var fester = new AdamsFamily("Fester", 1940);
var mortisha = new AdamsFamily("Mortisha", 1965);
var kuzin = new AdamsFamily("Kuzin", 1800, "HogyisHívják");

console.log(fester);
console.log(mortisha);
console.log(kuzin);
