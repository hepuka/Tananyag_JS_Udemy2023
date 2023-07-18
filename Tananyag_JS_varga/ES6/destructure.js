//destruktúrálás tömbökkel

//objektumból vagy tömbből szeretnénk kiszedni adatokat, és azt egy változóban tároljuk

//létrehozom egy tömbben a változókat, majd azokat egy másik tömbből töltöm fel
const [nev, kor] = ["Ödön", 40];
console.log(nev);
console.log(kor);

//destruktúrálás objektumokkal
const obj = {
  nev2: "Béla",
  kor2: 20,
};

//itt ugyanazokat kell használni ami az objektumban vannak
//itt {}-be kell tenni a változókat, majd az objektum nevét kell megadni
const { nev2, kor2 } = obj;

console.log(nev2, kor2);
console.log(nev2);
console.log(kor2);

//ha nem akarjuk ugyanazokat a változóneveket használni amik a tulajdonságnevek az obj-ban akkor:
const { nev2: x, kor2: y } = obj;

console.log(x, y);
console.log(x);
console.log(y);

//függvényből több érték visszaadása

function korEsNyugdij(szuletesiEv) {
  let nyugdijkorhatar = 65;
  const kor = new Date().getFullYear() - szuletesiEv;

  /*a visszaadandó értékeket egy tömbe helyezem el.
  a fv ezzel a tömbbel tér vissza, amiben benne van a szmély kora és az, 
  hogy hány éve van még a nyugdíjig*/
  return [kor, nyugdijkorhatar - kor];
}
console.log(korEsNyugdij(1977)); //a visszaadott értékek a tömbben

//itt a visszaadott értékeket külön-külön változóba helyezem el a dekstruktúrálással
const [kor3, nyugdij] = korEsNyugdij(1977);

console.log(kor3);
console.log(nyugdij);
