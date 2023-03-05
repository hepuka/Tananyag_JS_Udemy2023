console.log('-----------Working With Strings - Part 1-----------');
// Working With Strings - Part 1

const airline = 'TAP Air Portugal';
const plane2s = 'A320';

console.log(plane2s[0]); //A-at ad vissza
console.log(plane2s[1]); //3-at ad vissza
console.log(plane2s[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

//4.indextől kezdve visszaadja a teljes string-et
console.log(airline.slice(4));

//4.indextől kezdve a 7.indexig adja vissza
console.log(airline.slice(4, 7));

//0.indextől kezdve adja vissza az első szóközig
console.log(airline.slice(0, airline.indexOf(' ')));

//az utolsó szöközt követő karaktertől kezdve adja vissza a stringet
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//háulról a 2.karaktertől kezdve adja vissza
console.log(airline.slice(-2));

//1.karaktertől kezdve adja vissza az utolsó előtti betűig. (az utolsó már nincs benne)
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats

  //az s visszaadja a string utolsó betűjét
  const s = seat.slice(-1);

  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got not lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));
