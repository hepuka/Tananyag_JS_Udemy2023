// objektum lérehozása literállal
let odon = {
  nev: "Ödön",
  szuletesiEv: 1977,
  foglalkozas: "grafikus",
};

//konstruktorfüggvény létrehozása
let Szemely = function (nev, szuletesiEv, foglalkozas) {
  this.nev = nev;
  this.szuletesiEv = szuletesiEv;
  this.foglalkozas = foglalkozas;
};

// objektum lérehozása konstruktorfüggvénnyel

/*
- a new oprátor létrehoz egy teljesen üres objektumot amelyre mutat
- meghívásra kerül a konstruktorfüggvény a zárójelben megadott tulajdonságokkal
- majd hozzárendeljük az odon2 változóhoz, példányosítjuk
*/

/*
különbség a hagyományos és konstruktorfüggvény között az, hogy ha a hagyományos függvényen belül
használjuk a this kulcsszót akkor az egy globális objektumra hivatkozik. Ha a konstruktorfüggvényen
belül használjuk akkor magára a sablon objektumra vonatkozik. A konstruktorfüggvény nem tér vissza
semmilyen értékkel, nincs return utasítás.

*/

let odon2 = new Szemely("Ödön2", 1977, "grafikus");

//ez esetben, ha nem a konstruktorban van a függvény, akkor az nem tartozik egyik példányhoz sem,
//de használhatják azt
Szemely.prototype.korSzamitas = function () {
  console.log(2022 - this.szuletesiEv);
};

//metódusok mellett tulajdonságokat is megadhatunk a prototype-ban
Szemely.prototype.teszt = "Ez egy teszt tulajdonság!";

console.log(odon2);
odon2.korSzamitas();

let odon3 = new Szemely("Ödön3", 1980, "pék");
odon3.korSzamitas();

console.log(Szemely);
console.log(odon3);

console.log(odon3.teszt);

/////////////////////Object.create használata konstruktor helyett///

let Szemelyproto = {
  korSzamitas: function () {
    console.log(2022 - this.szuletesiEv);
  },
};

let odon4 = Object.create(Szemelyproto);

odon4.nev = "Ödön4";
odon4.szuletesiEv = 1960;
odon4.foglalkozas = "autószerelő";
odon4.kiabal = function () {
  return "Kiabááálooook";
};

console.log(odon4);
console.log(odon4.kiabal());

console.log(Object.keys(odon4)); //az ödön4 példány kulcsait adja vissza
console.log(Object.values(odon4)); //az ödön4 példány értékeit adja vissza
console.log(odon4.hasOwnProperty("nev")); // true vagy false-al tér vissza, attól függően, hogy az objektumnak megvan-e a keresett tulajdonság

//for-al az objektum kulcs-érték párjait kapjuk meg
for (let elem in odon4) {
  console.log(`${elem}: ${odon4[elem]}`);
}

//a create metódus második paramétere egy objektum, amelynek át lehet adni azokat a tulajdonságokat
//és metódusokat amelyekkel létre szeretnénk hozni az új példányt

let kati = Object.create(Szemelyproto, {
  nev: { value: "Kati" },
  szuletesiEv: { value: 1981 },
  foglalkozas: { value: "Kozmetikus" },
});

console.log(kati);
kati.korSzamitas();

//destruktúrált objektumok
//1.
const { nev: eredmeny, szuletesiEv: eredmeny2 } = odon4;
console.log(eredmeny);
console.log(eredmeny2);

//2.
const { nev, szuletesiEv } = odon4;
console.log(nev);
console.log(szuletesiEv);

//3. destruktúrálás függvénnyel
function odon4Adatai({ nev, szuletesiEv }) {
  return `${nev} születési éve: ${szuletesiEv} `;
}

console.log(odon4Adatai(odon4)); //átadom a teljes objektumok de csak a nevet és a születésiévet adja vissza
