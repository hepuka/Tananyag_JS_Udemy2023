function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);

  // function basicOp(operation, value1, value2) {
  //   switch (operation) {
  //     case "+":
  //       return value1 + value2;
  //       break;
  //     case "-":
  //       return value1 - value2;
  //       break;
  //     case "*":
  //       return value1 * value2;
  //       break;
  //     case "/":
  //       return value1 / value2;
  //       break;
  //   }
  // }
}

console.log(basicOp("+", 4, 7));

function sumMul(n, m) {
  let sum = 0;

  if (n < 1 || m < 1) {
    return "INVALID";
  } else {
    for (i = n; i < m; i += n) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumMul(2, 9));

// https://www.codewars.com/kata/55d24f55d7dd296eb9000030
let summation = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};
console.log(summation(4));

function getSum(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

/* const GetSum = (a, b) => {
    let min = Math.min(a, b),
      max = Math.max(a, b);
    return ((max - min + 1) * (min + max)) / 2;
  }; */
console.log(getSum(-1, 2));

// https://www.codewars.com/kata/57a429e253ba3381850000fb
function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);

  // return bmi < 18.5
  //   ? "Underweight"
  //   : bmi <= 25
  //   ? "Normal"
  //   : bmi <= 30
  //   ? "Overweight"
  //   : "Obese";

  // switch (true) {
  //   case bmi <= 18.5:
  //     return "Underweight";
  //   case bmi <= 25.0:
  //     return "Normal";
  //   case bmi <= 30.0:
  //     return "Overweight";
  //   case bmi > 30.0:
  //     return "Obese";
  // }
}

console.log(bmi(90, 180));

function past(h, m, s) {
  let hoursinmin = h * (60 * 60);
  let min = m * 60;

  return (result = (hoursinmin + min + s) * 1000);
}

console.log(past(0, 1, 1));

function SeriesSum(n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}

console.log(SeriesSum(3));

function multiTable(number) {
  let result = "";

  for (i = 1; i <= 10; i++) {
    result += `${i} * ${number} = ${i * number}\n`;
  }

  return result.trim("\n"); //eltávolítja az utolsó sortörést
}

console.log(multiTable(5));

function excludingVatPrice(price) {
  let result = price / 1.15;

  return price === null ? -1 : +result.toFixed(2);
}

console.log(excludingVatPrice(123));

function calculateTip(amount, rating) {
  const ratingg = rating.toLowerCase();

  switch (ratingg) {
    case "poor":
      return Math.ceil(amount * 0.05);
      break;
    case "good":
      return Math.ceil(amount * 0.1);
      break;
    case "great":
      return Math.ceil(amount * 0.15);
      break;
    case "excellent":
      return Math.ceil(amount * 0.2);
      break;
    case "terrible":
      return Math.ceil(amount * 0.0);
      break;
    default:
      return "Rating not recognised";
  }

  /*   var tips = {
        terrible: 0,
        poor: 0.05,
        good: 0.1,
        great: 0.15,
        excellent: 0.2,
      };
    
      rating = rating.toLowerCase();
    
      return rating in tips
        ? Math.ceil(amount * tips[rating])
        : "Rating not recognised"; */
}

console.log(calculateTip(26.95, "good"));

function findMultiples(integer, limit) {
  let result = [];

  for (i = integer; i <= limit; i += integer) {
    result.push(i);
  }

  return result;
}

console.log(findMultiples(2, 6));

function differenceInAges(ages) {
  let min = Math.min(...ages);
  let max = Math.max(...ages);

  return [min, max, max - min];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));

function enough(cap, on, wait) {
  return on + wait > cap ? on + wait - cap : 0;
}

console.log(enough(100, 60, 50));

var humanYearsCatYearsDogYears = function (humanYears) {
  let dogyears = 0;
  let catyears = 0;

  if (humanYears === 1) {
    dogyears = 15;
    catyears = 15;
  }
  if (humanYears === 2) {
    dogyears = 24;
    catyears = 24;
  }

  if (humanYears > 2) {
    catyears = 24;
    dogyears = 24;
    for (i = 3; i <= humanYears; i++) {
      catyears += 4;
      dogyears += 5;
    }
  }

  return [humanYears, catyears, dogyears];

  /*   for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
        catYears += 15;
        dogYears += 15;
      } else if (i === 2) {
        catYears += 9;
        dogYears += 9;
      } else {
        catYears += 4;
        dogYears += 5;
      }
    } */
};

// [10,56,64]);
/* 15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that */
console.log(humanYearsCatYearsDogYears(10));

function findDifference(a, b) {
  const arr1 = a[0] * a[1] * a[2];
  const arr2 = b[0] * b[1] * b[2];

  return arr1 > arr2 ? arr1 - arr2 : arr2 - arr1;
}

// return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
console.log(findDifference([3, 2, 5], [1, 4, 4]));

function getRealFloor(n) {
  return n > 13 ? n - 2 : n <= 0 ? n : n - 1;
}

console.log(getRealFloor(1));

var hotpo = function (n) {
  if (n == 0 || n === 1) return 0;
  let arr = [];
  let num = n;
  let mar1 = 0;
  let mar2 = 0;

  while (num != 1) {
    if (num % 2 === 0) {
      mar1 = num / 2;
      arr.push(mar1);
      num = mar1;
    } else {
      mar2 = 3 * num + 1;
      arr.push(mar2);
      num = mar2;
    }
  }

  return arr.length;
};
console.log(hotpo(10));

/* if(number is even) number = number / 2
if(number is odd(páratlan)) number = 3*number + 1 
5 -> 16 -> 8 -> 4 -> 2 -> 1

*/

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e
function maps(x) {
  return x.map((item) => item * 2);
}

console.log(maps([1, 2, 3]));

//www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

console.log(simpleMultiplication(5));

//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
function sumMix(x) {
  return x.map(Number).reduce((acc, curr) => acc + curr);
}

console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));

//https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
function calculateYears(principal, interest, tax, desired) {
  let days = 0;

  while (principal < desired) {
    const paid = principal * interest;

    principal += paid - paid * tax;

    days++;
  }

  return days;
}

console.log(calculateYears(1000, 0.01625, 0.18, 1200));

//https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x) {
  return x.reduce((acc, curr) => acc * curr);
}

console.log(grow([1, 2, 3, 4]));

var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
  //  return Number.isInteger(Math.sqrt(n));
};

console.log(isSquare(-1));

function nbYear(p0, percent, aug, p) {
  let year = 0;

  while (p0 < p) {
    p0 += Math.floor(p0 * (percent / 100) + aug);

    year++;

    console.log(p0);
  }

  return year;
}

console.log(nbYear(1000, 2, 50, 1200));

const binaryArrayToNumber = (arr) => {
  let total = 0;
  arr
    .reverse()
    .map((item, index) => (item === 1 ? (total += Math.pow(2, index)) : 0));

  return total;
};
console.log(binaryArrayToNumber([1, 1, 1, 1]));

function squareSum(numbers) {
  return numbers.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
}

console.log(squareSum([1, 2, 2]));

function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((item) => Math.pow(item, 2))
    .join("");
}

console.log(squareDigits(3212));

function queueTime(customers, n) {
  // let cassa = new Array(n).fill(0);
  // console.log(cassa);
  // for (let t of customers) {
  //   let lowestWaitTime = cassa.indexOf(Math.min(...cassa));

  //   console.log(lowestWaitTime);
  //   cassa[lowestWaitTime] += t;

  //   console.log(cassa);
  // }
  // return Math.max(...cassa);

  let queueArr = Array(n).fill(0);

  customers.forEach((customer) => {
    queueArr[0] += customer;

    queueArr.sort((a, b) => a - b);
  });

  return queueArr[queueArr.length - 1];
}

console.log(queueTime([2, 3, 1, 2], 3));

var hotpo = function (n) {
  if (n === 0 || n === 1) return 0;
  let steps = 0;

  while (n !== 1) {
    n % 2 == 0 ? (n = n / 2) : (n = 3 * n + 1);
    steps++;
  }

  return steps;
};

console.log(hotpo(5));

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1

var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears =
    humanYears === 1
      ? 15
      : humanYears == 2
      ? 24
      : humanYears >= 3
      ? 24 + (humanYears - 2) * 4
      : 0;

  console.log(catYears);

  let dogYears =
    humanYears === 1
      ? 15
      : humanYears == 2
      ? 24
      : humanYears >= 3
      ? 24 + (humanYears - 2) * 5
      : 0;

  return [humanYears, catYears, dogYears];
};
console.log(humanYearsCatYearsDogYears(2));

var number = function (busStops) {
  return (
    busStops.reduce((acc, curr) => acc + curr[0], 0) -
    busStops.reduce((acc, curr) => acc + curr[1], 0)
  );
};
console.log(
  number([
    [3, 0],
    [9, 1],
  ]),
);

function calculateTip(amount, rating) {
  return rating.toLowerCase() === "excellent"
    ? Math.ceil(amount * 0.2)
    : rating.toLowerCase() === "great"
    ? Math.ceil(amount * 0.15)
    : rating.toLowerCase() === "good"
    ? Math.ceil(amount * 0.1)
    : rating.toLowerCase() === "poor"
    ? Math.ceil(amount * 0.05)
    : rating.toLowerCase() === "terrible"
    ? 0
    : "Rating not recognised";
}

console.log(calculateTip(16.15, "good"));

function excludingVatPrice(price) {
  return price === null ? -1 : +(price / 1.15).toFixed(2);
}

console.log(excludingVatPrice(230));

function enough(cap, on, wait) {
  let num = cap - (on + wait);
  return num >= 0 ? 0 : Math.abs(num);
}

console.log(enough(100, 60, 50));

function arrayMadness(a, b) {
    return (
        a.map((item) => item ** 2).reduce((acc, curr) => acc + curr, 0) >
        b.map((item) => item ** 3).reduce((acc, curr) => acc + curr, 0)
    );
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));

function positiveSum(arr) {
    return arr.reduce((acc, curr) => (curr > 0 ? acc + curr : acc + 0), 0);
}

console.log(positiveSum([1, -2, 3, 4, 5]));
