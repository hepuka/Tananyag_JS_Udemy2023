///////////////////////////////////////
// Scoping in Practice
'use strict';
/*

- scope chain - a szülő elemek felé (a kódban felfele lévő) látja a változókat, de a gyerekfelé nem
- a js az adott blokkon vagy függvényen belül keresi a változót, ha nem talál akkor egyel feljebb a szülőscope-ban keresi

*/

function calcAge(birthYear) {
  const age = 2022 - birthYear; //age változó a külső fv teljes területén elérhető//
  console.log(age);

  //tudok hivatkozni, firstname globális
  console.log(firstName);

  function printAge() {
    let output = `${firstName} , you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //itt létrehoztunk egy új változót ugyanazon a néven, mint a szülő részben van (globális rész)
      const firstName = 'Steven';

      //itt viszont viszont csak megváltoztattuk a szülőben deklarált változó értékét
      output = 'New output!!';

      //itt a firstname Steven lesz Jonas helyett, mert elsőnek az adott scope-ban keresi a változót
      //ha nem találja itt akor megy feljebb a szülőre és ott globális változóként már a Jonas-t írja ki
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
      console.log(output);

      function add(a, b) {
        return a + b;
      }

      console.log(add(2, 3));
    }

    //console.log(str); itt már nem tudok hivatkozni, str const(blokkszintű). var lenne, akkor tudnék
    //console.log(add(2, 3)); itt már nem tudok rá hivatkozni, mert az add függvény scope-ja az if blokk, csak ezen belüllátható. itt a függvény blokk szintű
    console.log(output); //new output a kimenet, mert a szülőben lévő output-ot megváltoztattuk a gyerekben (a belső if-ben)
  }

  //console.log(str); itt már nem tudok rá hivatkozni
  //console.log(output); itt már nem tudok rá hivatkozni

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1982);

//console.log(age); itt már nem tudok az age-re hivatkozni
//printAge(); itt már nem tudok az age-re hivatkozni

///////////////////////////////////////
// Hoisting and TDZ in Practice
console.log('------------Hoisting and TDZ in Practice-----------');

/* 
- A hoisting engedélyezi a változó használatát a kódban mielőtt az deklarálva lenne
- A változó ez esetben az adott scope-tetejére kerül

hoisting lehetséges:
- függvény deklarációnál
- var változóknál
- függvénykifejezéseknél, nyílfüggvényeknél ha a változó var-al deklarált (let, const-al nem működik)

nem lehet:
- let és const változóknál
- mivel a let és a const blokkszintű
*/

// Variables
console.log(me); //undefined, ugyan a var-ra érvényes a hoisting, de undefined ad vissza
/*
job és a year változó hibát ad, nem lehet hozzáférni a deklaráció előtt. TDZ zónában van ezen a ponton, 
mert a TDZ a jelenlegi scope kezdeténél (global scope) kezdődik és a deklarációig tart
ezért csak a deklaráció után lehet hozzáférni
*/
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3)); //működik a függvényhívás magának a függvénynek a deklarációja előtt

//console.log(addExpr(2, 3)); //hibát ad, a függvény const-al lett deklarálva, ami ezen a hívási ponton TDZ zónában van

/*
 hibát ad, visszaadja, hogy ez nem egy függvény. Ez azért van mert a hoisting a var-ra undefined ad vissza.
Ha egy undefined-re hívjuk meg a függvényt - undefined(2,3) - akkor ő azt nem veszi függvénynek. 
*/
console.log(addArrow); //undefined a hoisting miatt
//console.log(addArrow(2, 3));

//csak ezt a fajta függvényt tudom meghívni annak deklarációja előtt.
//ezt a fajta függvénydeklarációt tudom használni hoisting-ként
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example1
//bug képződik.

/*MINDIG HASZNÁLJ const-ot AMIKOR LEHET, HA NEM AKKOR let-et.

ALKALMAZD A CLEAN KÓDOT:
-  DEKLARÁLD A VÁLTOZÓKAT A SCOPE ELEJÉN
-  ELŐSZÖR MINDID DEKLARÁLD A FÜGGVÉNYEKET, MAJD CSAK EZEK UTÁN HASZNÁLD AZT
*/

console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// Example2
var x = 1;
let y = 2;
const z = 3;

//window a JS globális objektuma
//megvizsgáljuk, hogy az x a window objektum tulajdonsága-e
console.log(x === window.x); //true

//let és const-al deklarált változók nem adódnak hozzá a window object tulajdonságaihoz
console.log(y === window.y); //false
console.log(z === window.z); //false

///////////////////////////////////////
// The this Keyword in Practice
console.log('-------------The this Keyword in Practice---------------------');
/*
- egy speciális változó, dinamikusan működik az adott környezetben történő használatától függően
- egy objektumhoz adott metódus hívásakor a metódust tartalmazó objektumnévre mutat
pl.: const Jonas{......} objektumban használt this a Jonas névre mutat
- egyszerű függvényhíváskor a window objektumra mutat. strict módban undefined-et ad vissza
- nyílfüggvényeknek nincs saját this kulcsszava,
- eseménykezelőknél a this arra a DOM elemre mutat amelyhez az eseménykezelő rendelve van
*/

//globális scope-ban a window objektumra mutat
console.log(this);

//regulásris függvény esetében
const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //strict módban undefined, anélkül itt is a window objektumra mutat
};
calcAge2(1991);

//nyílfüggvény esetében
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //window objektumra mutat
};

calcAgeArrow(1980);

//objektum esetében

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); //teljes jonas objektumra mutat
    console.log(2037 - this.year); //itt a jonas objektum year tulajdonságára mutat
  },
};
jonas.calcAge();

//this arra az objektumra mutat amelyet a metódus hív
const matilda = {
  year: 2017,
};

//hozzáaadtuk a Jonas calcAge metódusát a matilda objektumhoz.
//lényegében egy objektum metódusát adtuk, hozzá egy másik objektumhoz
//ezt hívják method borrowing-nak
matilda.calcAge = jonas.calcAge;

matilda.calcAge(); //this arra az objektumra mutat amelyet a metódus hív. ez nem matilda metódusa, hanem Jonas-é

//hibát ad
const f = jonas.calcAge;
//f(); ez egy reguláris függvényhívás és nem egy objektumhoz hozzáaadott metódus. Nincs neki tulajdonosa

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
console.log('-------------Regular Functions vs. Arrow Functions-------------');

var firstName2 = 'Mathild';

const jonas2 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    //egy reguláris függvényhívásban a this undefined, nyílfüggvényben működik
    isMillenial();
  },

  //undefined a this kulcsszó miatt, nyílfüggvénynél nincs this. Itt this nélkül kell használni. itt a this window object-re mutat
  //a var-al globálisan deklarált firstname2-t látja, arra használható a this. let és a const-nál nem működik
  //sohase használjunk itt nyílfüggvényt metódusnak, mert akkor a this bug-ot okoz

  // greet: () => console.log(`Hey ${this.firstName2}`),

  //használjunk normál függvényt és a this kulcsszót
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas2.greet();
jonas2.calcAge();

//arguments keyword
const addExpr2 = function (a, b) {
  console.log(arguments); //konzolban láthatóak az argumentumok
  return a + b;
};

addExpr2(2, 5, 8, 6); //megadhatunk több argumentumot is mint amennyit a függvény kér

var addArrow2 = (a, b) => {
  console.log(arguments);
  return a + b;
};

//ddArrow2(2, 5, 8); //itt már hibát ír ki ha többet akarunk megadni

///////////////////////////////////////
// Objects vs. primitives
console.log('-------------Objects vs. primitives-------');
let age = 30;
let oldAge = age; //30-ad vissza mert a felülírás cask ezután történik
age = 31;
console.log(age); //31-et ad vissza mert az eredetit felülírtuk
console.log(oldAge);

const me2 = {
  name: 'Jonas',
  age: 30,
};

const friend = me2; //friend is egy objektum lesz, másolva a tulajdonságokat és az értékeket a me2-ből
friend.age = 27;

//ugyanaz a két objektum
//friend objektum értékének a változtatásával az me2 objektum is megváltozik
//mivel a primitivek primitiv típusúak és az objektumok referencia típusúak.
/*a primitívek a call stack-ben heélyezkednek el az objektumok a heap-nem.
A call stack-ben egy változónév egy memóriacímre mutat amely tartalmazza az értéket. Ha utána egy másik változót
egyenlővé teszünk a korábban létrehozott változóval, akkor a 2. változó is az 1. változó címére mutat. Ha utána megváltoztatjuk
az 1. változó értékét akkor lefoglalódik egy másik hely, másik címmel, és akkor már az 1. változó már ar új címre mutat.

Objektumoknál az objektumnév létrehozásakor ugyancsak lefoglalunk egy memeóriacímet a call stackben, viszont a címen
tárolt érték egy hivatkozás lesz a heap-ben lévő memóriacímre ahol az obejktum tárolva van. ez esetben ha 2.objektumot egyenlővé teszünk az 1. objektummal
akkor a 2. objektumnév ugyanarra memóriacímre mutat a call stack-ben és ezzel együtt a heapben lévő memóriacímre is.
ezért ha az egyik objektum értékét meváltoztatjuk, változik a másik is. pdf-ben rajz
*/
console.log('Friend:', friend);
console.log('Me', me2);

///////////////////////////////////////
// Primitives vs. Objects in Practice
console.log('-------------Primitives vs. Objects in Practice------------');

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

/*itt nem hozunk létre egy új objektumot a heap-ben, hanem  csak egy újabb változót a call stack-ben ami tartalmazza 
a jessica objektumra mutató hivatkozást*/
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//jessica2 objektumot átmásoltuk a heap-ben a jessicaCopy objektumba Object.assign-al shallow copy-ként
//így már a 2 objektum független egymástól
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);

//itt már deep copy történik, mindkét objektum megkapja a family tömböt
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
