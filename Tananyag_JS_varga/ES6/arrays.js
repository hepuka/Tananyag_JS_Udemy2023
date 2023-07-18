import { posts } from "../Function/post.js";

const dobozok = document.querySelectorAll(".doboz"); //nodelistát ad vissza, amit tömbbé kell alakítani

console.log(dobozok);

//ES5
var dobozokTombES5 = Array.prototype.slice.call(dobozok);
console.log(dobozokTombES5);

//az összes doboz beszinezése pirosra
dobozokTombES5.forEach(function (aktualisElem) {
  aktualisElem.style.backgroundColor = "orangered";
});

//ES6
//ES6-ban ez alakítja át a nodelistát tömbbé
const dobozokTombES6 = Array.from(dobozok);

dobozokTombES6.forEach((aktualisElem) => {
  aktualisElem.style.backgroundColor = "dodgerblue";
});

//CONTINUE: az aktuális ciklus lépést kihagyja, és ugrik a következőre
//BREAK: kihagyja a soron következő lépést és ki is lép a teljes ciklusból

//doboz kek-nél továbbhalad,nem változtatja meg a tartalmat

//ES5
for (var i = 0; i < dobozokTombES5.length; i++) {
  if (dobozokTombES5[i].className === "doboz kek") {
    continue;
  }

  dobozokTombES5[i].textContent = "Kék lettem";
}

//ES6
//ES6 bevezette a for of ciklust
for (const aktualis of dobozokTombES6) {
  /*   if (aktualis.className == "doboz kek") {
    continue;
  } */

  //vagy

  if (aktualis.className.includes("doboz kek")) {
    continue;
  }

  aktualis.textContent = "Kék includes lettem";
}

//TÖMBBEN EGY ELEM MEGKERESÉSE

//ES5
var korok = [24, 10, 20, 17, 14];
let movies = ["Pókember", "A kör", "A baba"];

var felnottek = korok.map(function (aktualis) {
  //map metódus egy kifejezés eredményét adja vissza
  //ez esetben true-t vagy false-ot ad vissza
  return aktualis >= 18;
});

console.log(felnottek);

//index of metódus kell ha egy elem indexét akarjuk meghatározni

//ES5
console.log(felnottek.indexOf(true)); //csak az első true érték indexét adja vissza (0) a 2.-est már nem

//ES6
//findindex egy elem indexét adja vissza
console.log(korok.findIndex((aktualis) => aktualis >= 18));

//find metódus nme az elem indexét adja vissza hanem az értékét
console.log(korok.find((aktualis) => aktualis >= 18));

const selectMovie = movies.find((movie) => {
  return movie.includes("ember");
});
console.log(selectMovie);

const selectMovie2 = movies.find((movie) => {
  return movie.indexOf("ember");
});

console.log(selectMovie2);

const ids = posts.find((item) => {
  return item.id === 7;
});

const postsTitle = posts.find((item) => {
  return item.title.includes("quasi");
});

console.log(ids);
console.log(postsTitle);
