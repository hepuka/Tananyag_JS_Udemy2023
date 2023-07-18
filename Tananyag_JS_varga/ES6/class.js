/*

- az osztályok könnyebbé teszik az öröklődés megvalósítását és az objektum létrehozását

- az ES5-ben a függvény konstruktorok képezték az objektum példányok létrehozásának alapját, és ahhoz
hogy a példányok örököljék a szülők metódusait, a függvény konstruktorok prototype tulajdonságába kellett
behelyezni ezeket a metódusokat (SzemelyES5.prototype.korSzamitas)




*/

//ES5
var SzemelyES5 = function (nev, szuletesiev, foglalkozas) {
  this.nev = nev;
  this.szuletesiev = szuletesiev;
  this.foglalkozas = foglalkozas;
};

SzemelyES5.prototype.korSzamitas = function () {
  var kor = new Date().getFullYear() - this.szuletesiev;

  console.log(kor);
};

//SzemélyES5 példány létrehozása
var Odon = new SzemelyES5("Zolika", 1977, "katona");
console.log(Odon);
Odon.korSzamitas();

//ES6
//osztály létrehozásában mindig kell lenni benne egy constructor fv-nek
//a construktorban határozzuk meg a class tulajdonságait
class SzemelyES6 {
  constructor(neve, szuletesiev, foglalkozas) {
    this.neve = neve;
    this.szuletesiev = szuletesiev;
    this.foglalkozas = foglalkozas;
  }

  //ha egy metódust szeretnénk hozzáadni egy class-hoz, akkor azt a class deklarációján belül kell megtenni
  korSzamitas() {
    let kor = new Date().getFullYear() - this.szuletesiev;
    console.log(kor);
  }

  //ES6 osztályokhoz hozzáaadhatunk statikus metódusokat is, amelyeket segédfüggvényeknek(helper fv-ek) használhatjuk
  //kizárólag az osztályhoz tartoznak és nem örökölhetik meg az objektumok
  //a példányokra nem hivhatjuk meg
  static Statikusmetodus() {
    console.log("Ez egy statikus metódus");
  }
}

const Nandi = new SzemelyES6("Nándi", 1977, "pék");

//az osztály nevével kell meghívni, nem a Nandi objektummal
SzemelyES6.Statikusmetodus();

/////////ALOSZTÁLYOK, SZÁRMAZTATOTT, ÖRÖKLŐDÉS////////////////

//ES5
var SzemelyES5 = function (nev, szuletesiev, foglalkozas) {
  this.nev = nev;
  this.szuletesiev = szuletesiev;
  this.foglalkozas = foglalkozas;
};

SzemelyES5.prototype.korSzamitas = function () {
  var kor = new Date().getFullYear() - this.szuletesiev;

  console.log(kor);
};

//SzemelyES5 osztályból származtatom a katonaES5 osztályt
var katonaES5 = function (nev, szuletesiev, foglalkozas, rendfokozat, osztag) {
  //SzemelyES5 mint Super osztály meghívása
  SzemelyES5.call(this, nev, szuletesiev, foglalkozas);
  this.rendfokozat = rendfokozat;
  this.osztag = osztag;
};

//itt származtatom a SzemelyES5 osztályból
katonaES5.prototype = Object.create(SzemelyES5.prototype);

//új katona objektum, példány
var odonkatona = new katonaES5(
  "ES5katona",
  1977,
  "pék",
  "közlegény",
  "harcosok"
);

console.log(odonkatona);

odonkatona.korSzamitas();

//csak a katonaES5 objektumra hívható meg
katonaES5.prototype.rangSzerzes = function (rang) {
  this.rendfokozat = rang;
};

odonkatona.rangSzerzes("őrmester");
console.log(odonkatona);

/////////////         ////////////////

//ES6
class SzemelyES66 {
  constructor(neve, szuletesiev, foglalkozas) {
    this.neve = neve;
    this.szuletesiev = szuletesiev;
    this.foglalkozas = foglalkozas;
  }

  korSzamitas() {
    let kor = new Date().getFullYear() - this.szuletesiev;
    console.log(kor);
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////
//ha paraméterek nélküli konstruktort használunk
//ez esetben nekünk kell megadni az értékeket
//osztályoknál a getter és a settert is lehet használni
class parameterekNelkuliKonstruktorral {
  constructor() {
    this.neve = "Zolika";
    this.szuletesiev = 1977;
    this.foglalkozas = "katona";
    this.kedvencek = [];
  }

  getzolikaFoglalkozas() {
    return this.foglalkozas;
  }

  getzolikaKedvencek() {
    return this.kedvencek;
  }

  setzolikaFoglalkozas(ujfoglalkozas) {
    this.foglalkozas = ujfoglalkozas;
  }

  setzolikaKedvencek(kedvencek) {
    this.kedvencek.push(kedvencek);
  }

  adataim() {
    console.log(
      `Zolika adatai - neve: ${this.neve}, születési éve: ${this.szuletesiev}, foglalkozása: ${this.foglalkozas}, kedvencei: ${this.kedvencek}`
    );
  }
}

const ujZolika = new parameterekNelkuliKonstruktorral();
ujZolika.adataim();

console.log(ujZolika.getzolikaFoglalkozas());
ujZolika.setzolikaFoglalkozas("autószerelő");
console.log(ujZolika.getzolikaFoglalkozas());
ujZolika.setzolikaKedvencek("levesek");
ujZolika.setzolikaKedvencek("sültek");

ujZolika.adataim();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////ES6 származtatás a SzemelyES6-ból///////////////////////
class KatonaES6 extends SzemelyES66 {
  constructor(neve, szuletesiev, foglalkozas, rendfokozat, osztag) {
    super(neve, szuletesiev, foglalkozas);
    this.rendfokozat = rendfokozat;
    this.osztag = osztag;
  }

  rangSzerzes(rang) {
    this.rendfokozat = rang;
  }
}

const Nandikatona = new KatonaES6(
  "ES6katona",
  1977,
  "tanár",
  "őrmester",
  "harcosok"
);
console.log(Nandikatona);

Nandikatona.rangSzerzes("százados");

console.log(Nandikatona);

Nandikatona.korSzamitas();

//public és private kulcsok az osztályban

class Pizza {
  crust = "original"; //public field
  #sauce = "traditional"; //private field
  #size;

  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }

  getCrust() {
    return this.crust;
  }

  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  hereYouGo() {
    console.log(
      `Here is your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
    );
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();

console.log(myPizza.crust); // visszaadja az original-t mert publikus kulcs
console.log(myPizza.getCrust()); // visszaadja az original-t mert lekérdező metódus
console.log(myPizza.sauce); // undefined, mert a # miatt a sauce private láthatóságú, így innen nem látható

var Monster = function () {
  console.log("a new monster is being created");

  this.energy = Math.random() * 100;

  /*this.roar = function() {
    console.log('RRROAARR');
  }*/
};

Monster.prototype.roar = function () {
  console.log("RRROAARR");
};

Monster.prototype.getStronger = function () {
  //this.energy = this.energy * 2;
  this.energy *= 2;
};

var enemyLevel1 = new Monster();
var enemyLevel2 = new Monster();
var enemyLevel3 = new Monster();
var enemyLevel4 = new Monster();

console.log(enemyLevel1);

enemyLevel1.getStronger();
console.log(enemyLevel1);
