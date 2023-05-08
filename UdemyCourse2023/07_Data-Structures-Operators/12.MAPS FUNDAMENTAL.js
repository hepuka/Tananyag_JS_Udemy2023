console.log('-----------MAPS FUNDAMENTAL-----------');

//MAPS jobban használhatóbb mint a SET
//az értékek feltérképezése a kulcshoz
//itt is kulcs érték párokat tárolunk, de míg az objektumban a kulcsok stringek, itt bármilyen típusú lehet a kulcs

//hasznos elsőnek egy üres map-et készíteni utána feltölteni azt
const rest = new Map();

//map feltöltése. első a kulcs utána az érték
//itt string a kulcs
rest.set('name', 'Classico Italiano');

//itt number típusú a kulcs
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

//ebben az estben is kiírja a teljes map-et, nem csak a 2-es kulccsal rendelkező adatotokat
//set visszatér a teljes map-el
console.log(rest.set(2, 'Lisbon, Portugal'));

//a set metódusokból egy láncot is alkothatunk. nem kell egyenként megadni a kulcs értékeket, hanem az első után hozzáláncoljuk a többit
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest);

//függvény mint kulcs
let person = new Map();
person.set(function print() {
  console.log('hey');
}, 'Awais');

//két tömb a Map-ben
let persons = new Map([['awais'], [new Date(), 'today']]);
console.log(persons);

console.log(rest.name); //undefined, így nem lehet lekérdezni a Map elemeit

//MAP lekérdező metódusát a GET-et kell használni
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

//csak a kulcsokat adja vissza
console.log(rest.keys());

//csak az értékeket adja vissza
console.log(rest.values());

//példa a boolean típusú kulcsra
const time = 14;

//mivel a megadott érték (8) nem felel meg a feltételeknek így false a kiértékelés, így a visszaadott érték a mapben megadott true kulcs értéke (We are closed)
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//kulcs létezésének ellenőrzése, ha van ilyen kulcs akkor true-val tér vissza
console.log(rest.has('categories'));

//törli a 2-es kulcsot és annak értékét
rest.delete(2);
console.log(rest);
// rest.clear(); törli a teljes map-et
console.log(rest.size); //map mretét adja vissza, mennyi kulcs-érték pár vann benne

//tömb  használata kulcsként
//2 kulcsot tartalmazó tömb. ez nem működik így a kiírásnál 636.sor, ezért a két kulcsot egy tömbe kell rakni. és a tömböt kell átadni a set metódusnak. így már az itt lévő arr3 és a 637.sorban lévő ugyanazon a memóriahelyen van
const arr3 = [1, 2];
rest.set(arr3, 'Test');

//undefined-et kapunk vissza, mert ez és a 632. sorban lévő nem ugyanaz az objektum a heap-ben
//a két objektum nem ugyanazon a memóriahelyen van.
console.log(rest.get(arr3));

//objektum  használata kulcsként
//document.querySelector('h1') ez ad vissza egy objektumot és ez lesz a kulcs, tehát h1 lesz a kulcs és Heading az érték
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
