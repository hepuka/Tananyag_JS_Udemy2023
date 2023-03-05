console.log('---------Functions Accepting Callback Functions---------');

//kiszedi a szóközöket a string-ből
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

//a string első szavát nagybetűssé teszi
const upperFirstWord = function (str) {
  //rest operátor
  const [first, ...others] = str.split(' ');
  //spread operátor
  return [first.toUpperCase(), ...others].join(' ');
};

// transformer egy Higher-order function aminek paraméterként egy függvényt adunk át, ami egy low level function
//a higher function feladata, hogy végrehajtsa a feladatot, de az nem érdekli, hogy hogyan. A hogyanért a low level function felel.
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

//itt csak a függvényátadás történik és nem függvény hívás. Ezért csak a függvény nevét kell megadni - upperFirstWord - és nem hívni  azt- upperFirstWord()
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//addeventlisteners-nek átadottfüggvény
const high5 = function () {
  console.log('👋');
};
//a body területre kattintva aktiválódik a high5 függvény
//document.body.addEventListener('click', high5);

//egy tömböt a forEach-el bejárva a for-nak egy függvényt adunk át
['Jonas', 'Martha', 'Adam'].forEach(high5);
