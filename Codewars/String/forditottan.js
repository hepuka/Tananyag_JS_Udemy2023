function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}
//const nameShuffler = str => str.split(' ').reverse().join(' ');
console.log(nameShuffler("john McClane"));

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseWords("yoda doesn't speak like this"));
console.log(reverseWords("hello world!"));

//www.codewars.com/kata/5583090cbe83f4fd8c000051
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
console.log(digitize(35231));
