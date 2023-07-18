function hexToDec(hexString) {
  return parseInt(hexString, 16); //hex to decimal
}

console.log(hexToDec("FF"));

const stringToNumber = function (str) {
  return parseInt(str);
};
console.log(stringToNumber("12345"));

//www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript
function opposite(number) {
  return -number;
}

console.log(opposite(-1));

// https://www.codewars.com/kata/55685cd7ad70877c23000102
function makeNegative(num) {
  return num > 0 ? -num : num;
  // return -Math.abs(num);
}

console.log(makeNegative(-42));

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

console.log(past(0, 1, 1));

function binToDec(bin) {
  let total = 0;
  bin
    .split("")
    .reverse()
    .map((item, index) => (item === "1" ? (total += Math.pow(2, index)) : 0));

  return total;
}

console.log(binToDec("1001001"));

var findDigit = function (num, nth) {
  if (nth <= 0) return -1;

  let nums = "" + Math.abs(num);

  return nums.slice(nums.length - nth, nums.length - nth + 1) * 1;
};

console.log(findDigit(5673, 4));

function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

console.log(formatMoney(39.1));

const reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map((item, index) => index + 1)
    .reverse();
};
console.log(reverseSeq(5));
