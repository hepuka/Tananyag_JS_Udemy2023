//logical operator that returns its right-hand side operand
// when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.

const value = undefined ?? 10;
console.log(value);

const foo = null ?? "default string";
console.log(foo);

const baz = 0 ?? 42;
console.log(baz);
