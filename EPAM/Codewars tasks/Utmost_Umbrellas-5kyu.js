function replaceZero(a) {
  a = a.join``.split`0`.map((item) => item.length);
  let b = a.map((item, index) => item + a[index + 1]).slice(0, -1);
  return a
    .slice(0, b.lastIndexOf(Math.max(...b)) + 1)
    .reduce((a, b) => a + b + 1, -1);
}

//console.log(replaceZero([0, 1, 0, 0, 0, 0]));

function sequenceSum(begin, end, step) {
  let sum = 0;

  for (let i = begin; step > 0 ? i <= end : i >= end; i += step) {
    sum += i;
  }

  return sum;
}

//console.log(sequenceSum(-1, -5, -3));

let findMissing = function (list) {
  let step = (list[list.length - 1] - list[0]) / list.length;

  for (let i = 0; i < list.length; i++) {
    if (list[i] + step !== list[i + 1]) {
      return list[i] + step;
    }
  }
};

var findMissing2 = function (list) {
  // let step = (list[list.length - 1] - list[0]) / list.length;
  let step = [];

  for (let i = 0; i < list.length - 1; i++) {
    step.push(list[i + 1] - list[i]);
  }

  let min = Math.min(...step);

  for (let i = 0; i < list.length; i++) {
    if (list[i] + min !== list[i + 1]) {
      return list[i] + min;
    }
  }
};

console.log(findMissing2([1, 3, 4]));

function cutTheRopes(a) {
  let res = [];
  let arr = [];
  let minValue = 0;

  for (let i = 0; i < a.length; i++) {
    res[i] = a.filter(Boolean).length;

    minValue = Math.min(...a.filter(Boolean));

    for (let j = 0; j < a.length; j++) {
      if (a[j] !== 0) {
        arr.push((a[j] -= minValue));
      }
    }
  }

  return res.filter((item) => item !== 0);
}

//console.log(cutTheRopes([3, 3, 2, 9, 7]));

function toCamelCase(str) {
  return str
    .split(/-|_/g)
    .map((item, index) =>
      index === 0 ? item : item.charAt(0).toUpperCase().concat(item.slice(1))
    )
    .join("");
}

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));

function isMerge(s, part1, part2) {
  const part11 = part1.split("");
  const part22 = part2.split("");
  const ss = s.split("");

  let res = [];

  ss.map((item) =>
    part11.includes(item)
      ? res.push(part11.shift())
      : part22.includes(item)
      ? res.push(part22.shift())
      : null
  );

  return s.length !== part1.length + part2.length && s !== part1 + part2
    ? false
    : res.join("") === ss.join("");
}

//console.log(isMerge("codewars", "code", "wasr"));

function humanReadable(seconds) {
  let totalmin = Math.floor(seconds / 60);

  let sec = seconds % 60;
  let hours = Math.floor(totalmin / 60);
  let min = totalmin % 60;
  return `${String(hours).padStart(2, "0")}:${String(min).padStart(
    2,
    "0"
  )}:${String(sec).padStart(2, "0")}`;
}

// console.log(humanReadable(86399));

function josephus(items, k) {
  const res = [];
  let counter = 1;
  let index = 0;

  while (items.length > 0) {
    index %= items.length;

    if (counter === k) {
      // res.push(items.splice(index, 1)[0]);
      res.push(items[index]);
      items.splice(index, 1);
      counter = 0;
      index--;
    } else {
      index++;
      counter++;
    }
  }

  return res;
}

// console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));

//[3,6,2,7,5,1,4]

function primeFactors(n) {
  const factors = [];
  let divisor = 2;
  let obj = {};
  let str = "";

  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor);

      if (!obj[divisor]) {
        obj[divisor] = 1;
      } else {
        obj[divisor] += 1;
      }

      n = n / divisor;
    } else {
      divisor++;
    }
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) {
      str += `(${key})`;
    } else {
      str += `(${key}**${value})`;
    }
  }

  return str;
}

// console.log(primeFactors(7775460));

//"(2**2)(3**3)(5)(7)(11**2)(17)"

function loop_size(node) {}
