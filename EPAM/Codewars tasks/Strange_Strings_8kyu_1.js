function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

console.log(formatMoney(3.1));

function sumMix(x) {
  return x.reduce((acc, curr) => acc + Number(curr), 0);
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
    .map((item) => item.charAt(0).toUpperCase())
    .join(".");
}

console.log(abbrevName("P Favuzzi"));

function defineSuit(card) {
  const signs = {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  };

  return signs[card.charAt(card.length - 1)];
}

console.log(defineSuit("Q♠"));

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler("john McClane"));

function stringy(size) {
  return "".padStart(size, "10");
}

console.log(stringy(3));

function fakeBin(x) {
  return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
}

console.log(fakeBin("45385593107843568"));

function check(a, x) {
  return a.includes(x);
}

console.log(check([66, 101], 66));

function noSpace(x) {
  return x.replace(/ /g, "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

console.log(removeChar("country"));

var ArrowFunc = function (arr) {
  return arr.map((item) => String.fromCharCode(item)).join("");
};

console.log(ArrowFunc([84, 101, 115, 116]));

function uefaEuro2016(teams, scores) {
  let win = scores[0] > scores[1] ? teams[0] : teams[1];

  return scores[0] === scores[1]
    ? `At match ${teams[0]}  - ${teams[1]}, teams played draw.`
    : `At match ${teams[0]} - ${teams[1]}, ${win} won!`;
}

console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 3]));

function correctPolishLetters(string) {
  const char = ["ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż"];
  const letter = ["a", "c", "e", "l", "n", "o", "s", "z", "z"];

  return string
    .split("")
    .map((item) => (char.includes(item) ? letter[char.indexOf(item)] : item))
    .join("");
}

console.log(correctPolishLetters("Jędrzej Błądziński"));

function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

console.log(shortcut("codewars"));

function well(x) {
  let num = x.filter((item) => item === "good").length;

  return num === 1 || num === 2
    ? "Publish!"
    : num > 2
    ? "I smell a series!"
    : "Fail!";
}

console.log(well(["good", "bad", "bad", "bad", "bad"]));

function feast(beast, dish) {
  return (
    beast.charAt(0) === dish.charAt(0) &&
    beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)
  );
}

console.log(feast("great blue heron", "garlic naan"));
