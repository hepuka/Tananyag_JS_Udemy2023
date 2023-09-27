function func() {}

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

console.log(typeof 0);
console.log(typeof "");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof func);
console.log(typeof Rectangle);
console.log(typeof {});
console.log(typeof []);
console.log(typeof Promise);
console.log(typeof Symbol("a"));
console.log(typeof BigInt("1"));
