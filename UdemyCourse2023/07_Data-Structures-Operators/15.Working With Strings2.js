console.log('-----------Working With Strings - Part 2-----------');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas

//elsőnek a teljeset kisbetűssé tesszük
const passengerLower = passenger.toLowerCase();

//majd az első karaktert nagybetűssé tesszük és utána a többit kisbetűssé, úgy hogy slice(1)-et adunk meg. Ezzel az első karaktert követően az összeset módosítja
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';

//ezzel hasonlítjuk össze az eredeti emailt
const loginEmail = '  Hello@Jonas.Io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';

//kicserélem a font jelet dollár jelre és a vesszőt pontra (mit, mire)
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

//itt csak a door első előfordulásánál cserél
console.log(announcement.replace('door', 'gate'));

//itt a door összes előfordulását cseréli
//console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans

//true vagy false-al tér vissza
const plane2 = 'Airbus A320neo';

console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Airb'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  //kisbetűvé teszem a kapott string-et
  const baggage = items.toLowerCase();

  //ellenőrzöm, hogy a tiltott szavak benne vannak-e a string-be
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
