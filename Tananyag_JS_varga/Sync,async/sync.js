/*
szinkron: egy függvényen belül sorban futnak le az utasítások

- végrehatódik a console.lo első kiírása
- majd meghívódik a második függvény
- majd kiíródik a console.log harmadik

 */

const elso = () => {
  console.log("első");
  masodik();
  console.log("harmadik");
};

const masodik = () => {
  console.log("második");
};

elso();
