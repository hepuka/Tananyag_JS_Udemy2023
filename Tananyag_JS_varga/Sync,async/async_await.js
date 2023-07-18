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

async function getReceptek() {
  const azonositok = await azonositokLekerdezese;

  console.log(azonositok);

  const recept = await receptLekeres(azonositok[1]);
  console.log(recept);

  const tovabbiak = await kategoriaLekeres(recept.kategoria);

  console.log(tovabbiak);

  return recept;
}

getReceptek().then((eredmeny) => {
  console.log(`${eredmeny} a legjobb leves`);
});
