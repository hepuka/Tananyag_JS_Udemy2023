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
