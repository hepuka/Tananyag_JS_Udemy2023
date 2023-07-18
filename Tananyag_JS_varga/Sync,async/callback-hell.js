/*

callback jelenti az egymásbaágyazott callback-eknek a folyamatos láncolatát

*/

function receptLekerdez() {
  //settimeout modellezi egy nagy adatbázisból való lekérdezés idejét
  //2 mp után adja vissza recept azonosítókat

  setTimeout(() => {
    const receptID = [676, 102, 34, 1089, 321];
    console.log(receptID); //2mp után írja ki a tömb elemeit

    //1,5 mp alatt megkapjuk az 1-es azonosítójú leves adatait
    setTimeout(
      (id) => {
        const recept = {
          cím: "Gulyás leves",
          kategoria: "levesek",
        };

        console.log(
          `id: ${id}, név: ${recept.cím}, kategória: ${recept.kategoria} `
        );

        setTimeout(
          (kategoria) => {
            const levesek = [
              { cim: "Nyírségi gombóvleves", kategoria: "levesek" },

              { cim: "Bableves", kategoria: "levesek" },
            ];

            console.log(levesek);
          },
          1500,
          recept.kategoria
        );
      },
      1500,
      receptID[1] //itt adjuk meg az id-t, amit a callback vár
    );
  }, 2000);
}

receptLekerdez();
