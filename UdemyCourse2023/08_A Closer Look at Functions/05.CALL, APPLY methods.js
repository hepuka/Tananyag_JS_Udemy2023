console.log('---------Call and apply Methods----------');

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

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//a lufthansa objektum book metódusát szedtem ki és mentettem el egy változóba
//const book = lufthansa.book;

// Call method, ezzel a metódussal tudom meghívni egy objektum metódusát egy másik objektumra
//változónév amibe kimentettem az objektum metódustát, majd call és ennek argumentumaként megadni a másik objektum nevét, amire hívni akarjuk, majd megadni az argumentumokat
lufthansa.book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

//az obejktum saját metódusánál nem kell a call
lufthansa.book(240, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

lufthansa.book.call(swiss, 500, 'Mary Cooper');
console.log(swiss);

// Apply method = SPREAD operátor
const flightData = [600, 'George Cooper'];
const flightData2 = [700, 'George Harrison'];

//apply metódussal a tömben lévő elemeket adjuk át egy metódusnak mint argumentum
//call metódussal egyenként kell megadni az argumentumokat
lufthansa.book.apply(swiss, flightData);

//ha a call metódusra akarjuk használni a tömbös megoldást és nem egyenként megadni az argumentumokat akkor spread opoerátort kell használni
lufthansa.book.call(swiss, ...flightData2);
