/* 

closure: egy belső függvény mindig képes hozzáférni az őt tartalmazó külső függvény paramétereihez
és változóihoz, még azután is, hogy ha a külső függvény befejezte futását

https://www.youtube.com/watch?v=gSNHesF9Hl4&ab_channel=L%C3%A1szl%C3%B3Varga

*/

function nyugdij(ev) {
  let szoveg = "Nyugdíjazásig hátralévő évek száma: ";

  return function (szuletesiEv) {
    let jelenlegi = new Date().getFullYear();
    let kor = jelenlegi - szuletesiEv;
    console.log(szoveg + (ev - kor));
  };
}

//egy változóban eltárolpm a külső függvény hívását
//majd a változóra meghívom a belső, névtelen függvényt
let nyugdijazasHUN = nyugdij(65);
nyugdijazasHUN(1977);

//meghívható egyszerűbben is
nyugdij(65)(1977);

//számláló növelése minden lépésben
//a számláló változót nem globális változóként deklarálom, mert akkor ahhoz minden metódus hozzáférhet

//ez így nem jó, mert mindig 1 az eredmény
//amikor a fv befejezi futását, akkor kikerül a veremből, és legközelebb a számláló megint 0 lesz,
//a függvény ismételten létrehozza a változót
function leptetrossz() {
  let szamlalo = 0;

  szamlalo++;
  console.log(szamlalo);
}

//ez a megoldás sem jó
function leptetrossz2() {
  let szamlalo = 0;

  function hozzaad() {
    szamlalo++;
  }

  hozzaad();
  console.log(szamlalo);
}

//closure-ként működik, a fenti szabály miatt.

//1.verzió
function leptet() {
  let szamlalo = 0;

  return function () {
    szamlalo++;
    console.log(szamlalo);
  };
}

//2.verzió

//névtelen függvényt írunk, így ez egy kifejezés lesz
let hozzaad = (function () {
  let szamlalo = 0;

  return function () {
    szamlalo++;
    console.log(szamlalo);
  };
})();

/* leptetrossz();
leptetrossz();
leptetrossz();

leptetrossz2();
leptetrossz2();
leptetrossz2(); */

let novel = leptet();
novel();
novel();
novel();

hozzaad();
hozzaad();
hozzaad();
