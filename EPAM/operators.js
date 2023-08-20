console.log(1 && 0);
console.log(0 && 1);
console.log(NaN && 0);
console.log(NaN && 1);
console.log(1 && false && "0" && true && 0);
console.log(0 || 0 || false || "" || NaN || 2);
console.log(false, NaN, undefined, null, 0, "");
console.log(!false, !NaN, !undefined, !null, !0, !"");
console.log(!!false);

const arr = [1, 2, 3, true, "asdf", "fdhhdf"];
let i = 0;

while (i <= arr.length) {
  if (typeof arr[i] !== "string") {
    i++;
    continue;
  }

  console.log(arr[i]);
  i++;
}

for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(`i=${i}, j=${j}`);
}

arr.forEach((item, index) => {
  if (typeof item === "number") {
    console.log(`${index}.elem: ${item * 2}`);
  } else {
    console.log(`${index}.elem: ${item}`);
  }
});

let randomNumber = 0;
do {
  randomNumber = Math.random().toFixed(2);
  console.log(randomNumber);
} while (randomNumber < 0.5);

function add(a, b) {
  logOut(a + b);
}

function logOut(number) {
  console.log(`The summary of the given numbers are ${number}`);
}

add(2, 3);
