'use strict';

console.log('-----------Default Parameters------------');
//ES6
const bookings = [];

//itt a függvény paramétereinek default értéket is adok
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 200 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  //készítünk egy obejktumot a bejövő értékekből és azt eltároljuk egy tömben
  const booking = {
    /*     flightNum: flightNum,
    numPassengers: numPassengers,
    price: price, */

    //egyszerűsített változata
    //enhanced object literal syntax
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 2, 800);

//undefined-et kell használni ha valamelyik paramétert nem akarjuk megváltoztatni
//itt az elsőnek és a harmadiknak szeretnénk csak értéket adni, a másodikat az alapértelmezetten szeretnénk hagyni
createBooking('LH123', undefined, 1000);

console.log(bookings);

console.log(
  '----------How Passing Arguments Works: Values vs. Reference-------------'
);

const flight = 'LH234';

const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

//a visszaadott érték LH234 ez lesz és nem az amit a függvényben megadtunk, mivel a flight egy primitív érték, és az átadáskor az érték egy másolata kerül átadásra. A függvény nem lesz hatással az eredeti, átadott értékre. Itt érték átadás történik
//a jonas esetében a név megváltozik a függvény futtatását követően,mivel egy objektumot adunk át a függvénynek, és az objektum referencia típusú. Az átadáskor a hivatkozást másolunk és az eredeti és az átadott is ugyanarra az objektumra mutat a memória heap-ben. Itt hivatkozás átadás történik, memóriacímet adunk át.

//JS-ben CSAK ÉRTÉK SZERINTI ÁTADÁS LÉTEZIK. Ugyan működik hivatkozás átadással is, de ez is értéket jelent a JS-ben, érték amely a memóriacímet tartalmazza
//checkIn(flight, jonas);

console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.floor(Math.random() * 100000000000);
};

//ezzel a függvénnyel módosítom az eredeti objektumot, megváltoztatom az eredeti passport számot
newPassport(jonas);

//ez a függvény wrong passport-ot ad vissza mert ez az eredeti passporttal ellenőriz
//checkIn(flight, jonas);

console.log('---------First-Class and Higher-order function------');

//ELMÉLETI RÉSZ. PDF-ben

console.log('---------Functions Accepting Callback Functions---------');

//kiszedi a szóközöket a string-ből
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

//a string első szavát nagybetűssé teszi
const upperFirstWord = function (str) {
  //rest operátor
  const [first, ...others] = str.split(' ');
  //spread operátor
  return [first.toUpperCase(), ...others].join(' ');
};

// transformer egy Higher-order function aminek paraméterként egy függvényt adunk át, ami egy low level function
//a higher function feladata, hogy végrehajtsa a feladatot, de az nem érdekli, hogy hogyan. A hogyanért a low level function felel.
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

//itt csak a függvényátadás történik és nem függvény hívás. Ezért csak a függvény nevét kell megadni - upperFirstWord - és nem hívni  azt- upperFirstWord()
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//addeventlisteners-nek átadottfüggvény
const high5 = function () {
  console.log('👋');
};
//a body területre kattintva aktiválódik a high5 függvény
//document.body.addEventListener('click', high5);

//egy tömböt a forEach-el bejárva a for-nak egy függvényt adunk át
['Jonas', 'Martha', 'Adam'].forEach(high5);

console.log('------Functions Returning Functions-------');

//függvény ami egy függvénnyel tér vissza
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
//az ilyen típusú függvényeket így kell meghívni. az első a főfüggvénynek atódik át, a 2. argumentum a visszaadott függvénynek
greet('Hello')('Jonas');

//hosszabb változata
//greet függvénynek átadjuk a Hey stringet, a függvény eredménye egy függvény amit eltárolunk egy változóba
const greeterHey = greet('Hey');

//ennek a változónak, vagyis függvénynek adjuk át a Jonas stringet
greeterHey('Jonas');
greeterHey('Steven');

// greeat függvény nyílfüggvény formátumban
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

console.log('---------Call and apply Methods----------');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//a lufthansa objektum book metódusát szedtem ki és mentettem el egy változóba
const book = lufthansa.book;

// Does NOT work
//book(23, 'Sarah Williams');

// Call method
//ezzel a metódussal tudom meghívni egy objektum metódusát egy másik objektumra
//változónév amibe kimentettem az objektum metódustát, majd call éen ennek argumentumaként megadni a másik objektum nevét, amire hívni akarjuk, majd megadni az argumentumokat
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
const flightData2 = [533, 'George Harrison'];

//apply metódussal egy tömben lévő elemeket adhatunk át a book metódusnak
book.apply(swiss, flightData);

//itt is a spread operátorral egy tömböt adunk át a book mentódusnak
//ez esetben a call-nél használni kell a spread operátort
book.call(swiss, ...flightData2);

console.log('---------Bind Method---------');

//book.call(eurowings, 23, 'Sarah Williams');

//bind metódust arra tudom használni pl., hogy a const book = lufthansa.book; -al kiszedem az obejktumból a metódust, majd erre a metódura meghívom a bind metódust és átadom nekii azt a z objektumot amire szeretném használni, végül mindezt elmentem egy változóba(bookEW). Ezután már ezt a bookEW-t tudom használni mint metódus és ennek megadni az argumentumokat

//ez azért is jó, mert ezt at eljárást több objektumra is meghívhatom, pl.: lufthansa, swiss
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLH(512, 'John Doe');

const Mickey = [123, 'Mickey Mouse'];
//bind-nál is működik, hogy a spread operátorral egy tömböt adunk át ami tartalmazza az argumentumokat
bookLX(...Mickey);

//ez esetben elődefiniáltuk, hogy a bookEW23 metódus csak a 23-as számú járatra foglal helyet a eurowingnek. A nevet később adom meg mint különálló argumentum
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners

//egy új property-t és értéket adunk hozzá a lufthansa objektumhoz
lufthansa.planes = 300;

//egy új metódust adunk hozzá a lufthansa obejktumhoz
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//itt a bind metódust használjuk, hogy az addTax metódus egyik paraméterének (rate) default értéket adjunk
//ez a függvény specifikusabb mint az addTax függvény

//valójában egy eredeti függvényt (addTAX) bind-olunk, és kapunk egy újabb függvényt(addVAT). Bind-oláskor defaultértéket is adhatunk, melyeket már az új függvény használ
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

//itt már csak a value-t adjunk meg
console.log(addVAT(100)); //100 * 23 + 100;
console.log(addVAT(23));

// bind-olás helyett így is megoldható a két függvény használata egyszerre : függvény ami függvénnyel tér vissza
//az eredeti addTAX függvény megkapja csak a rate paraméter majd ez a függvény visszatér egy másik függvénnyel (addVAT) amihez a value értéket adjuk át, és a belső függvény hajtja végre a számolást, ez tartalmazza a függvény törzsét
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

//egyszerűsített változat, ha értékeket akarunk átadni olyan függvénynek ami függvénnyel tér vissza
console.log(addTaxRate(0.2)(200));

console.log('-------------Coding Challenge #1----------------');
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: [0, 0, 0, 0],

  registerNewAnswer() {
    //1.1
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    //1.2
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  //3.
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

//2.
document
  .querySelector('.poll')

  //bind(poll) nélkül a this a gombra mutat, ezért kell a .bind(poll) mert ezzel mondjuk meg neki, hogy nekünk a poll objektumra kell, hogy mutasson
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

console.log(poll);

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

console.log('-------------Coding Challenge #1 VÉGE----------------');

console.log('------Immediately Invoked Function Expressions (IIFE)--------');

const runOnce = function () {
  console.log('This will never run again');
};
//a kód egy adott pontján mindig meg kell hívni a függvényt ha alkalmazni szeretnénk
runOnce();

// IIFE - a név nélküli függvénydeklarációt követően azonnal meghívódik ,csak egyszer kell meghívni a függvénydeklaráció után rögtön ();
//a teljes függvényt ()-be kell tenni, majd azonnal meghívni ();
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

//ugyanez a függvény nyílfüggvényként
(() => console.log('This arrowfunction will also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);//hibát dob mert a const és a let blokkszintű változó, kívülről nem látszik

//vat függvényszintű innen is látható
console.log(notPrivate);

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

console.log('------Coding Challenge #2---------');
/* 
This is more of a thinking challenge than a coding challenge 

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

console.log('------Coding Challenge #2 VÉGE---------');
