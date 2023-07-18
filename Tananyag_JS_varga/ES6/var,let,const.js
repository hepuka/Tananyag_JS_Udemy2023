/*

var
- függvényszintű láthatósággal bír (csak fv-ben látszik), ha a fv-ben létrehozunk egy változót var-al, akkor
ez a változó csak a fv-en belül érhető el


const
ES6-ban olyan változók esetében használjuk melyeknek értékei nem változnak a későbbiekben
- blokkszintű láthatósága van

- a const-al létrehozott objektumok értékei megváltoztathatóak:
const a={name:"Zoltán};
a.name='Katika';
ezzel így megváltoztatható a name


let
- ES6-ban a var helyett használjuk
- blokkszintű láthatósága van


hoisting - js a háttérben minden változólétrehozást a kód elejére helyez. A JS fordító kiemeli a 
változó deklarációkat értékadás nélkül a kód elejére. Így nem kapunk hibát ha egy változóra, annak 
deklarációja előtt hivatkozunk.
ES6-ban nem működik, tehát nem használhatunk egy változót azelőtt, hogy létrehoznánk

ES6 előny:
- blokkszintű változó, ez egyfajta adatbiztonságot is jelent
- a let-el létrehozott változókat nem lehet újradeklarálni
- hoisting nem működik a let-el és aconst-al sem

*/

var redeklaráció_varral = "ezt akarom felülírni var-al";

//működik az újradeklarálás var-al
var redeklaráció_varral = "erre akarom felülírni var-al";

console.log(redeklaráció_varral);

var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);

  {
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
}

myFunc(); //működik mivel mindhárom változó globalissan lett deklarálva

/////////////////ES5//////////////////////

var knev = "knev";

function nyelvvizsgaES5(siker) {
  if (siker) {
    var knev_if = "knev_if";
  }

  //sikeresen lefut, mert a var fv szintű változó, az egész fv-ben elérhető
  console.log(knev_if);
}

/*
//ha a fv-en kívül íratjuk ki akkor már nem látható, hibát dob:
console.log(knev_if);*/

//sikeresen lefut, de a knev nem ugyanaz mint a fv.ben lévő knev
console.log(knev);

nyelvvizsgaES5(true);

/////////////////////////////////////ES6/////////////////////////////////////////

let redeklaráció = "ezt akarom felülírni let-el";
redeklaráció =
  "erre akarom felülírni, működik mert nem deklaráltam újra, csak más az értéke";

//ez már nem működik, mert újra deklaráltam
//let redeklaráció="erre akarom felülírni let-el";

console.log(redeklaráció);

let knevES6 = "knevES6";

function nyelvvizsgaES6(siker) {
  const kernev_kint = "kernev_kint";

  if (siker) {
    const kernev = "kernev";

    console.log(kernev); //kernev csak itt használható, blokkszintű változó
    console.log(kernev_kint); //kernev_kint itt is használható mert a fv elején van deklarálva
  }

  /*nem fut le se itt se a fv-en kívül mert a let blokkszintű változó,
  tehát csak az if blokkban látható, mert ott lett deklarálva
  console.log(kernev);*/
  console.log(kernev_kint); //kernev_kint itt is használható mert a fv elején van deklarálva
}

nyelvvizsgaES6(true);

{
  const a = 1;
  let b = 2;
  var c = 3;
  console.log(a + "," + b);
}

/* 
  console.log(a + "," + b);
  - itt már hibát dob, mert a const és a let blokkszintű változó, azok csak abban láthatóak

  - a blokkszintű változódeklarálás egyfajta biztonsági szerepet is betölthet
*/

console.log(c); //attól függetlenül, hogy egy blokkban deklaráltuk a c-t egy var-al az innen is látszik, mert a var fv szintű és nem blokk

let i = 9;

//ez az i blokkszintű változó, csak a for ciklusra vonatkozik, független a két i egymástól
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//ez a for ciklus előtti i-re vonatkozik
console.log(i);

/*
var esetében a két i egy és ugyanaz. A for kiírja az értéket 0-4 ig, de a for ciklus végén még megtörténik az i-nek a léptetése (5)
ezért a for ciklus utáni kiíratás ezt az 5-ös számot írja ki
*/
