function generateRange(min, max, step) {
  // let result = [];

  // while (min <= max) {
  //   result.push(min);
  //   min += step;
  // }
  // return result;

  for (var res = []; min <= max; min += step) res.push(min);
  return res;
}

console.log(generateRange(1, 10, 3));

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

function feast(beast, dish) {
  return (
    beast.charAt(0) === dish.charAt(0) &&
    beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)
  );
}

console.log(feast("great blue heron", "garlic naan"));

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

console.log(removeChar("country"));

function correct(string) {
  // return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");

  // return string.replaceAll("5", "S").replaceAll("0", "O").replaceAll("1", "I");

  const signs = {
    5: "S",
    0: "O",
    1: "I",
  };

  return [...string].map((item) => signs[item] || item).join("");

  // return string.replace(/[501]/g, (item) => signs[item]);
}

console.log(correct("L0ND0N"));

function noSpace(x) {
  return x.replace(/ /g, "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

function replace(s) {
  return s.replace(/[aeiouAEIOU]/g, "!");
}

console.log(replace("Hi"));

function digitize(n) {
  return String(n).split("").reverse().map(Number);
}

console.log(digitize(35231));

function sumMul(n, m) {
  if (m <= 0) return "INVALID";
  let sum = 0;
  for (let i = n; i < m; i += n) sum += i;
  return sum;
}

console.log(sumMul(3, 13));

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

console.log(hexToDec("FF"));

function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(3, "*"));

function maps(x) {
  return x.map((item) => item * 2);
}

console.log(maps([1, 2, 3]));

// add the value "codewars" to the websites array 1,000 times
var websites = [];
websites = new Array(1000).fill("codewars");

function greet(name) {
  return `Hello, ${name == "Johnny" ? "my love" : name}!`;
}

console.log(greet("Johnny"));

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arrayOfSheep) {
  // return arrayOfSheep.reduce((acc, curr) =>
  //   curr === true ? acc + curr : acc + 0,
  // );
  return arrayOfSheep.filter(Boolean).length;
}

console.log(countSheeps(array1));

//fill an array
const arr = (N) => Array.from({ length: N }, (_, index) => index);

console.log(arr(5));

function solution(a, b) {
  // const aLong = a.length;
  // const bLong = b.length;

  // return aLong < bLong ? `${a}${b}${a}` : `${b}${a}${b}`;

  return a.length > b.length ? b + a + b : a + b + a;
}

console.log(solution("U", "False"));

function addLength(str) {
  return str.split(" ").map((item) => `${item} ${item.length}`);
}

console.log(addLength("apple ban"));

//tömb feltöltése Array() and fill()
const array = Array(10)
  .fill(0)
  .map((item, index) => index);

console.log(array);

function divisibleBy(numbers, divisor) {
  return numbers.filter((item) => item % divisor === 0);
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("yoda doesn't speak like this"));
