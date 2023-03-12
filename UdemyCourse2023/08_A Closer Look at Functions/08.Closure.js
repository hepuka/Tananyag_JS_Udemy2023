console.log('-----------Closures------------');

const secureBooking = function () {
  //a cél az, hogy ezt a változót ne lehessen megváltoztatni kívülről, priváttá kell tenni
  //ezért egy olyan függvény kell ami egy függvénnyel tér vissza, és a védett változókat a szülő függvénybe(amit meghívunk pl. itt a szülőfüggvény a secureBooking) kell tenni
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

//elsőnek meghívom a szülőfüggvényt amit elmentek egy változóba (booker), ez a szülőfüggvény egy függvénnyel tér vissza amit a vltozóba mentünk
//majd ezzel a változóval (booker) hívjuk meg a visszaadott (belső) függvényt.
const booker = secureBooking();
booker();
booker();
booker();

//console.dir(booker);

// More Closure Examples
// Example 1

let f;

const g = function () {
  const a = 23;
  //globálisan deklarált f változóhoz egy függvényt rendelünk
  f = function () {
    console.log(a * 2);
  };
};

//a h függvényben is függvényváltozó az f
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
//console.dir(f);

// Re-assigning f function
h();
f();
//console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  //a fügvény hívásakor ez a változó létrejön az értékkel együtt
  const perGroup = n / 3;

  //ez a függvény a megadott értéknek megfelelő idő után hajtódikvégre
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  //ez a rész nem várja meg a settimeout végét, hanem lefut, tehát ez a rész ezért előzi meg a settimeoutban foglaltakat
  console.log(`Will start boarding in ${wait} seconds`);
};

//ez nem lesz hatásra a függvényben lévő perGroup változóra, mert a closure miatt védve van a változó a függvényben
const perGroup = 1000;
boardPassengers(180, 3);

///////////////////////////VARGAJS/////////////////////////////
/* 

closure: egy belső függvény mindig képes hozzáférni az őt tartalmazó külső függvény paramétereihez és változóihoz, még azután is, hogy ha a külső függvény befejezte futását

https://www.youtube.com/watch?v=gSNHesF9Hl4&ab_channel=L%C3%A1szl%C3%B3Varga

*/

function nyugdij(ev) {
  let szoveg = 'Nyugdíjazásig hátralévő évek száma: ';

  return function (szuletesiEv) {
    let kor = new Date().getFullYear() - szuletesiEv;
    console.log(szoveg + (ev - kor));
    console.log(`Nyugdíjazás éve: ${szuletesiEv + ev}`);
  };
}

//egy változóban eltárolpm a külső függvény hívását
//majd a változóra meghívom a belső, névtelen függvényt
// let nyugdijazasHUN = nyugdij(65);
// nyugdijazasHUN(1977);

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
