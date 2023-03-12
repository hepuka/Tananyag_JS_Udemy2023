console.log('---------Bind Method---------');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

//egy objektum metódusára meghívom a bind metódust és átadom neki azt a másik objektumot amire szeretném használni később, végül mindezt elmentem egy változóba(bookEW). Ezután már ezt a bookEW-t tudom használni mint metódus és ennek megadni az argumentumokat

//ez azért is jó, mert ezt at eljárást több objektumra is meghívhatom, pl.: lufthansa, swiss
const bookEW = lufthansa.book.bind(eurowings);
const bookLH = lufthansa.book.bind(lufthansa);
const bookLX = lufthansa.book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLH(512, 'John Doe');

//bind-nál is működik, hogy a spread operátorral egy tömböt adunk át ami tartalmazza az argumentumokat
const Mickey = [123, 'Mickey Mouse'];
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
