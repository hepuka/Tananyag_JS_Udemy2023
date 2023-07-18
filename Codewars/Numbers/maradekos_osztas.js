function remainder(n, m) {
  return n > m ? n % m : m % n;
}
console.log(remainder(17, 5));

function divisibleBy(numbers, divisor) {
  return numbers.filter((item) => item % divisor === 0);
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

function isDivideBy(number, a, b) {
  return number % a == 0 && number % b == 0;
}
console.log(isDivideBy(36, 6, 4));

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
console.log(simpleMultiplication(2));
console.log(simpleMultiplication(5));

function multipleOfIndex(array) {
  return array.filter((item, index) => item % index === 0);
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));

function divisibleBy(numbers, divisor) {
  return numbers.filter((item) => item % divisor === 0);
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));
