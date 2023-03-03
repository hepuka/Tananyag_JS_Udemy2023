// Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples); //függvényhívások egy másik függvényben
  const orangePieces = cutFruitPieces(oranges);

  return `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
}
console.log(fruitProcessor2(2, 3));
