import arfolyam from "./arfolyamok.json" assert { type: "json" };

let array = [];

arfolyam.map((item) => {
  array.push({
    currency: item[0],
    date: item[1].split(" ")[0],
    time: item[1].split(" ")[1],
    results: item.slice(3, 10),
  });
});

console.log(array.slice(0, 5));
