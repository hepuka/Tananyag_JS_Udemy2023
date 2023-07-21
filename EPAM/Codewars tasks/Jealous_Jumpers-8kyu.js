function generateRange(min, max, step) {
  for (var result = []; min <= max; min += step) result.push(min);
  return result;
}

console.log(generateRange(1, 10, 3));

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

function feast(beast, dish) {
  return (
    beast.charAt(0) === dish.charAt(0) &&
    beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)
  );
}

console.log(feast("great blue heron", "garlic naan"));

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

console.log(removeChar("country"));

function correct(string) {
  return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
}

console.log(correct("L0ND0N"));

function noSpace(x) {
  return x.replace(/ /g, "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

function replace(s) {
  return s.replace(/[aeiouAEIOU]/g, "!");
}

console.log(replace("Hi"));

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

console.log(digitize(35231));

function sumMul(n, m) {
  if (m <= 0) return "INVALID";
  let sum = 0;
  for (let i = n; i < m; i += n) sum += i;
  return sum;
}

console.log(sumMul(3, 13));

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

console.log(hexToDec("FF"));
