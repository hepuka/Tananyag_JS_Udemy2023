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
