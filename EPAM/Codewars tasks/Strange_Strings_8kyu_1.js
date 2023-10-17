function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

console.log(formatMoney(3.1));

function sumMix(x) {
  // return x.reduce((acc, curr) => acc + Number(curr), 0);
  return x.reduce((acc, curr) => acc + +curr, 0);
}

console.log(sumMix([9, 3, "7", "3"]));

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);

function abbrevName(name) {
  return name
    .split(" ")
    .map((item) => item[0].toUpperCase())
    .join(".");

  // return name
  //   .split(" ")
  //   .map((item) => item.substr(0, 1))
  //   .join(".");
}

console.log(abbrevName("P Favuzzi"));

function defineSuit(card) {
  const obj = {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  };

  const char = card.slice(-1);
  return obj[char];
  // return obj[card.charAt(card.length - 1)];
  // return obj[card[card.length - 1]];
}

console.log(defineSuit("Q♠"));

function nameShuffler(str) {
  // return str.split(" ").reverse().join(" ");

  const [item1, item2] = str.split(" ");

  return `${item2} ${item1}`;
}

console.log(nameShuffler("john McClane"));

function stringy(size) {
  // return "10".repeat(size / 2).concat(size % 2 !== 0 ? "1" : "");
  // return "10".repeat(size).slice(0, size);
  return "".padStart(size, "10");
}

console.log(stringy(3));

function fakeBin(x) {
  // return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");

  //replace 2. paramétere lehet callback függvény
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
}

console.log(fakeBin("45385593107843568"));

function check(a, x) {
  //elég ennyi ha az ellenőrzés eredményének true-nak vagy false-nak kell lenni
  return a.includes(x);
}

console.log(check([66, 101], 66));

function noSpace(x) {
  // return x.replace(/\s/g, "");
  // return x.replaceAll(" ", "");
  // return x.split(" ").join("");
  return x.replace(/ /g, "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

function removeChar(str) {
  // return str.slice(1, str.length - 1);
  return str.slice(1, -1);
}

console.log(removeChar("country"));

var ArrowFunc = function (arr) {
  // convert a number to an ascii Character
  // return arr.map((item) => String.fromCharCode(item)).join("");

  return String.fromCharCode(...arr);
};

console.log(ArrowFunc([84, 101, 115, 116]));

function uefaEuro2016(teams, scores) {
  // let win = scores[0] > scores[1] ? teams[0] : teams[1];

  // return scores[0] === scores[1]
  //   ? `At match ${teams[0]}  - ${teams[1]}, teams played draw.`
  //   : `At match ${teams[0]} - ${teams[1]}, ${win} won!`;

  return `At match ${teams[0]} - ${teams[1]}, ${
    scores[0] != scores[1]
      ? `${scores[0] > scores[1] ? teams[0] : teams[1]} won!`
      : `teams played draw.`
  }`;
}

console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 3]));

function correctPolishLetters(string) {
  const char = ["ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż"];
  const letter = ["a", "c", "e", "l", "n", "o", "s", "z", "z"];
  const obj = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  // return string
  //   .split("")
  //   .map((item) => (char.includes(item) ? letter[char.indexOf(item)] : item))
  //   .join("");

  return [...string].map((item) => obj[item] || item).join("");
}

console.log(correctPolishLetters("Jędrzej Błądziński"));

let repeatIt = function (str, n) {
  return typeof str !== "string" ? "Not a string" : str.repeat(n);
};

console.log(repeatIt("Hi", 2));

function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

console.log(shortcut("codewars"));

function well(x) {
  const res = x.reduce((acc, curr) => acc + (curr == "good"), 0);
  return res > 2 ? "I smell a series!" : res > 0 ? "Publish!" : "Fail!";
}

console.log(well(["good", "bad", "bad", "bad", "bad"]));

function feast(beast, dish) {
  return dish[0] === beast[0] && dish.slice(-1) === beast.slice(-1);

  // return (
  //   beast.charAt(0) === dish.charAt(0) &&
  //   beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)
  // );
}

console.log(feast("great blue heron", "garlic naan"));
