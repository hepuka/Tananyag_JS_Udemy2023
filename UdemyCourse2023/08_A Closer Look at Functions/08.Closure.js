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
