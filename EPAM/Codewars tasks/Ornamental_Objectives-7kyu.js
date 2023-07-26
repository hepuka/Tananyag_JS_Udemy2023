let number = function (busStops) {
  return (
    busStops.reduce((acc, curr) => acc + curr[0], 0) -
    busStops.reduce((acc, curr) => acc + curr[1], 0)
  );
};

console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ]),
);

function chromosomeCheck(sperm) {
  if (sperm === "XY") return "Congratulations! You're going to have a son.";
  if (sperm === "XX")
    return "Congratulations! You're going to have a daughter.";
}

console.log(chromosomeCheck("XY"));
console.log(chromosomeCheck("XX"));

function mergeArrays(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2])).sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));

var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears =
    humanYears === 1
      ? 15
      : humanYears === 2
      ? 24
      : humanYears >= 3
      ? 24 + (humanYears - 2) * 4
      : 0;

  let dogYears =
    humanYears === 1
      ? 15
      : humanYears === 2
      ? 24
      : humanYears >= 3
      ? 24 + (humanYears - 2) * 5
      : 0;

  return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(10));

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeWord("word"));

function findDifference(a, b) {
  return Math.abs(
    a.reduce((acc, curr) => acc * curr) - b.reduce((acc, curr) => acc * curr),
  );
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));

function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints >
    classPoints.reduce((acc, curr) => acc + curr) / classPoints.length
  );
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

function sakuraFall(v) {
  return v <= 0 ? 0 : 400 / v;
}

console.log(sakuraFall(20));

function isValid(a) {
  return (
    !(a.includes(1) && a.includes(2)) &&
    !(a.includes(3) && a.includes(4)) &&
    a.includes(5) === a.includes(6) &&
    (a.includes(7) || a.includes(8))
  );
}

console.log(isValid([1, 3, 7]));

function whoIsPaying(name) {
  return name.length <= 2 ? [name] : [name, name.slice(0, 2)];
}

console.log(whoIsPaying("Melissa"));

function getRealFloor(n) {
  return n <= 0 ? n : n >= 1 && n <= 12 ? n - 1 : n - 2;
}

console.log(getRealFloor(14));

function isLockNessMonster(s) {
  return (
    s.includes("tree fiddy") || s.includes("3.50") || s.includes("three fifty")
  );
}

function correctTail(bod, tail) {
  return tail === bod[bod.length - 1];
}

var hotpo = function (n) {
  if (n == 0 || n === 1) return 0;

  let step = 0;

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
      step++;
    } else {
      n = 3 * n + 1;
      step++;
    }
  }

  return step;
};

const cannonsReady = (gunners) => {
  return Object.values(gunners).every((item) => item === "aye")
    ? "Fire!"
    : "Shiver me timbers!";
};
