//Function Declaration (FD)

getYear(1977); //a függvény deklarálása előtt is meghívható, hoisting lép érvénybe

function getYear(yearOfBirth) {
  console.log(new Date().getFullYear() - yearOfBirth);
}

//Function Expression (FE)

// data(1977); nem hívható meg a deklarálás előtt
const data = function (getYear) {
  console.log(new Date().getFullYear() - getYear);
};

data(1977);

//Closure
//an inner function has access to variables in its surrounding block of code,
// even after the surroundings are gone.

function outer(year, name) {
  const currentYear = new Date().getFullYear();

  function inner() {
    const b = name;
    return `${b}: ${currentYear - year}`;
  }

  console.log(inner());
}

outer(1977, "Zoltán");

//ARROW FUNCTION & THIS
const obj = {
  foo: function () {
    console.log("foo", this);
  },
  bar: function () {
    console.log("bar", this);
  },
};

obj.bar();
obj.foo();

//COMPOSITION EXAMPLE
function doSomeThing(func) {
  func();
}

function logData(someVariable) {
  console.log(someVariable);
}

function sayHelloWorld() {
  const message = "Hello World";

  logData(message);
}

doSomeThing(sayHelloWorld);

//HIHER ORDER FUNCTIONS
// Callback function, passed as a parameter in the higher order function
function callbackFunction() {
  console.log("I am  a callback function");
}

// higher order function

// Callback function, ami argimentumként kerül átadásra a HOF-nak
function callbackFunction() {
  console.log("I am  a callback function pass as an argument to the HOF");
}

// HOF ami megkapja a callback függvényt
function higherOrderFunction(func) {
  func();
}

higherOrderFunction(callbackFunction);

//2.példa
const radius = [1, 2, 3];

// logic to clculate area
const area = function (radius) {
  return Math.PI * radius * radius;
};

// logic to calculate diameter
const diameter = function (radius) {
  return 2 * radius;
};

const circumeference = function (radius) {
  return 2 * Math.PI * radius;
};

// a reusable function to calculate area, diameter, etc
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumeference));

const users = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firstName: "Jane", lastName: "Doe", age: 30 },
  { firstName: "Jack", lastName: "Doe", age: 35 },
  { firstName: "Jill", lastName: "Doe", age: 40 },
  { firstName: "Joe", lastName: "Doe", age: 45 },
];

// Find the users with age greater than 30 . destructured age,or item => item.age
const output = users.filter(({ age }) => age > 30);
console.log(output);

//reduce()

//tömb eleminek összege
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);

//max érték megkeresése
const maxValue = numbers.reduce((max, curr) => {
  if (curr > max) max = curr;
  return max;
});
console.log(maxValue);

//Több objektum egyetlen objektumba való egyesítése:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

//ezzel csak egy tömbe rakja az összes objektumot
const mergedObjtoArray = [obj1, obj2, obj3];
console.log(mergedObjtoArray);

//ezzel eggyesíti az objektumokat
const mergedObj = [obj1, obj2, obj3].reduce((acc, curr) => {
  return { ...acc, ...curr };
}, {});
console.log(mergedObj);

//objektumok szelektálása egy tömbbe
//termékek csoportosítása a márkanév szerint
const shoppingCart = [
  { name: "Apple", price: 1.99, quantity: 3 },
  { name: "Apple", price: 1.99, quantity: 3 },
  { name: "Xiomi", price: 2.99, quantity: 2 },
  { name: "Samsung", price: 3.99, quantity: 1 },
  { name: "Tesla", price: 3.99, quantity: 1 },
  { name: "Tesla", price: 4.99, quantity: 4 },
  { name: "Nokia", price: 4.99, quantity: 4 },
];

const products = shoppingCart.reduce((productGroup, product) => {
  if (productGroup[product.name] == null) {
    productGroup[product.name] = [];
  }
  productGroup[product.name].push(product);

  return productGroup;
}, {});

console.log(products);

//RECURSION
function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

console.log(factorial(5));

//MEMOIZATION USAGE EXAMPLE
//FIBONNACCI sorozat rekurzívan, de nagy számnál stack overflow keletkezik
const fib = (n) => {
  if (n <= 1) return 1;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(5));

//FIBONACCI sorozat memoization-al

const fibMemo = (n, memo) => {
  memo = memo || {};

  if (memo[n]) return memo[n];

  if (n <= 1) return 1;

  return (memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo));
};

console.log(fibMemo(150));
