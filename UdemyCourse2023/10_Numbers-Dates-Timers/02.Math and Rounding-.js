console.log('---------Math and Rounding-------');

console.log(Math.sqrt(25));

// ** exponentiation operator
//  It is equivalent to Math.pow()
console.log(25 ** (1 / 2));
console.log(Math.pow(25, 1 / 2));

console.log(8 ** (1 / 3));
console.log(Math.pow(8, 1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2)); //itt már nem működik

console.log(Math.min(5, 18, 23, 11, 2));

//10px sugarú kőr
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);
console.log(Math.floor(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
console.log(randomInt(1, 6));

// Rounding integers
//a legközelebbi egész számhoz kerekít
console.log(Math.round(23.3));
console.log(Math.round(23.5)); //itt felfelé
console.log(Math.round(23.9));

//mindig felfele kerekít
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

//mindig lefele kerekít
console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3));
console.log(Math.trunc('23.9'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
//toFixed stringet ad vissza szám helyett
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3)); ///3 tizedes jegyre kerekít
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); //számmá konvertálok a + jellel
