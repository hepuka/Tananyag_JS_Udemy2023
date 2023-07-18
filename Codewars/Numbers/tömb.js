// sum of two arrays
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur, 0);
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

//www.codewars.com/kata/53dc54212259ed3d4f00071c
https: function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum([1, 5.2, 4, 0, -1]));

//www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array.reduce((acc, curr) => acc + curr) / array.length;
  }
}
console.log(findAverage([1, 2, 3, 4]));

function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints >
    classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length
  );
}
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));

function maps(x) {
  return x.map((item) => item * 2);
}
console.log(maps([1, 2, 3]));

function stairsIn20(s) {
  return (
    20 *
    s.reduce(
      (acc, curr) => acc + curr.reduce((acc2, curr2) => acc2 + curr2, 0),
      0
    )
  );
}

const reverseSeq = (n) => {
  let arr = [];

  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }

  return arr;
};
console.log(reverseSeq(5));

function generateRange(min, max, step) {
  let result = [];

  for (i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
}
console.log(generateRange(2, 20, 5));

var number = function (busStops) {
  return (
    busStops.reduce((acc, curr) => acc + curr[0], 0) -
    busStops.reduce((acc, curr) => acc + curr[1], 0)
  );

  //const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)
  //const number = busStops => busStops.reduce((people, stop) => people + stop[0] - stop[1], 0)
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);

function isValid(formula) {
  if (formula.includes(1) && formula.includes(2)) {
    return false;
  } else if (formula.includes(3) && formula.includes(4)) {
    return false;
  } else if (formula.includes(5) && formula.includes(6)) {
    return true;
  } else if (formula.includes(5)) {
    if (formula.includes(6)) {
      return true;
    } else {
      return false;
    }
  } else if (formula.includes(6)) {
    if (formula.includes(5)) {
      return true;
    } else {
      return false;
    }
  } else if (formula.includes(7) || formula.includes(8)) {
    return true;
  } else {
    return false;
  }
}

/* isValid = (a) =>
  !(a.includes(1) && a.includes(2)) &&
  !(a.includes(3) && a.includes(4)) &&
  a.includes(5) === a.includes(6) &&
  (a.includes(7) || a.includes(8)); */

console.log(isValid([7, 1, 2, 3]));
/* 
material1 and material2 cannot be selected at the same time
material3 and material4 cannot be selected at the same time
material5 and material6 must be selected at the same time
material7 or  material8 must be selected(at least one, or both) 
*/

function queueTime(customers, n) {
  let tills = Array(n).fill(0);

  customers.forEach((customer) => {
    let nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customer;
  });

  return Math.max(...tills);
}
console.log(queueTime([1, 2, 3, 4, 5], 100));

//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/javascript
let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];

function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) return false;

  return (
    array1
      .map((x) => x * x)
      .sort()
      .toString() === array2.sort().toString()
  );
}
console.log(comp(a1, a2));

//https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
function findSmallestInt(args) {
  //ES6 előtti verzió
  // return Math.min.apply(Math, args);

  //ES6-os destruktúrálással
  return Math.min(...args);
}
console.log(findSmallestInt([1, 2, 3, 4]));

//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
var number = function (array) {
  let line = 1;

  return array.map((item) => `${line++}: ${item}`);
};
console.log(number(["a", "b", "c"]));

function countBy(x, n) {
  let z = [];

  for (let i = 0; i < n; i++) {
    z.push((i + 1) * x);
  }
  return z;
}

// const countBy = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);

console.log(countBy(2, 5));

function findMultiples(integer, limit) {
  let arr = [];
  let temp = integer;

  while (temp <= limit) {
    arr.push(temp);

    temp += integer;
  }

  return arr;

  //  for (let i = int; i <= limit; i += int) result.push(i);
}
console.log(findMultiples(4, 16));

function multiTable(number) {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(`${i} * ${number} = ${i * number}`);
  }

  return arr.join("\n").trim("\n");
}

console.log(multiTable(5));

function checkExam(array1, array2) {
  let result = array2.reduce((score, answer, i) => {
    if (answer == array1[i]) return (score += 4);
    else if (answer == 0) return (score += 0);
    else return score - 1;
  }, 0);
  return result < 0 ? 0 : result;
}
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));

function checkExam(array1, array2) {
  let score = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      score += 4;
    } else if (array2[i] === "") {
      score += 0;
    } else {
      score -= 1;
    }
  }

  if (score < 0) return 0;

  return score;
}
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));

function inAscOrder(arr) {
  let orderedarray = arr.slice("").sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== orderedarray[i]) {
      return false;
    }
  }
  return true;
}
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));
