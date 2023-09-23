function Sleigh() {}

Sleigh.prototype.authenticate = (name, password) => {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};

function boolToWord(bool) {
  return bool === true ? "Yes" : "No";
}

console.log(boolToWord(true));

function binToDec(bin) {
  return Number.parseInt(bin, 2);
}

console.log(binToDec("10101"));

function positiveSum(arr) {
  return arr.reduce((acc, curr) => (curr > 0 ? acc + curr : acc + 0), 0);
}

console.log(positiveSum([1, -2, 3, 4, 5]));

function toCsvText(array) {
  return array.join("\n");
}

console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ]),
);

function stringClean(s) {
  return s.replace(/\d/g, "");
}

console.log(stringClean("(E3at m2e2!!)"));

function makeNegative(num) {
  // return num < 0 ? num : -num;
  return -Math.abs(num);
}

console.log(makeNegative(15));

function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, curr) => acc + curr);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

const reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map((item, index) => index + 1)
    .reverse();
};

console.log(reverseSeq(5));

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(2));

function spEng(sentence) {
  // return /English/i.test(sentence);
  return sentence.toLowerCase().includes("english");
}

console.log(spEng("english"));

function SafeInteger(n) {
  return Number.isSafeInteger(n);
}

console.log(SafeInteger(9007199254740990));

function testEven(n) {
  return n % 2 === 0 ? true : false;
}

console.log(testEven(-4));

function getChar(c) {
  return String.fromCharCode(c);
}

console.log(getChar(65));

function uniTotal(string) {
  return string.split("").reduce((acc, curr) => acc + curr.charCodeAt(), 0);
}

console.log(uniTotal("Mary Had A Little Lamb"));

function remainder(n, m) {
  return n > m ? n % m : m % n;
}

console.log(remainder(13, 72));

function remove(string) {
  // return string.charAt(string.length - 1) === "!"
  //   ? string.slice(0, string.length - 1)
  //   : string;
  return string.replace(/!$/, "");
}

console.log(remove("Hi"));

function findAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((acc, curr) => acc + curr) / array.length;
}

console.log(findAverage([1, 2, 3]));
