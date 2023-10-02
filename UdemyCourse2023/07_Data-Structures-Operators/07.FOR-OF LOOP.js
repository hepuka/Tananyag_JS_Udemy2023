console.log('--------FOR-OF LOOP-----------');

const menu = ['alma', 'körte', 'szilva', 'dió'];
//for-of-al bejárom az menu3 tömböt és visszakapom az elemeket, az elemek indexeit nem
for (const item of menu) console.log(item);

//ha az elemet és annak indexét is szeretném megkapni:
//item[0] kell az index eléréséhez és item[1] magának az elemhez, mivel alapból egy tömböt kapunk vissza
//eredetileg egyes itemek így néznek ki [0, "alma", ...], destruktúrálva const [index,item] of menu.entries()
for (const item of menu.entries()) {
  console.log(item);
  //ez a régi verzió
  console.log(`${item[0]} item is ${item[1]}`);
}

//FOR-OF LOOP KIÍRATÁSA DESTRUKTÚRÁLVA
//destruktúrálva a egyes iterációkat: ES6
for (const [index, element] of menu.entries())
  console.log(`${index} item is ${element}`);

//for of loop használata egy objektum kulcsainak, property-ének kiíratására
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
