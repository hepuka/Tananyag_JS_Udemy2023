function diamond(n) {
  let firstHalf = [];

  if (n >= 3 && n % 2 !== 0) {
    for (let i = 0; i < (n - 1) / 2; i++) {
      firstHalf.push(
        " ".repeat((n - 1) / 2 - i) + "*".repeat(i * 2 + 1) + "\n"
      );
    }

    console.log(firstHalf);
    return [...firstHalf, "*".repeat(n) + "\n", ...firstHalf.reverse()].join(
      ""
    );
  }
  return null;
}

console.log(diamond(5));

// function chained(functions) {
//   return function inner(a) {
//     for (var b = 0; b < functions.length; b++) {
//       a = functions[b](a);
//     }
//     return a;
//   };
// }

function f1(x) {
  return x * 2;
}
function f2(x) {
  return x + 2;
}
function f3(x) {
  return Math.pow(x, 2);
}

// console.log(chained(f1, f2, f3)(4));

function bestMatch(ALAHLYGoals, zamalekGoals) {
  const goals = ALAHLYGoals.map((_, index) =>
    Math.abs(ALAHLYGoals[index] - zamalekGoals[index])
  );

  const filteredArray = goals.map((item, index) =>
    item === Math.min(...goals)
      ? Math.max(ALAHLYGoals[index], zamalekGoals[index])
      : 0
  );

  return filteredArray.indexOf(Math.max(...filteredArray));
}

console.log(
  bestMatch(
    [5, 12, 7, 20, 15, 9, 12, 10, 12, 13, 7, 16, 11, 12, 14],
    [1, 6, 3, 10, 10, 0, 10, 2, 5, 7, 4, 9, 5, 5, 6]
  )
);

function ArrayComprehension(options) {
  if (!options?.generator || Array.from(options.generator).length === 0)
    return [];

  let result = [];

  const array = Array.from(options.generator)
    .join("")
    .split(/[,.]/)
    .filter((item) => parseInt(item))
    .map(Number);

  if (Object.values(options.generator).includes(".")) {
    if (array.length > 3) return [];

    if (array.length === 2) {
      let start = array[0];
      let end = array[array.length - 1];

      if (end >= start) {
        for (let i = start; i <= end; i++) {
          result.push(i);
        }
      } else {
        return [];
      }
    }

    if (array.length === 3) {
      result.push(array[0]);
      let start = array[0];
      let second = array[1];
      let end = array[array.length - 1];
      let posstep = second - start;
      let negstep = start - second;

      if (second === end) return [start, second];

      if (posstep > 0 && end > second) {
        for (let i = second; i <= end; i += posstep) {
          result.push(i);
        }
      }

      if (posstep < 0 && end < second) {
        for (let i = second; i >= end; i -= negstep) {
          result.push(i);
        }
      }
    }

    return result;
  }

  return array;
}

console.log(ArrayComprehension({}));
