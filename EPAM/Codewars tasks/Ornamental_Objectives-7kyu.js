let number = function (busStops) {
  return busStops.reduce((acc, curr) => acc + curr[0] - curr[1], 0);
};

console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
);

function chromosomeCheck(sperm) {
  return sperm === "XY"
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

console.log(chromosomeCheck("XY"));
console.log(chromosomeCheck("XX"));

function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));

var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = humanYears === 1 ? 15 : 24 + (humanYears - 2) * 4;
  let dogYears = humanYears === 1 ? 15 : 24 + (humanYears - 2) * 5;

  return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(10));

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeWord("word"));

function findDifference(a, b) {
  return Math.abs(
    a.reduce((acc, curr) => acc * curr) - b.reduce((acc, curr) => acc * curr)
  );
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));

function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, curr) => acc + curr) / classPoints.length <=
    yourPoints
  );
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

function sakuraFall(v) {
  return v < 1 ? 0 : 400 / v;
}

console.log(sakuraFall(20));

function isValid(formula) {
  return (
    !(formula.includes(1) && formula.includes(2)) &&
    !(formula.includes(3) && formula.includes(4)) &&
    formula.includes(5) === formula.includes(6) &&
    (formula.includes(7) || formula.includes(8))
  );
}

console.log(isValid([1, 3, 7]));

function whoIsPaying(name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name];
}

console.log(whoIsPaying("Melissa"));

function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

console.log(getRealFloor(13));

function isLockNessMonster(s) {
  return /(tree fiddy|three fifty|3.50)/i.test(s);
  // return s.match(/(tree fiddy|three fifty|3.50)/i);
}

console.log(
  isLockNessMonster(
    "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
  )
);

function correctTail(bod, tail) {
  return tail === bod.slice(-1);
}

console.log(correctTail("Fox", "x"));

var hotpo = function (n) {
  if (n == 0) return 0;

  let steps = 0;
  while (n > 1) {
    // n % 2 === 0 ? (n /= 2) : (n = 3 * n + 1);
    n = n % 2 ? 3 * n + 1 : n / 2;
    steps++;
  }

  return steps;
};

console.log(hotpo(6));

const cannonsReady = (gunners) => {
  return Object.values(gunners).every((item) => item === "aye")
    ? "Fire!"
    : "Shiver me timbers!";

  // return Object.values(gunners).includes("nay")
  //   ? "Shiver me timbers!"
  //   : "Fire!";
};

let a = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };
let b = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };

console.log(cannonsReady(a));
console.log(cannonsReady(b));
