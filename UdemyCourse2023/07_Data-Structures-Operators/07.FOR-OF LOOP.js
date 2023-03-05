console.log('--------FOR-OF LOOP-----------');

//for-of-al bejárom az menu3 tömböt és visszakapom az elemeket, az elemek indexeit nem
for (const item of menu3) console.log(item);

//ha az elemet és annak indexét is szeretném megkapni:
//item[0] kell az index eléréséhez és item[1] magának az elemhez, mivel alapból egy tömböt kapunk vissza
for (const item of menu3.entries())
  console.log(`${item[0]} item is ${item[1]}`); //ez a régi verzió

console.log('------FOR-OF LOOP KIÍRATÁSA DESTRUKTÚRÁLVA--------');

//destruktúrálva a egyes iterációkat: ES6
for (const [index, element] of menu3.entries())
  console.log(`${index} item is ${element}`);

//for of loop használata egy objektum kulcsainak, property-ének kiíratására
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
