console.log("--- Breaking and Continuing ---");
console.log("--- ONLY STRINGS ---"); //csak a string típusúakat szedi ki és írja ki
const strings = [];
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue; //ha nem string típusú akkor menjen tovább és ne rakja bele a tömbbe

  strings.push(jonasArray[i]);
}

console.log(strings);

console.log("--- BREAK WITH NUMBER ---");
const elementsUntilNumber = [];
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break; //ha a következő elem number típusú akkor megszakítja a ciklus futását

  elementsUntilNumber.push(jonasArray[i]);
}

console.log(elementsUntilNumber);
