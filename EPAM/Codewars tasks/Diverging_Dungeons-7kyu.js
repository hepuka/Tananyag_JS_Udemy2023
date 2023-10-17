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
    item === array1[index] ? (sum += 4) : item === "" ? (sum += 0) : (sum -= 1)
  );

  if (sum < 0) return 0;

  return sum;
}

console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));

function cookie(x) {
  return `Who ate the last cookie? It was ${
    typeof x === "string"
      ? "Zach"
      : typeof x === "number"
      ? "Monica"
      : "the dog"
  }!`;
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

  return str.trim("\n");
}

console.log(multiTable(5));

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
  return s.flat().reduce((acc, curr) => acc + curr, 0) * 20;
}

function points(games) {
  let sum = 0;

  games.map((item) =>
    item[0] > item[2]
      ? (sum += 3)
      : item[0] === item[2]
      ? (sum += 1)
      : (sum += 0)
  );

  return sum;
}

function points2(games) {
  return games.reduce(
    (sum, curr) => (sum += curr[0] > curr[2] ? 3 : curr[0] === curr[2] ? 1 : 0),
    0
  );
}

console.log(
  points2([
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
  ])
);

function calculateTip(amount, rating) {
  const obj = {
    terrible: 0,
    poor: 5,
    good: 10,
    great: 15,
    excellent: 20,
  };

  return rating.toLowerCase() in obj
    ? Math.ceil((amount * obj[rating.toLowerCase()]) / 100)
    : "Rating not recognised";
}

console.log(calculateTip(20, "Excellent"));

function findMultiples(integer, limit) {
  return Array.from(
    { length: limit / integer },
    (_, index) => (index + 1) * integer
  );
}

console.log(findMultiples(5, 25));

function tripleTrouble(one, two, three) {
  return [...one]
    .map((item, index) => item + two[index] + three[index])
    .join("");
}

console.log(tripleTrouble("Sea", "urn", "pms"));

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  let rule = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return rule[p1] === p2 ? "Player 1 won!" : "Player 2 won!";

  // return `Player ${
  //   /rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2
  // } won!`;
};

console.log(rps("scissors", "paper"));
console.log(rps("paper", "paper"));
console.log(rps("scissors", "rock"));

function peopleWithAgeDrink(old) {
  return `drink ${
    old >= 21 ? "whisky" : old >= 18 ? "beer" : old >= 14 ? "coke" : "toddy"
  }`;
}

console.log(peopleWithAgeDrink(20));

function charFreq(message) {
  let obj = {};

  message
    .split("")
    .map((item) => (!obj[item] ? (obj[item] = 1) : (obj[item] += 1)));

  return obj;
}

console.log(charFreq("I like cats"));
