const evek = [1977, 1981, 2005, 2008];

//////////ES5///////////////

/*map-el betudom járni a tömböt, módosíthatom elemeit az elem változónévvel*/

var korokES5 = evek.map(function (elem) {
  return 2022 - elem;
});

console.log(korokES5); //eredmény egy tömb lesz

////////ES6////////////
/*A nyíl előtt a függvény paraméterei vannak, mögötte az utasítások*/

const square = (x) => {
  return x * x;
};

//const square = (x) => x * x; //return nélkül is működik

const isEven = (x) => {
  return x % 2 === 0;
};

//const isEven = (x) => x % 2 === 0;

const multiply = (x, y) => {
  return x * y;
};

//const multiply = (x, y) => x * y;

console.log(square(3));
console.log(isEven(4));
console.log(multiply(5, 2));

//1 paraméter 1 utasítás, nem kell ()-jel sehova

let evenOrOdd = evek.map((item) => (item % 2 === 0 ? "even" : "odd"));
console.log(evenOrOdd);

let korokES6 = evek.map((elem) => 2022 - elem);
console.log(korokES6);

//2 paraméter 1 utasítás, itt a paramétereket már ()-be kell rakni
//a paramétereket template literálba is rakhatjuk
korokES6 = evek.map((elem, index) => `${index}. elem: ${2022 - elem}`);
console.log(korokES6);

//2 paraméter 2 utasítás, a paramétereket ()-be és az utasításokat {}-ba kell rakni
korokES6 = evek.map((elem, index) => {
  const most = new Date().getFullYear(); //megkapjuk az aktuális évet
  let kor = most - elem;
  return `${index}. elem: ${kor}`;
});

console.log(korokES6);

//itt csak kiíratom a tömb elemeit
korokES6 = evek.map((elem) => elem);
console.log(korokES6);
