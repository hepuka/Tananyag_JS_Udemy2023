function twoSort(s) {
  const arr = s.sort();

  return arr[0].split("").join("***");
}

console.log(twoSort(["bitcoin", "take", "over"]));

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
  ]),
);



