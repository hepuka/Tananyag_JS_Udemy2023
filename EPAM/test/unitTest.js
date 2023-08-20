function addNumbers(a, b) {
  return arguments.length !== 2 ? 1 : a + b;
}

function addStrings(a, b) {
  return `${a} ${b}`;
}

function add(a, b) {
  if (typeof a === "string" && typeof b === "string") {
    return addStrings(a, b);
  } else {
    return addNumbers(a, b);
  }
}

module.exports = add;

console.log(add(2));
