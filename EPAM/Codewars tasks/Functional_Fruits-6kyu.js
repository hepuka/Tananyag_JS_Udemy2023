function count(string) {
  let obj = {};

  if (count.length === 0) return {};

  [...string].map((item) => (!obj[item] ? (obj[item] = 1) : (obj[item] += 1)));

  return obj;
}

console.log(count("aba"));

function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));

function sortArray(array) {
  let odds = array.filter((item) => item % 2 !== 0).sort((a, b) => a - b);

  return array.map((item) => (item % 2 !== 0 ? odds.shift() : item));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));

function wave(str) {
  return str
    .toLowerCase()
    .split("")
    .map((item, index) =>
      item !== " "
        ? str.slice(0, index).toLowerCase() +
          item.toUpperCase() +
          str.slice(index + 1).toLowerCase()
        : ""
    )
    .filter((item) => item !== "");
}

console.log(wave("Two words"));

function alphabetPosition(text) {
  const letter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return text
    .split("")
    .map((item) => letter.indexOf(item.toLowerCase()) + 1)
    .filter((item) => item !== 0)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
