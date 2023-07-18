/*Primitív vagy egyszerű adattípusok és az ibjektumok összehasonlítása 

- egyszerű: number, string, boolean, null, undefined, ezen kívül minden más objektum



különbség:

- ha egy változóhoz rendelek hozzá értéket, akkor a változó azt az értéket tartalmazza

- ha egy változónak egy objektumot adunk, akkor a változó nem tárolja az objektumot
hanem csak hivatkozik rá. Arra a mmeóriaterületre mutat, ahol az objektum tárolva van

*/

/*mivel primitíveknéla változó tartalmazza az értéket, így amikor megváltoztatjuk később
az x értékét 100-ra, akkor az y nem változik, mert az az első x értéket tartalmazza korábbról*/

let x = 10;
let y = x;

x = 100;

console.log(x);
console.log(y);

/*
ez esetben obj1 és obj2-nek is megváltozik az értéke mert hivatkoznak rá, és nem tartalmazzák azt
*/
let obj1 = {
  sz: 100,
  m: 200,
};

let obj2 = obj1;

obj1.sz = 150;

console.log(obj1);
console.log(obj2);

/*
a változó változatlan marad, de az o +.nev megváltozik Lajosra mert az objektum változója
hivatkozik rá
*/
let a = 10;
let o = {
  nev: "Ödön",
  kor: 31,
};

function modosit(a, b) {
  a = 40;
  b.nev = "Lajos";
}

modosit(a, o);

console.log(a);
console.log(o.nev);
