//create an error in the code - RangeError
let color = "yellow";

switch (color) {
  case "yellow":
    message = "Yes, it is yellow color";
    break;
  default:
    throw new RangeError("It is not a valid color");
}

//TRY CATCH FINALLY

//ha hiba van akkor elkapja és a catch ág fut le, majd a finally és trycatch-en kívüli rész
//ha nincs hiba akkor lefut a try ág, majd a finally és a trycatch-en kívüli rész

//catch ág egy user friendly hibaüzenetet ad, nem a beépített error üzenetet
try {
  let whiteRabbit = "\u{0001F407}";

  throw "I can't do this!";

  console.log(whiteRabbit);
} catch {
  console.log("ERROR! - Trinity removes the bug!");
} finally {
  console.log("Got the Red pill!");
}

console.log("Welcome to the real world!");
