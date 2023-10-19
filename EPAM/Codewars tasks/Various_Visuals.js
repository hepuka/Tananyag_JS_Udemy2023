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
