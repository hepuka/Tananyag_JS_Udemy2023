/*
 a js fájlra mindig a body végén kell hivatkozni, mert ha a head -ben hivakozunk
 akkor probléma lehet, mert azokat a HTML elemek még nem töltődtek be
 amelyekre hivatkozunk
*/

import { posts } from "../Function/post.js";

let korte = 20;
let alma = 30;
let szilva = "szilva";
let igaz = true;
let hamis = false;
let maradek_eletek_szama = 2;

console.log(typeof szilva);
console.log(typeof korte);

//You can use the global JavaScript function isNaN() to find out if a value is a not a number:
//let x = 100 / "Apple";
//isNaN(x);

///////////////////////////////////////////////////////////////////////////////////////////////
//ELÁGAZTATÁS
//////////////////////////////////////////////////////////////////////////////////////////////
//if else

if (korte > alma) {
  console.log("A körte nagyobb mint az alma");
} else {
  console.log("A körte kisebb mint az alma");
}
//rövid forma
let eredmeny =
  korte > alma ? "a körte nagyobb mint az alma" : "A körte kisebb mint az alma";
console.log(eredmeny);

//https://www.youtube.com/watch?v=ib8MHSMwtYg&list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT&index=9
let testScore = 60;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";

console.log(`My test grade is a ${myGrade}.`);

//switch case
switch (maradek_eletek_szama) {
  case 1:
    console.log("van még 3 életed");
    break;
  case 2:
    console.log("van még 2 életed");
    break;
  case 3:
    console.log("van még 1 életed");
    break;
  case 4:
    console.log("nincs több életed");
    break;
}

//https://www.youtube.com/watch?v=3q7sk03ehOs&list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT&index=8
let playerOne = "scrissors";
let computer = "rock";

switch (playerOne) {
  case computer:
    console.log("Tie game!");
    break;

  case "rock":
    if (computer === "paper") {
      console.log("computer wins");
    } else {
      console.log("playerOne wins");
    }
    break;

  case "paper":
    if (computer === "scrissors") {
      console.log("computer wins");
    } else {
      console.log("playerOne wins");
    }
    break;

  default:
    if (computer === "rock") {
      console.log("computer wins");
    } else {
      console.log("playerOne wins");
    }
}

//switch 2.verzió

switch (true) {
  case alma > korte:
    console.log("Alma nagyobb mint a körte");
    break;
  case alma < korte:
    console.log("Alma kisebb mint a körte");
    break;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//CIKLUSOK
//////////////////////////////////////////////////////////////////////////////////////////////

console.log("//////////////CIKLUSOK/////////////");

let tomb = ["Ond", 38, "vezer", true, 1977];

// FORi
for (let i = 0; i < tomb.length; i++) {
  console.log(tomb[i]);
}

for (let i = 0; i < posts.length; i++) {
  console.log(posts[i].title);
}

//ES5
///a sorban következő index mellett a tömb elemeit is visszaadja
tomb.forEach(function (value, index) {
  console.log(index + ": " + value);
});

posts.forEach(function (value) {
  console.log(value.title);
});

//ES6
tomb.forEach((value) => console.log(value));

//akkor lépünk ki a ciklusból, ha találunk egy logikai értéket a tömbben
//break utasítás

for (let i = 0; i < tomb.length; i++) {
  if (typeof tomb[i] === "boolean") {
    break;
  }

  console.log(tomb[i]);
}

//continue utasítás - csak a string típusú értékeket írja ki. Ha a tömb i-edik eleme nem string akkor továbblép a következő ciklusra
for (let i = 0; i < tomb.length; i++) {
  if (typeof tomb[i] !== "string") {
    continue;
  }

  console.log(tomb[i]);
}

// for, for in, for of

for (let elem of posts) {
  console.log(elem.title);
}
