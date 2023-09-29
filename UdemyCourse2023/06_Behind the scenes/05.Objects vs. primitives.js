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
//SHALLOW COPY
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('valami');
console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);

//#region EZ IS SHALLOW COPY
const copiedArray = { ...jessicaCopy };
console.log(copiedArray);

copiedArray.bdate = 1977;
copiedArray.family.push('akarmi');
console.log(copiedArray);
console.log(jessicaCopy);
//#endregion

//#region EZ AZ IGAZI DEEP CLONE
const deepCopy = JSON.parse(JSON.stringify(copiedArray));
deepCopy.bdate = 1980;
deepCopy.family.push('asdfg');
console.log(deepCopy);
console.log(copiedArray);
//#endregion
