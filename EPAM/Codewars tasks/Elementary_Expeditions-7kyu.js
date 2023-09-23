function differenceInAges(ages) {
  const min = Math.min(...ages);
  const max = Math.max(...ages);
  return [min, max, max - min];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));

function descendingOrder(n) {
  return [...String(n)].sort((a, b) => b - a).join("");
}

console.log(descendingOrder(1021));

function arrayMadness(a, b) {
  return (
    a.reduce((acc, curr) => acc + curr ** 2, 0) >
    b.reduce((acc, curr) => acc + curr ** 3, 0)
  );
}

console.log(arrayMadness([5, 3, 2, 4, 1], [15]));

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((item) => !geese.includes(item));
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);

function firstNonConsecutive(arr) {
  const num = arr.find((item, index) => item !== index + arr[0]);
  return Number.isInteger(num) ? num : null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 5]));

function getSum(a, b) {
  let sum = 0;
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  if (a === b) return a;

  for (let i = min; i <= max; i++) sum += i;

  return sum;
}

console.log(getSum(5, -1));

class Ball {
  constructor(ballType) {
    this.ballType = ballType || "regular";
  }
}

let ball1 = new Ball();
let ball2 = new Ball("super");

String.prototype.isUpperCase = function () {
  // return this == this.toUpperCase();
  return !/[a-z]/.test(this);
};

// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
  constructor(side = 0) {
    this.side = Math.abs(side);
  }

  getSide() {
    return this.side;
  }

  setSide(n) {
    this.side = Math.abs(n);
  }
}

let Person = function () {
  let person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      this._friends.push(...f);
    },
  };
  return person;
};

function htmlspecialchars(formData) {
  let chars = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "&": "&amp;",
  };

  return [...formData].map((item) => chars[item] || item).join("");

  // return formData.replace(/[<>"&]/g, (item) => chars[item]);
}

console.log(htmlspecialchars("<h2>Hello World</h2>"));

function enough(cap, on, wait) {
  return on + wait < cap ? 0 : Math.abs(wait - cap + on);
}

console.log(enough(54, 10, 77));

function highAndLow(numbers) {
  const nums = numbers.split(" ").map(Number);

  return [Math.max(...nums), Math.min(...nums)].join(" ");
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

function getCount(str) {
  return str.split("").filter((item) => "aeiouAEIOU".includes(item)).length;
  // return str.replace(/[^aeiou]/gi, '').length;
}

console.log(getCount("abracadabra"));

function solution(nums) {
  return nums === null ? [] : nums.sort((a, b) => a - b);
}

console.log(solution([]));

function accum(s) {
  return s
    .toLowerCase()
    .split("")
    .map((item, index) => item.toUpperCase() + item.repeat(index))
    .join("-");
}

console.log(accum("abcD"));

function isIsogram(str) {
  return str.toLowerCase().length === new Set(str.toLowerCase()).size;
}

console.log(isIsogram("moOse"));

// return masked string
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}

console.log(maskify("4556364607935616"));

function DNAStrand(dna) {
  let letters = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return dna.replace("ATCG", (item) => letters[item]);
  // return dna.replace(/./g, (item) => letters[item]);
}

console.log(DNAStrand("GTAT"));

var findDigit = function (num, nth) {
  if (nth <= 0) return -1;

  let nums = String(Math.abs(num));

  return nums.slice(nums.length - nth, nums.length - nth + 1) * 1;
};

console.log(findDigit(5673, 7));
