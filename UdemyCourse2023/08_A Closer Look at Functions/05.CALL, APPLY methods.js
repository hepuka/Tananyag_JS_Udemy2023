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
