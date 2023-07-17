let a = 5;
let b = 7;
let c = a++ + b;
console.log(a, b, c);

console.log(!1 && undefined && "test");
console.log(7 % (4 || !1));

console.log(!!"false" === !!"true");
console.log(true + true);
console.log(0.2 + 0.7 == 0.9);
console.log(3 > 2 > 1);
console.log(null >= 0);
console.log(null > 0);
console.log(true == "true");
console.log(0.2 + 0.6 == 0.8);
console.log(+("165" + "1") + 10);

//controll flow quiz
var a1 = 5;
var test = 5 == a1 ? "Yes" : "No";
console.log(test);

var a2 = false;
console.log(false == `0`);
if (a2 == `0`) {
  console.log(`==`);
}
if (a2 === `0`) {
  console.log(`===`);
}

var bool = new Boolean(false);
console.log(bool);

if (bool) {
  console.log(`Hello`);
} else {
  console.log(`Error`);
}

var a3 = 3;
switch (a3) {
  default:
    a3 += 4;
  case 1:
    a3 += 2;
    break;
  case 2:
    a3 += 3;
    break;
}
console.log(a3);

console.log(null || 2 || undefined);

var x = 3;
{
  var x = 5;
}
console.log(x);
