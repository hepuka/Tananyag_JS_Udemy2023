//www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
function stringToArray(string) {
  return string.split(" ");
}
console.log(stringToArray("Robin Singh"));


var websites = new Array(4).fill("codewars");
console.log(websites);

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