function getUsernameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUsernameFromEmail("kunzoltan7707@icloud.com"));

//////////////////////////////////////////////////////////////////////////////

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("zolika"));

let animals = ["shark", "salmon", "whale", "bear", "lizard", "tiger"];

console.log(animals.slice(2, 5));
let animalString = animals.join(); //stringé konvertálja a tömböt, az elemek közé vesszőt tesz
animalString = animals.join("*"); //stringé konvertálja a tömböt, de az egyes elemek közé * tesz
console.log(animalString);
