console.log('-----------Numeric Separators-------------');

// 287,460,000,000
// _  vonallal szétválazthatom a nagy számokat, hogy jobban lássam, mivel a js figyelmen kívül hagyja ezeket a karaktereket
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000')); //itt a _ már nem működik, NaN ad vissza
console.log(parseInt('230_100')); //itt működik de csak az előtte lévő számokat adja visssza
