var numberToPrice = function (number) {
  if (typeof number !== "number") {
    return "NaN";
  }

  const result = Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
  }).format(number);

  return result.slice(0, result.indexOf(".") + 3);
};

console.log(numberToPrice(13253.5123));

function solution(string) {
  //   const letters = [...string].filter((item) => item === item.toUpperCase());

  //   return [...string]
  //     .map((item) => (letters.includes(item) ? " " + item : item))
  //     .join("");

  return string.replace(/[A-Z]/g, (item) => " " + item);
}

console.log(solution("camelCasingTest"));

function inArray(array1, array2) {
  //   const str = array2.join(" ");

  //   return array1.filter((item) => str.includes(item)).sort();

  return array1.filter((a1) => array2.find((a2) => a2.match(a1))).sort();
}

let a1 = ["live", "strong", "lyal", "lysh", "arp"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(a1, a2));

function towerBuilder(nFloors) {
  //   let space,
  //     star,
  //     tower = [];

  //   for (let i = 1; i <= nFloors; i++) {
  //     space = " ".repeat(nFloors - i);
  //     star = "*".repeat(2 * i - 1);
  //     tower.push(`${space}${star}${space}`);
  //   }

  //   return tower;

  return [...Array(nFloors)].map(
    (_, i) =>
      " ".repeat(nFloors - 1) + "*".repeat(2 * i + 1) + " ".repeat(nFloors - 1)
  );
}

console.log(towerBuilder(10));

function high(x) {
  let numbers = x
    .split(" ")
    .map((item) =>
      [...item].reduce((acc, curr) => acc + curr.charCodeAt() - 96, 0)
    );

  return x.split(" ")[numbers.indexOf(Math.max(...numbers))];
}

console.log(high("man i need a taxi up to ubud"));

function rot(strng) {
  return strng.split("").reverse().join("");
}
function selfieAndRot(strng) {
  const top = strng
    .split("\n")
    .map((item) => item.padEnd(item.length * 2, "."))
    .join("\n");

  return top + "\n" + rot(top);
}

function oper(fct, s) {
  return fct(s);
}

let s = "abcd\nefgh\nijkl\nmnop";

console.log(oper(rot, s));
console.log(oper(selfieAndRot, s));

function findOdd(A) {
  let resultObj = {};

  A.map((item) =>
    !resultObj[item] ? (resultObj[item] = 1) : (resultObj[item] += 1)
  );

  //   for (const [key, value] of Object.entries(resultObj)) {
  //     if (value % 2) return parseInt(key);
  //   }

  for (let key in resultObj) {
    if (resultObj[key] % 2) return parseInt(key);
  }
}
console.log(findOdd([1, 1, 2]));

function solution2(str) {
  let res = [];
  if (str.length % 2) str = str + "_";
  for (let i = 0; i < str.length; i += 2) res.push(str[i] + str[i + 1]);

  return res;
}

console.log(solution2("abcdef"));
console.log(solution2("abc"));

function digitalRoot(n) {
  let res = [...String(n)].reduce((acc, curr) => acc + +curr, 0);

  return res < 10 ? res : digitalRoot(res);
}

console.log(digitalRoot(468883));

function solution3(number) {
  let sum = 0;

  if (number <= 0) return 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
}

console.log(solution3(10));
