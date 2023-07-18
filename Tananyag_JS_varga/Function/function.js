/*
függvények:

- a függvény az Object típusnak egy példánya, ezért a fv úgy viselkedik mint bármi más objektum
- egyetlen változóban tárolhatunk egy teljes függvényt
- egy függvényt átadhatunk egy másik függvénynek mint paraméter (firstClass függvények)
- a függvény visszatérési értéke lehet függvény is

*/

let evek = [1954, 1990, 2005, 2008, 2010];

//ez a firstClass függvény és ez kapja meg második paraméterként egy másik függvényt
function tombMuvelet(tomb, callback) {
  let ujtomb = [];

  for (let i = 0; i < tomb.length; i++) {
    ujtomb.push(callback(tomb[i]));
  }

  return ujtomb;
}

//callback függvény 1.

function korSzamitas(elem) {
  return 2022 - elem;
}

//callback függvény 2.
function felnott(elem) {
  return elem >= 18 ? "felnőtt" : "gyermek";
}

let korok = tombMuvelet(evek, korSzamitas);
console.log(korok);

let felnottek = tombMuvelet(korok, felnott);
console.log(felnottek);

/////////////////////Nested Functions////////////////////////////
function showEverywhere(text) {
  function decorate(a) {
    return "###---" + a + "---###";
  }

  text = decorate(text);
  console.log(text);
}

showEverywhere("Hello World");

//////////////////////higher order functions////////////////
const sum = function (x, y) {
  return x + y;
};

console.log(sum(12, 3));

function multiply(x, y) {
  return x * y;
}

const devide = function (x, y) {
  return x / y;
};

//függvények nevei egy tömb elemei
const operations = [sum, multiply, devide];
console.log(operations[0](2, 10)); //így hivatkozun egy elem függvényre
console.log(operations[2](10, 2));

//végigmegyünk a tömbön, és a sorva következő függvényhívás megtörténik mindenegyes cilkusban
for (let func of operations) {
  let result = func(10, 2);
  console.log(result);
}

//függvények nevei egy objektum tulajdonságának értéke
const funcInObject = {
  sum: sum,
  multiply: multiply,
  devide: devide,
};

console.log(funcInObject.sum(2, 20));
console.log(funcInObject.multiply(2, 20));

//////////////////////////////////Functions as Arguments///////////////////////////////////////

//függvény mint argumentum, és a függvény függvénnyel tér vissza

function callThreeTimes(f) {
  f();
  f();
  f();
}
function cry() {
  console.log("Épp sírok");
}

callThreeTimes(cry);

//2 paraméterrel, amikor a 2. paraméter az ismétlések száma
function repeatNTimes(func, number) {
  for (let i = 0; i < number; i++) {
    func();
  }
}

repeatNTimes(cry, 5);

//2 paraméterrel, amikor a 2. paraméter is egy függvény
function pickOne(func1, func2) {
  let rand = Math.random();
  if (rand < 0.5) {
    func1();
  } else {
    func2();
  }
}

function say() {
  console.log("Épp mondok valamit");
}

function show() {
  console.log("Épp mutatok valamit");
}

pickOne(show, say);

////////////////////////////////Functions as Return Values/////////////////////////////////
function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y ? "Igaz" : "Nem igaz";
  };
}

console.log(makeBetweenFunc(2, 5)(3));
