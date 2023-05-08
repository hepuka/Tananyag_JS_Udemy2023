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

  //készítünk egy objektumot a bejövő értékekből és azt eltároljuk egy tömben
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

  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 2, 800);

console.log(bookings);

//undefined-et kell használni ha valamelyik paramétert nem akarjuk megváltoztatni
//itt az elsőnek és a harmadiknak szeretnénk csak értéket adni, a másodikat az alapértelmezetten szeretnénk hagyni
createBooking('LH123', undefined, 1000);

console.log(bookings);

///////Default parameters in function

function add(x = 5, y = 5) {
  return x + y;
}
console.log(add());
console.log(add(2, 2));

/////
function addName(name = 'admin', hobby = 'programming') {
  console.log(`The name is ${name} and the bobby is ${hobby}`);
}
addName('Hepuka', 'football');

//////
//objektum elemei függvények

let person = {
  name() {
    return 'Hepuka';
  },

  age() {
    return 46;
  },
};

console.log(person.name());
console.log(person.age());
