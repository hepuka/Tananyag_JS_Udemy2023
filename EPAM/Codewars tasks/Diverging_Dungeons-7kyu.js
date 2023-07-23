function multipleOfIndex(array) {
  return array.filter((item, index) => item % index === 0 || item === 0);
}

console.log(multipleOfIndex([0, 2, 3, 6, 9]));

function inAscOrder(arr) {
  return [...arr].sort((a, b) => a - b).toString() === arr.toString();
}

console.log(inAscOrder([1, 6, 10, 18]));

function checkExam(array1, array2) {
  let sum = 0;

  array2.map((item, index) =>
    item === array1[index] ? (sum += 4) : item === "" ? (sum += 0) : (sum -= 1),
  );

  if (sum < 0) return 0;

  return sum;
}

console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));

function cookie(x) {
  function cookie(x) {
    return typeof x === "string"
      ? "Who ate the last cookie? It was Zach!"
      : typeof x === "number"
      ? "Who ate the last cookie? It was Monica!"
      : "Who ate the last cookie? It was the dog!";
  }
}

console.log(cookie("Ryan"));
console.log(cookie(26));
console.log(cookie(2.3));
console.log(cookie(true));

function multiTable(number) {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str += `${i} * ${number} = ${i * number}\n`;
  }

  return str;
}

console.log(multiTable(5));

//return price without vat
function excludingVatPrice(price) {
  return price === null ? -1 : Number((price / 1.15).toFixed(2));
}

console.log(excludingVatPrice(230));
