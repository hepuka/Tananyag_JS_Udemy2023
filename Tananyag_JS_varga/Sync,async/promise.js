
//VARGA JS videó


/*
PROMISE: async események

- az egymásbaágyazott callback függvények (callback-hell) kiváltására jött létre

- a promise az egy olyan objektum amely azt figyeli, hogy egy bizonyos esemény bekövettkezett-e vagy sem
- meghatározza, hogy mi történjen azután ha az esemény bekövetkezett

- adatokat ad vissza a szerverről a háttérben, és a promise
megígéri, hogy megkapom az adatokat ha az esemény bekövetkezik

állapotai:

- pending, esemény előtti állapot
- resolved, az esemény utáni állapot
- fulfilled, ha a promise sikeresen végetért(az adat a rendelkezésre áll)
- rejected, bármilyen hiba esetén

*/

//promise létrehozása
//const receptID = [676, 102, 34, 1089, 321];

const azonositokLekerdezese = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve([676, 102, 34, 1089, 321]);

    //rejected("Hiba a lekérdezés során!");
  }, 2000);
});

const receptLekeres = (receptID) => {
  return new Promise((resolve, rejected) => {
    setTimeout(
      () => {
        const recept = {
          cim: "Bableves",
          katehoria: "Levesek",
        };

        resolve(`${receptID}: ${recept.cim}`);
      },
      1500,
      receptID
    );
  });
};

const kategoriaLekeres = (kategoria) => {
  return new Promise((resolve, rejected) => {
    setTimeout(
      (kat) => {
        const levesek = [
          {
            cim: "Gulyásleves",
            kategoria: "Levesek",
          },

          {
            cim: "Húsleves",
            kategoria: "Levesek",
          },
        ];

        resolve(levesek);
      },
      1500,
      kategoria
    );
  });
};

azonositokLekerdezese
  .then((data) => {
    console.log(data);
    return receptLekeres(data[2]);
  })
  .then((recept) => {
    console.log(recept);

    return kategoriaLekeres(recept.kategoria);
  })

  .then((kategoria) => {
    console.log(kategoria);
  })
  .catch((err) => {
    console.log(err);
  });
