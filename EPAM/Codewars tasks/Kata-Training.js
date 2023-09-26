function strCount(str, letter) {
  let sum = 0;
  str.split("").map((item) => (item === letter ? sum++ : (sum += 0)));

  return sum;
}

console.log(strCount("Hello", "l"));

function array(string) {
  const length = string.split(",").length;

  return length < 3
    ? null
    : string
        .split(",")
        .slice(1, length - 1)
        .join(" ");
}

console.log(array("1,2,3"));

function duplicateCount(text) {
  let obj = {};
  let counter = 0;

  text
    .toLowerCase()
    .split("")
    .map((item) => (!obj[item] ? (obj[item] = 1) : (obj[item] += 1)));

  const values = Object.values(obj);

  values.map((item) => (item >= 2 ? counter++ : (counter += 0)));

  return counter;
}

console.log(duplicateCount("aabBcde"));

//https://www.codewars.com/kata/541a354c39c5efa5fa001372/train/javascript
function ipToNum(ip) {
  let str = ip
    .split(".")
    .map((item) => Number(item).toString(2).padStart(8, "0"))
    .join("");

  return parseInt(str, 2);
}

console.log(ipToNum("192.168.1.1"));

function numToIp(num) {
  return num
    .toString(0b10)
    .match(/.{1,8}/g)
    .map((item) => parseInt(item, 2))
    .join(".");
}

console.log(numToIp(3232235777));

function digPow(n, p) {
  let result =
    [...String(n)]
      .map(Number)
      .map((item, index) => Math.pow(item, index + p))
      .reduce((acc, curr) => acc + curr, 0) / n;

  return Number.isInteger(result) ? result : -1;
}

console.log(digPow(92, 1));

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]));

function friend(friends) {
  return friends.filter((item) => item.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]));

function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

console.log(hoopCount(3));
console.log(hoopCount(11));

function domainName(url) {
  url = url.replace(/(https?:\/\/|www.)/g, "");
  return url.split(".")[0];
}

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
console.log(domainName("http://www.zombie-bites.com"));

function zero(o) {
  return o === undefined ? "0" : Math.floor(eval(`0${o}`));
}
function one(o) {
  return o === undefined ? "1" : Math.floor(eval(`1${o}`));
}
function two(o) {
  return o === undefined ? "2" : Math.floor(eval(`2${o}`));
}
function three(o) {
  return o === undefined ? "3" : Math.floor(eval(`3${o}`));
}
function four(o) {
  return o === undefined ? "4" : Math.floor(eval(`4${o}`));
}

function five(o) {
  return o === undefined ? "5" : Math.floor(eval(`5${o}`));
}
function six(o) {
  return o === undefined ? "6" : Math.floor(eval(`6${o}`));
}

function seven(o) {
  return o === undefined ? "7" : Math.floor(eval(`7${o}`));
}
function eight(o) {
  return o === undefined ? "8" : Math.floor(eval(`8${o}`));
}
function nine(o) {
  return o === undefined ? "9" : Math.floor(eval(`9${o}`));
}

function plus(n) {
  return `+${n}`;
}
function minus(n) {
  return `-${n}`;
}
function times(n) {
  return `*${n}`;
}
function dividedBy(n) {
  return `/${n}`;
}

console.log(eight(dividedBy(three())));

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft * mpg >= distanceToPump ? true : false;
};
console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));

let candidate1 = { minSalary: 120000 },
  job1 = { maxSalary: 130000 },
  job2 = { maxSalary: 80000 };

function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) throw error;

  return candidate.minSalary - candidate.minSalary / 10 <= job.maxSalary;
}

console.log(match(candidate1, job2));

function invert(array) {
  return array.map((item) => (item < 0 ? Math.abs(item) : item - item * 2));
}

console.log(invert([1, -2, 3, -4, 5]));

function century(year) {
  return Math.floor((year - 1) / 100) + 1;
}

console.log(century(100));

function reverseWords(str) {
  return str
    .split(" ")
    .map((item) => [...item].reverse().join(""))
    .join(" ");
}

console.log(reverseWords("This is an example!"));

function twoSum(numbers, target) {
  let array = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        array.push(i, j);
      }
    }

    return array;
  }
  return null;
}

console.log(twoSum([1, 2, 3], 4));

function fileextension(str) {
  let asd = str.split(".");
  return asd.length > 1 ? asd[asd.length - 1] : false;
}

console.log(fileextension("sadasda..tjj.txt"));

function isEven(i) {
  return !Boolean(i % 2);
}

console.log(isEven(9));

//type coercion
// + számot stringgé
// - stringet számmá
console.log("I'm " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("10" - 3);

console.log(Boolean(0));
