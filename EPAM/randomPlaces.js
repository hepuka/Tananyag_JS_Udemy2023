const places = [
  "ibolya",
  "füredi söröző",
  "árkád",
  "vitaminsarok",
  "korzó",
  "arizóna",
  "funcity",
  "svejk",
  "mob",
  "nagyállomás resti",
  "krajcáros kortyoló",
  "station",
  "róna",
  "seven",
  "szóda",
  "mátyás pince",
  "after presszó",
  "fácán",
  "say hello",
  "pikoló",
  "hidas",
  "roncs",
  "valhalla",
  "zöldfa vendéglő",
  "zugivó",
  "prémium söröző",
  "beer and wurst",
  "miami",
  "the wall",
  "susmus",
  "laguna presszó",
  "aranypart söröző",
];

let randomNumber = Math.floor(Math.random() * places.length);
console.log(randomNumber);
const randomPlace = places[randomNumber];
console.log(randomPlace);
