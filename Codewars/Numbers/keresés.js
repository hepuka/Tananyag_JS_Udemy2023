function SafeInteger(n) {
  return Number.isSafeInteger(n) ? true : false;
}

console.log(SafeInteger(9007199254740990));

function check(a, x) {
  return a.includes(x) ? true : false;
}

console.log(check([66, 101], 2));
console.log(["what", "a", "great", "kata"], "kat");

/* function arrayMadness(a, b) {
    let sum1 = 0;
    let sum2 = 0;
  
    return a.map((item) => Math.pow(item, 2)) > b.map((item) => Math.pow(item, 3))
      ? true
      : false;
  } */
function arrayMadness(a, b) {
  return (
    a.reduce((acc, curr) => acc + Math.pow(curr, 2), 0) >
    b.reduce((acc, curr) => acc + Math.pow(curr, 3), 0)
  );
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));
console.log(arrayMadness([5, 6, 7], [4, 5, 6]));
console.log(arrayMadness([4, 5, 6], [3, 4, 5]));

function firstNonConsecutive(arr) {
  let func = arr.find((item, index) => item !== index + arr[0]);

  return Number.isInteger(func) ? func : null;
}

/* function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1];
      }
    }
    return null;
  } */
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 7, 10]));

/* function highAndLow(numbers) {
    let array = numbers.split(" ").map((item) => parseInt(item));
    let min = Math.min.apply(null, array);
    let max = Math.max.apply(null, array);
    return `${min} ${max}`;
  } */
function highAndLow(numbers) {
  numbers = numbers.split(" "); //nem kell új tömb, ugyanazzal a névvel mint a paraméter megcsinálható a split

  return `${Math.max(...numbers)} ${Math.min(...numbers)}`; //string tömböt is átadhatunk a Math függvénynek
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

var findDigit = function (num, nth) {
  if (nth <= 0) return -1;

  let nums = "" + Math.abs(num);

  return nums.slice(nums.length - nth, nums.length - nth + 1) * 1;
};
console.log(findDigit(5673, 4));

function checkExam(array1, array2) {
  let sum = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      sum += 4;
    }

    if (array1[i] !== array2[i] && array2[i] !== "") {
      sum += 4;
    }
  }

  return sum < 0 ? 0 : sum;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));

// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((item) => item === true).length;
  //  return arrayOfSheeps.filter(Boolean).length;
}

console.log(countSheeps(array1));

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  return Math.min(...list);
};
var max = function (list) {
  return Math.max(...list);
};
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));

//https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
function removeSmallest(numbers) {
  let minimumIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((item, index) => index != minimumIndex);
}

console.log(removeSmallest([2, 2, 1, 2, 1]));

//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
function filter_list(l) {
  // return l.filter((item) => typeof item === "number");

  return l.filter(Number.isInteger);
}

console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

const quarterOf = (month) => {
  // return month >= 1 && month <= 3
  //   ? 1
  //   : month >= 4 && month <= 6
  //   ? 2
  //   : month >= 7 && month <= 9
  //   ? 3
  //   : month >= 10 && month <= 12
  //   ? 4
  //   : null;

  return Math.ceil(month / 3);
};
console.log(quarterOf(4));

function stray(numbers) {
  // let arr = numbers.sort();
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == arr[i + 1]) {
  //     i = i + 1;
  //   } else {
  //     return arr[i];
  //   }
  // }
  // for (var i in numbers) {
  //   if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
  //     return numbers[i];
  //   }
  // }
  return numbers.find(
    (num) => numbers.indexOf(num) === numbers.lastIndexOf(num),
  );
}

console.log(stray([1, 1, 1, 1, 1, 2]));

function findShort(s) {
  let temp = s.split(" ").map((item) => item.length);
  return Math.min(...temp);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

var findDigit = function (num, nth) {
  if (nth <= 0) return -1;

  let nums = "" + Math.abs(num);

  return nums.slice(nums.length - nth, nums.length - nth + 1) * 1;
};

console.log(findDigit(5673, 4));

function highAndLow(numbers) {
  let num = numbers.split(" ").map(Number);

  return `${Math.max(...num)} ${Math.min(...num)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

function getSum(a, b) {
  if (a === b) return a;

  let sum = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

console.log(getSum(0, -1));

function firstNonConsecutive(arr) {
  let func = arr.find((item, index) => item !== index + arr[0]);
  return Number.isInteger(func) ? func : null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

function SafeInteger(n) {
  return Number.isSafeInteger(n);
}

console.log(SafeInteger(9007199254740990));
