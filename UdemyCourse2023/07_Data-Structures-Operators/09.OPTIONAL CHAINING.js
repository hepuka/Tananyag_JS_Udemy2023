console.log('--------OPTIONAL CHAINING-----------');
//ES2020-től
//ha egy bizonoys property nem létezik az obejktumban, akkor indefined-ként tér vissza, és nem dob ki hibaüzenetet. (a kód továbbfut rendesen hiba nélkül, csak ennél egy undefined-el tér vissza)

//NULLISH érték null vagy undefined lehet

//optional chaining operátort (?) a nullish oprátorral (??) használjuk együtt

//ebben a formában nem true a kiértékelés, mivel a mon nem létezik így nem is ír ki semmit. az else ág nincs definiálva
//ha csk ezt használnánk  console.log(restaurant.openingHours.mon.open); akkor hibát ír ki, mert a mon nem létezik
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//itt kiírja a fri open idejét mivel ez létezik az objektumban
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

//WIDTH OPTIONAL CHAINING

//ebben az esetben hibaüzenet írna ki
//console.log(restaurant.openingHours.mon.open);

//ebben az esetben már nem dob hibát, undefined-el tér vissza, mivel a mon mint property nem létezik az openingHours objektumban
//itt a ? előtti property-t vizsgálja, ha az létezik, akkor az utána lévő property értéke kerül visszaadásara, ha a mon nem létezik, akkor undefined-el tér vissza (nem dob hibát és nem áll le a kód futása)
console.log(restaurant.openingHours.mon?.open);

//itt a fri létezik így annak az értéke kerül visszaadásra
console.log(restaurant.openingHours.fri?.open);

//MULTIPLE OPTIONAL CHAINING

//itt az openingHours és a mon property-t is ellenőrizzük. azt vizsgáljuk, hogy mindkettő létezik-e
//megvizsgálja, hogy az openingHours létezik-e, igen létezik és tovább megy
//majd megvizsggálja, hogy a mon létezik-e, mivel nem itt azonnal undefined-el tér vissza
console.log(restaurant.openingHours?.mon?.open);

//EXAMPLE
//for-al végigjárom és megvizsgálom,hogy az adott napon az étterem nyitva van-e vagy zárva van
//movel csak a thi, fri, sat van definálva az openingHours-ben így a többi undefined érték lesz
//mivel nem szeretnénk, hogy ilyen sima undefined-el térjen vissza az || (or) ágban definiálunk egy default értéket(closed)
//mivel szombaton 0-tól van nyitva ez esetben is closed lenne az érték attól függetlenül, hogy a property létezik. Azért kapunk closed eredményt ha a || operátort használunk mivel a 0 egy false érték, ezért a ?? (nullish coalescing operator) kell használni
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//METHODS hívásánál is működik az optional chaining
//optional chaining-el tudjuk megvizsgálni, hogy az adott metódus lézezik-e mielőtt meghívjuk azt

//ez esetben a restaurant objektum order metódusát vizsgáljuk, hogy létezik-e. Ha igen akkor tovább megy és meghívja azt a megadott argumentumokkal, ha nem akkor kiírja a megadott szöveget
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//Tömböknél is működik az optional chaining
//ez esetben azt vizsgálja, hogy a tömb üres-e vagy sem
const users = [
  {
    name: 'Jonas',
    email: 'blabla@gmail.com',
  },
];

//ha true a kiértékelés akkor visszaadja a nevet ha nem akkor a megadott szöveget, mivel ez esetben a tömb üres
console.log(users[0]?.name ?? 'Users array empty!');

//ígyy is lehetne, ennek a rövidített változata az optional chaining
console.log(users[0].name ? users[0].name : 'Users array empty!');

//ennek is a rövidített változata az optional chaining
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('User array empty!');
}
