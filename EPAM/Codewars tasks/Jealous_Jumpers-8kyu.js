function generateRange(min, max, step) {
  for (var result = []; min <= max; min += step) result.push(min);
  return result;
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
  return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
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
  return String(n).split("").map(Number).reverse();
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

for (let i = 1; i <= 1000; i++) {
  websites.push("codewars");
}

function greet(name) {
  return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
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

function solution(a, b) {
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

console.log(reverseWords("hello world!"));
