// function replaceZero(arr) {
//   let array = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       array.push(i);
//     }
//   }
//
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
//
//
//
//
//   if (array.length === 1) {
//     return array[0];
//   }
//   return array;
// }
//
// // console.log(replaceZero([0, 1, 1, 1]));
// console.log(replaceZero([1, 1, 1, 0, 1, 1, 0, 1, 1, 1]));

function replaceZero(a) {
  // let array = [];
  // let sum = 0;
  //
  // for (const n of arr) {
  //   if (n) {
  //     if (!sum) array.push(sum);
  //     sum++;
  //   } else {
  //     array.push(sum);
  //     sum = 0;
  //   }
  // }
  // array.push(sum);
  // array.shift();
  //
  // let maxIndex = 0;
  //
  // for (let i = 0; i < array.length; i++)
  //   if (!array[i])
  //     maxIndex =
  //       SumNeighbours(i, array) >= SumNeighbours(maxIndex, array)
  //         ? i
  //         : maxIndex;
  //
  // let output = 0;
  // for (let i = 0; i < maxIndex; i++) output += array[i] === 0 ? 1 : array[i];
  //
  // return output;
  a = a.join``.split`0`.map((x) => x.length);
  console.log(a);

  let b = a.map((x, i, a) => x + a[i + 1]).slice(0, -1);
  console.log(b);

  return a
    .slice(0, b.lastIndexOf(Math.max(...b)) + 1)
    .reduce((a, b) => a + b + 1, -1);
}

// function SumNeighbours(i, arr) {
//   return (
//     (arr[i - 1] === undefined ? 0 : arr[i - 1]) +
//     (arr[i + 1] === undefined ? 0 : arr[i + 1])
//   );
// }

console.log(replaceZero([1, 1, 1, 0, 1, 1, 0, 1, 1, 1]));

function sequenceSum(begin, end, step) {
  let sum = 0;

  for (let i = begin; step > 0 ? i <= end : i >= end; i += step) {
    sum += i;
  }

  return sum;
}

console.log(sequenceSum(-1, -5, -3));

let findMissing = function (list) {
  let step = (list[list.length - 1] - list[0]) / list.length;

  for (let i = 0; i < list.length; i++) {
    if (list[i] + step !== list[i + 1]) {
      return list[i] + step;
    }
  }
};

console.log(findMissing([1, 3, 4]));

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

console.log(cutTheRopes([3, 3, 2, 9, 7]));

function toCamelCase(str) {
  return str
    .split(/-|_/g)
    .map((item, index) =>
      index === 0 ? item : item.charAt(0).toUpperCase().concat(item.slice(1)),
    )
    .join("");
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
