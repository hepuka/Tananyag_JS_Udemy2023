//egy objektumhoz tartozó metódust hívhatunk meg egy másik metódussal - VargaJS videó
//https://www.youtube.com/watch?v=V0zysk71hsE&ab_channel=L%C3%A1szl%C3%B3Varga
//https://www.youtube.com/watch?v=rjtWekdN7yI&ab_channel=L%C3%A1szl%C3%B3Varga

let odon = {
  nev: "Ödön",
  kor: 45,
  foglalkozas: "csillagász",
  udvozles: function (stilus, napszak) {
    if (stilus === "hivatalos") {
      console.log(`Üdvözlöm, jó ${napszak} kívánok! ${this.nev} vagyok. `);
    } else if (stilus === "barati") {
      console.log(`Hello, jó ${napszak}!`);
    }
  },
};

odon.udvozles("hivatalos", "reggelt");
odon.udvozles("barati", "estét");

let bela = {
  nev: "Béla",
  kor: 65,
  foglalkozas: "portás",
};

let evek = [1955, 1991, 1964, 2001, 2011];

//ez a firstClass függvény és ez kapja meg második paraméterként egy másik függvényt
function tombMuvelet(tomb, callback) {
  let ujtomb = [];

  for (let i = 0; i < tomb.length; i++) {
    ujtomb.push(callback(tomb[i]));
  }

  return ujtomb;
}

function korSzamitas(elem) {
  return 2022 - elem;
}

function felnott(korhatar, elem) {
  return elem >= korhatar ? "felnőtt" : "gyermek";
}

let korok = tombMuvelet(evek, korSzamitas);

//////////////////////////////CALL////////////////////////////////////////////

//call metódussal tudom a bélára is meghívni az ödönnél létrehozott függvényt
//call metódusnak azt az objektumot kell átadni, amire szeretnénk azt futtatni
odon.udvozles.call(bela, "hivatalos", "estét");

//////////////////////////////APPLY////////////////////////////////////////////

//az első paramétren kívül, (amelyben megadjuk, hogy melyik objektumra akarom meghívni a metódust)
//az összes többi paramétert tömbként kell megadni
odon.udvozles.apply(bela, ["barati", "estét"]);

///////////////////////////////BIND///////////////////////////////////////////
/*A bind nem hívja meg azonnal a metódust, helyette a metódus másolatát hozza létre melyet
el tudunk tárolni egy változóba, és később amikor kell megtudjuk hívni*/

let odonbarati = odon.udvozles.bind(odon, "barati");
odonbarati("reggelt");

let belahivatalos = odon.udvozles.bind(bela, "hivatalos", "hajnalt");
//itt már nem kell megadni a napszakot mert azz már megadtuk, csak meg kell hívni
belahivatalos();

let felnottkorJapanban = tombMuvelet(korok, felnott.bind(this, 20));
console.log(korok);
console.log(felnottkorJapanban);

///////////////////////////////CALL//////////////////////////////////////////

//a version
let obj = { num: 2 };

function add(a) {
  return this.num + a;
}

console.log(add.call(obj, 3));

//b version
let obj1 = {
  num: 2,
  addfunction: function add(a) {
    return this.num + a;
  },
  addtombfunction: function add(a, b) {
    return this.num + a + b;
  },

  addbindfunction: function add(a, b) {
    return this.num + a + b;
  },
};

let obj2 = { num: 4 };

console.log(obj1.addfunction(obj2.num));

//c version
let obj3 = {
  num: 20,
  addfunction: function add(a) {
    return this.num + a;
  },
};

//obj1-ban deklarált fv-t hívom meg az obj3 és az obj4-re
let obj4 = { num: 4 };
let obj5 = [20, 20];

console.log(obj1.addfunction.call(obj3, obj4.num));

//////////////////////////////////////////////////APPLY////////////////////////////////

//apply-al egyszerre több számot is megadhatunk, tömb argumentumot fogad el
console.log(obj1.addtombfunction.apply(obj3, obj5));

////////////////////////////////////////////////BIND////////////////////////////////////

//

const func = obj1.addbindfunction.bind(obj1, 3, 6);

console.log(func());
