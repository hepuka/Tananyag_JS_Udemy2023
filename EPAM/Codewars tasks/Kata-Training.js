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
