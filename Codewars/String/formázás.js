function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}
console.log(formatMoney(3.1));

function abbrevName(name) {
  const array = name.split(" ");

  const first = array[0].charAt(0);
  const second = array[1].charAt(0);

  return `${first}.${second}`;

  //return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}
console.log(abbrevName("P Favuzzi"));

function doubleChar(str) {
  return str
    .split("")
    .map((item) => item.repeat(2))
    .join("");
}

// function doubleChar(str) {
//   return str
//     .split("")
//     .map((item) => item.repeat(2))
//     .join("");
//   /*   let word = "";
//     for (var i = 0; i < str.length; i++) {
//       word += str[i] + str[i];
//     }
//     return word; */
// }
console.log(doubleChar("String"));

//www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
https: function points(games) {
  let total = 0;
  games.map((game) => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });

  return total;
}
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeWord("word"));

function whoIsPaying(name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name];
}
console.log(whoIsPaying("Mexico"));

function wave(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;

    if (i === 0) {
      result.push(str[0].toUpperCase() + str.slice(1));
    } else if (i === 1) {
      result.push(str.slice(0, 1) + str[1].toUpperCase() + str.slice(2));
    } else {
      result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }

  return result;
}
console.log(wave("two words"));

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
  let result = [];

  for (let i = 0; i < text.length; i++) {
    result.push(letter.indexOf(text[i].toLowerCase()) + 1);
  }

  /*   return result
    .filter((item) => item !== 0)
    .join(" ")
    .toString();

  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return text
    .toLowerCase()
    .split("")
    .filter((letter) => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    })
    .map((letter) => alphabet.indexOf(letter) + 1)
    .join(" "); */
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
function printerError(s) {
  let err = 0;

  s.split("").map((item) => {
    if (item > "m") {
      err++;
    }
  });

  return err + "/" + s.length;
}
// const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(s));

//www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str) {
  return str.split("").reverse().join("");
}
console.log(solution("world"));

function removeExclamationMarks(s) {
  // return s
  //   .split("")
  //   .filter((item) => item !== "!")
  //   .join("");

  return s.replace(/!/g, "");
}
console.log(
  removeExclamationMarks("SLtZcsdDhX!ZmpYzNmhml yDZKeiKeyr!npIyCpUGDD")
);

// return masked string
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}

console.log(maskify("11111"));

function isIsogram(str) {
  return new Set(str.toLowerCase()).size == str.length;
}

console.log(isIsogram("alma"));
