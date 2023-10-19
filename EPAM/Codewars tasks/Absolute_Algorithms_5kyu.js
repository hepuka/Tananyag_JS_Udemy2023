function longest(str) {
  let result = str[0];
  let tmpString = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) >= str.charCodeAt(i - 1)) {
      tmpString += str[i];

      if (i === str.length - 1 && tmpString.length > result.length) {
        result = tmpString;
      }
    } else {
      if (tmpString.length > result.length) {
        result = tmpString;
      }

      tmpString = str[i];
    }
  }

  return result;
}
console.log(longest("asdfaaaabbbbcttavvfffffdf"));
console.log(longest("nab"));

function string_evaluation(string, condition) {
  let obj = {};
  let result = [];

  [...string].map((item) => (!obj[item] ? (obj[item] = 1) : (obj[item] += 1)));

  for (let item of [...condition]) {
    let firstop = item[0];
    let secop = item.slice(-1);
    let op = item.slice(1, -1);

    result.push(eval(`${obj[firstop] || firstop}${op}${obj[secop] || secop}`));
  }
  return result;
}

console.log(
  string_evaluation("abb", [
    "a>b",
    "b==a",
    "b<=a",
    "b>a",
    "b!=b",
    "a==1",
    "b==1",
  ])
);

function Xbonacci(signature, n) {
  let res = [...signature];
  let reslength = res.length;

  while (reslength < n) {
    let sum = res.slice(-signature.length).reduce((acc, curr) => acc + curr, 0);

    res.push(sum);

    reslength++;
  }

  return res.slice(0, n);
}

console.log(Xbonacci([0, 1], 10));

function rot13(message) {
  const original = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";

  return message.replace(/[a-z]/gi, (item) => cipher[original.indexOf(item)]);
}

console.log(rot13("ABCD"));

function sumDigPow(a, b) {
  let result = [];

  for (let i = a; i <= b; i++) {
    let ilength = String(i).length;
    let sum = 0;

    for (let j = 1; j <= ilength; j++) {
      let numItem = String(i)[j - 1];

      sum += numItem ** j;
    }

    if (sum === i) result.push(i);
  }

  return result;
}

console.log(sumDigPow(1, 100));
