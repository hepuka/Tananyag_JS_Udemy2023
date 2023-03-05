console.log('-----------Working With Strings - Part 3-----------');

//SPLIT and JOIN
//a megadott karakternél szétvégja a stringet és a részstringet egy tömb elemeként egy tömbe rakja
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

//split-et destruktúráláshoz is használhatjuk
//a visszakapott tömb első elem lesz a firstName és a második lesz a lastName
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

//a JOIN-al tudom a tömben lévő elemeket konkatenálni egymáshoz a megadott karakterrel. itt egy szóközt adtam meg
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//a kapott név első betűit nagybetűssé teszi
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = []; //új tömb az új névnek

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' ')); //az új tömbben lévő elemeket szóközökkel konkatenáljuk
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';

//a megadott string elé és mögé tesz karaktereket. padStart és End első paramétere, hogy a megadott karakterrel mennyi legyen a string hossza

//padStart miatt összesen a hozzáadott + jellel együtt 20 karakter lenne a string, de hozzá van fűzve egy padEnd is, így a string végleges hossza 30 lesz
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

//
const maskCreditCard = function (number) {
  //itt a kapott számot elsőnek stringé alakítjuk
  //a + jel stringé alakítja a számot
  const str = number + '';

  //a kárytakód utolsó 4 karakterét adja csak vissza
  const last = str.slice(-4);

  //ez a 4 karakter elé rak annyi csillagot hogy a végeleges string hossza az az eredeti string hossza legyen
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';

//5-ször egymás után rakja a megadott stringet
console.log(message2.repeat(5));

//a megadott számú repülőgépet rak a string után
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
