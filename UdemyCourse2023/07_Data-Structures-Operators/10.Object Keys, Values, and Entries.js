// Looping Objects: Object Keys, Values, and Entries
console.log('-----Looping Objects: Object Keys, Values, and Entries-----');
//PROPERTY NAMES
//itt egy tömbe rakja bele az openingHours tömb property-eiket
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open ${properties.length} days per week. `);

//ha egy string-be nem csak ezt szeretném kiírni, hanem utána csatolva azt is hogy melyiknapokon akkor létre kell, hozni egy string-et (We are open ${properties.length} days per week) ezzel majd egy for of-al bejárni a properties tömböt és a stringhez hozzácsatolni az éppen aktuális iterációt
let openStr = `We are open ${properties.length} days per week: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

//PROPERTY VALUES
//itt egy tömbe kapjuk vissza a három objektumot
const values = Object.values(openingHours);
console.log(values);

// Entire object
//itt egy tömbe kapjuk vissza külön tömbökbe a property-tés egy tömbe az open, close-t
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
//itt külön tömbökbe kapjuk vissza az obejktumokat, ezért destruktúrálni tudjuk azt, kiszedni a kulcsot és a tömben lévő objektumot:
for (const [key, { open, close }] of entries)
  console.log(`On ${key} we open at ${open} and close at ${close}`);

const data = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1977,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
};
const keys = Object.keys(data);
const values2 = Object.values(data);
const entries2 = Object.entries(data);

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(person[key]);
  }
}

for (const [key, value] of Object.entries(person)) {
  console.log(key);
  console.log(value);
}
