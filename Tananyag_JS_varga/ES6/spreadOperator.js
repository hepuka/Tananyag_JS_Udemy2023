/*

... SPREAD operátorral egy tömb elemeit adjuk át egy függvénynek mint paraméterlista
 
*/

//összead 4 számot
function szamok(a, b, c, d) {
  return a + b + c + d;
}

var osszeg = szamok(1, 2, 3, 4);

console.log(osszeg);

//a tömb átadása a függvénynek
//ES5
var szamokTomb = [1, 2, 3, 4];

//apply 1. paramétere a this, ha nem kell akkor null,   2. a tömb amire a fv-t hívtuk
var osszeg2 = szamok.apply(null, szamokTomb);
console.log("eredmény apply metódussal ES5-ben: " + osszeg2);

//ES6
//... a spread operátor, ezzel lehet átadni egy tömböt a fv-nek
const osszeg3 = szamok(...szamokTomb);
console.log("eredmény spread operátorral ES6-ban: " + osszeg3);

//tömbök összefűzésére is használhatjuk a spread operátort

//szamok tömb összefűzése a t2 tömbbel,és elmentése t3 tömbbe
const t2 = [5, 6, 7, 8, 9, 10];
const t3 = [...szamokTomb, ...t2];
console.log(t3);

//így csak kiíratjuk a két tömb összefűzését, de nincs elmentve sehova
console.log([...szamokTomb, ...t2]);

//nodelistára(több html elemet tartalmazó lista) - ami a queryselectorAll-al jön létre - is lehet használni a spread-et
const cimsor = document.querySelector("h1"); //egy node a html fában
const dobozok = document.querySelectorAll(".doboz"); //ez már nodlista

//h1 elemet és a dobozok html elemeit raktuk egy nodlistába
//címsor elé nem kell ... (spread operátor) mert az csak egy elem, egy node a listában
const htmlElemek = [cimsor, ...dobozok];

//az összesített htmlElemek nodelista tömbbé alakítása
Array.from(htmlElemek).forEach(
  (aktualisElem) => (aktualisElem.style.color = "purple")
);

console.log(htmlElemek);
