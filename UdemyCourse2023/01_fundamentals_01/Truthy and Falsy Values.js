// Truthy and Falsy Values
// HAMISNAK, false-nak MINŐSÜLŐ ÉRTÉKEK
// undefined, null, 0, '', NaN,

console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));

console.log(Boolean("Jonas"));
console.log(Boolean({}));

let money = 1;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
