import { posts } from "../Function/post.js";

let numbers = [1, 2, 5, 6, 7, 8, 9, 10];
let words = ["asap", "byop", "rsvp", "diy"];

const doubled = numbers.map((item) => item * 2);

console.log(doubled);

const doubles = numbers.map(function (item) {
  return item * 2;
});

console.log(doubles);

const numDetails = numbers.map(function (n) {
  return {
    values: n,
    IsEven: n % 2 === 0,
  };
});

console.log(numDetails);

const doubles2 = [];

numbers.forEach((item) => {
  doubles2.push(item * 4);
});

//másképpen:
/* for (let num of numbers) {
  doubles2.push(num * 4);
}
 */
console.log(doubles2);

let abbrev = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});

console.log(abbrev);

const title = posts.map(function (post) {
  return post.title;
});

console.log(title);

/////////---------------//////////

//objektum tulajdonságaiba (kulcsaiba) tetszőleges értéket töltünk, ez a map-elés

//készítsünk egy kvízt
const kerdes = new Map(); //létrejött egy üres adatszerkezet

//set a beállító metódus amivel új kulcs-értékpárt hozunk létre
kerdes.set("kerdes", "Mennyi az idő?"); //string-et adunk meg kulcsként, majd a vessző után megadjuk az értékét
kerdes.set(1, "Nem tudom");
kerdes.set(2, "Nincs órám");
kerdes.set(3, "Elmúlt 6");
kerdes.set(4, "Mindjárt 7 óra");
kerdes.set("helyes", 4); //4-es válasz lesz a helyes

kerdes.set(true, "A válaszod helyes!");
kerdes.set(false, "Hibás válasz!");

console.log(kerdes);

//get a lekérdező metódus
console.log(kerdes.get("kerdes"));
console.log(kerdes.size); //map struktúra méretének lekérdezése

//elem törlése a map-ből

/* if (kerdes.has(2)) {  //ha létezik a 2-es kulcs akkor töröljük azt

  kerdes.delete(2);

} */

//kerdes.clear(); //teljes map törlése

//ciklussal végig tudunk menni a map elemein
kerdes.forEach((kulcs, ertek) =>
  console.log(`kulcs: ${kulcs}, érték: ${ertek}`)
);

//visszaadja az összes kulcs-éerték párt a map-ből
for (let [kulcs, ertek] of kerdes.entries()) {
  //kulcs-érték használata a destruktúráláshoz
  //mindenegyes ciklusban kapunk egy kulcsot és értéket

  //csak a válaszokat íratjuk ki, megnézzük, hogy a kulcs az szám-e
  if (typeof kulcs === "number") {
    console.log(`kulcs: ${kulcs}, érték: ${ertek}`);
  }
}

//konzolba kiírja, hogy a megadott szám helyes-e vagy sem
//const jovalasz = parseInt(prompt("Add meg a helyes választ!"));
//console.log(kerdes.get(jovalasz === kerdes.get("helyes")));
