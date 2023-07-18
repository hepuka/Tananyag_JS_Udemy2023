function descendingOrder(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a) //.reverse()
      .join("")
  );
}
console.log(descendingOrder(1234506789));

function solution(nums) {
  return nums === null ? [] : nums.sort((a, b) => a - b);
}
console.log(solution(null));

function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}
//const inAscOrder = arr => arr.join('') === arr.sort((a, b) => a - b).join('');
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));

function mergeArrays(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2].sort((a, b) => a - b)));
}
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

//páratlan számokat nem rendezi
function sortArray(array) {
  //kiszedi a páratlan számokat
  const odd = array.filter((x) => x % 2 !== 0).sort((a, b) => a - b);
  console.log(odd);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

function sumArray(array) {
  if (array === null || typeof array === "undefined" || array.length < 2)
    return 0;

  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([6, 2, 1, 8, 10]));

function order(words) {
  return words === ""
    ? ""
    : words
        .split(" ")
        .sort((a, b) => {
          return a.match(/\d/) - b.match(/\d/);
        })
        .join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));

function sortArray(array) {
  let odd = array.filter((item) => item % 2 !== 0).sort((a, b) => a - b);
  console.log(odd);

  return array.map((item) => (item % 2 !== 0 ? odd.shift() : item));
}

console.log(sortArray([5, 8, 6, 3, 4]));

function descendingOrder(n) {
  return +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  //  return parseInt(String(n).split("").sort().reverse().join(""));
}
console.log(descendingOrder(1021));
