function multipleOfIndex(array) {
  return array.filter((item, index) => item % index === 0 || item === 0);
}

console.log(multipleOfIndex([0, 2, 3, 6, 9]));

function inAscOrder(arr) {
  return [...arr].sort((a, b) => a - b).toString() === arr.toString();
}

console.log(inAscOrder([1, 6, 10, 18]));

function checkExam(array1, array2) {
  let sum = 0;

  array2.map((item, index) =>
    item === array1[index] ? (sum += 4) : item === "" ? (sum += 0) : (sum -= 1),
  );

  if (sum < 0) return 0;

  return sum;
}

console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));

function cookie(x) {
  function cookie(x) {
    return typeof x === "string"
      ? "Who ate the last cookie? It was Zach!"
      : typeof x === "number"
      ? "Who ate the last cookie? It was Monica!"
      : "Who ate the last cookie? It was the dog!";
  }
}

console.log(cookie("Ryan"));
console.log(cookie(26));
console.log(cookie(2.3));
console.log(cookie(true));

function multiTable(number) {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str += `${i} * ${number} = ${i * number}\n`;
  }

  return str;
}

console.log(multiTable(5));

//return price without vat
function excludingVatPrice(price) {
  return price === null ? -1 : Number((price / 1.15).toFixed(2));
}

console.log(excludingVatPrice(230));

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));

function stairsIn20(s) {
  return (
    20 *
    s.reduce(
      (acc, curr) => acc + curr.reduce((acc2, curr2) => acc2 + curr2, 0),
      0,
    )
  );
}

function points(games) {
  let sum = 0;

  games.map((item) =>
    +item[0] > +item[2]
      ? (sum += 3)
      : +item[0] === +item[2]
      ? (sum += 1)
      : (sum += 0),
  );

  return sum;
}

console.log(
  points([
    "1:0",
    "2:0",
    "3:0",
    "4:0",
    "2:1",
    "3:1",
    "4:1",
    "3:2",
    "4:2",
    "4:3",
  ]),
);

function calculateTip(amount, rating) {
  const TIPS = {
    terrible: 0.0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.2,
  };

  console.log(TIPS["good"]);
  console.log(rating.toLowerCase() in TIPS);
  // return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";

  switch (rating.toLowerCase()) {
    case "excellent":
      return Math.ceil((amount * 20) / 100);
      break;
    case "great":
      return Math.ceil((amount * 15) / 100);
      break;
    case "good":
      return Math.ceil((amount * 10) / 100);
      break;
    case "poor":
      return Math.ceil((amount * 5) / 100);
      break;
    case "terrible":
      return 0;
      break;

    default:
      return "Rating not recognised";
  }
}

console.log(calculateTip(26.95, "GOOd"));

function findMultiples(integer, limit) {
  let res = [];

  for (let i = integer; i <= limit; i += integer) {
    res.push(i);
  }

  return res;
}

console.log(findMultiples(5, 25));

function tripleTrouble(one, two, three) {
  let res = [];

  for (let i = 0; i < one.length; i++) {
    res.push(one[i], two[i], three[i]);
  }

  return res.join("");
}

console.log(tripleTrouble("Sea", "urn", "pms"));

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  let rule = { rock: "scissors", paper: "rock", scissors: "paper" };

  return rule[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
};

console.log(rps("scissors", "rock"));

function peopleWithAgeDrink(old) {
  return old >= 21
    ? "drink whisky"
    : old >= 18
    ? "drink beer"
    : old >= 14
    ? "drink coke"
    : "drink toddy";
}

console.log(peopleWithAgeDrink(18));

let str = "aa bbb ccc ! = , ";
let obj = {};

console.log(
  str
    .split("")
    .map((item) => (!obj[item] ? (obj[item] = 1) : (obj[item] += 1))),
);

console.log(obj);
