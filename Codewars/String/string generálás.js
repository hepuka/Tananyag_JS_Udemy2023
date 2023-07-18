//a string with size 6 should return :'101010'
function stringy(size) {
  return "".padStart(size, 10);
}
console.log(stringy(6));

function uefaEuro2016(teams, scores) {
  //At match Germany - Ukraine, Germany won!;
  //At match Portugal - Iceland, teams played draw.

  if (scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  } else if (scores[0] < scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  } else {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  }
}
console.log(uefaEuro2016(["Germany", "Ukraine"], [0, 2]));

function solution(a, b) {
  return a.length > b.length ? b.concat(a).concat(b) : a.concat(b).concat(a);
}
//("1", "22") --> "1221"
console.log(solution("1", "22"));
console.log(solution("13", "8"));

function addLength(str) {
  return str.split(" ").map((item) => `${item} ${item.length}`);
}
console.log(addLength("you will win"));

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
console.log(greet("peter", "steven"));

function repeatStr(n, s) {
  return s.repeat(n);
}
console.log(repeatStr(5, "#"));

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#"); //utolsó 4 szám látszik csak
}
console.log(maskify("425345298536"));

function cookie(x) {
  var t = typeof x;
  var who = t == "string" ? "Zach" : t == "number" ? "Monica" : "the dog";
  return `Who ate the last cookie? It was ${who}!`;

  /*   if (typeof x == "string") {
      return `Who ate the last cookie? It was Zach!`;
    } else if (typeof x == "number") {
      return `Who ate the last cookie? It was Monica`;
    } else {
      return `Who ate the last cookie? It was the dog`;
    } */
}
console.log(cookie(true));

function tripleTrouble(one, two, three) {
  let result = "";
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}
console.log(tripleTrouble("aa", "bb", "cc"));

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  let rule = { rock: "scissors", paper: "rock", scissors: "paper" };

  //ha p2 megegyezik a p1 értékével
  if (p2 === rule[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
console.log(rps("scissors", "paper"));

function peopleWithAgeDrink(old) {
  return `drink ${
    old < 14 ? "toddy" : old < 18 ? "coke" : old < 21 ? "beer" : "whisky"
  }`;
}

console.log(peopleWithAgeDrink(13));

function accum(s) {
  return s
    .toLowerCase()
    .split("")
    .map((item, index) =>
      item.charAt().toUpperCase().concat(item.repeat(index))
    )
    .join("-");
}

console.log(accum("abcD"));

function whoIsPaying(name) {
  return name.length <= 2 ? [name] : [name, name.slice(0, 2)];
}

console.log(whoIsPaying("Mexico"));

function DNAStrand(dna) {
  return dna
    .replace(/A/g, "t")
    .replace(/T/g, "a")
    .replace(/C/g, "g")
    .replace(/G/g, "c")
    .toUpperCase();
}
console.log(DNAStrand("GTAT"));
