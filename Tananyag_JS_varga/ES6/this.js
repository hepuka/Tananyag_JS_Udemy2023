/*

 - this kulcsszó, mely az aktuális objektumra hivatkozik.
 - Elhelyezhetjük: JavaScript programunk function részében vagy objektumok eseménykezelőiben.


- a nyílfüggvényen belül használt this kulcsszó annak a fv-nek a this kulcsszava amin belül a nyílfv-t létrehoztuk

- a nyílfv az őt tartalmazó külső függvény által használt this kulcsót használja

*/

//a zöld dobozhoz írt eseménykezelő
//egy objektumot hozunk létre. A tömböt []-el az objektumot {}-el hozzuk létre

//ES5
var dobozES5 = {
  szin: "zöld",
  pozicio: 1,
  kattintsRam: function () {
    var obj = this;

    document.querySelector(".zold").addEventListener("click", function () {
      var szoveg =
        "ES5 szöveg: En vagyok az " +
        obj.pozicio +
        ". dobot, és a színem " +
        obj.szin +
        ".";
      alert(szoveg);
      /*a metódusban használt this szó nem az objektumra mutat, így undefined-et ad vissza, mivel a szin
     és a pozicio nem definiált a window-ban, ezért definiálni kell itt. var obj = this; a this_t el kell
     tárolni egy változóban, amely tartalmazni fogja a dobozEs5 nevezetű objektumra mutató hivatkozást.
     */
    });
  },
};

dobozES5.kattintsRam();

//ES6
/*Itt már nem kell külön definiálni egy változóban a this-t, ES6-ban a saját objektumra mutat */
const dobozES6 = {
  szin: "zöld",
  pozicio: 1,
  kattintsRam: function () {
    document.querySelector(".zold").addEventListener("click", () => {
      let szoveg =
        "ES6 szöveg: En vagyok az " +
        this.pozicio +
        ". dobot, és a színem " +
        this.szin +
        ".";
      alert(szoveg);
    });
  },
};

dobozES6.kattintsRam();

//2.verzió, amikor a kattintsrám függvény is nyílfüggvény
//nem működik, megint undefined, mert a this kulcsó ez esetben sem a dobozES62-re mutat, hanem annak környezetéhez
//tartozó this-re ami a globális window objektum
const dobozES62 = {
  szin: "zöld",
  pozicio: 1,
  kattintsRam: () => {
    document.querySelector(".zold").addEventListener("click", () => {
      let szoveg =
        "ES62 szöveg: En vagyok az " +
        this.pozicio +
        ". dobot, és a színem " +
        this.szin +
        ".";
      alert(szoveg);
    });
  },
};

//dobozES62.kattintsRam();

//helyette

function Szemely(nev) {
  this.nev = nev;
}

var haverok = ["Béla", "Jóska", "Ödön"];

//ES5
/*egy konstruktor függvényt hozunk, amivel létrehozunk a személy objektumot
hozzáadunk egy metódust a Személy konstruktor prototype tulajdonságához, akkor azok az objektumok amelyeket
a személy konstruktorral huzunk létre, megöröklik ezt a metódust.*/

//barataimES5 a metódus neve, ami megkap egy haverok tömböt, és visszaadja a tömb tartalmát

Szemely.prototype.barataimES5 = function (haverok) {
  var obj = this; //itt is egy változóba kell rakni a this-t

  var tomb = haverok.map(function (elem) {
    return obj.nev + " barátja " + elem + "."; //this.nev helyett obj.nev használjuk
  });

  console.log(tomb);
};

//létrehozunk egy személyt, akihez a haverok tartoznak
//az új személy objektumhoz hozzáadtuk a barataimES5 metódust

new Szemely("Géza").barataimES5(haverok);

//ES6
Szemely.prototype.barataimES6 = function (haverok) {
  let tomb = haverok.map((elem) => {
    return `${this.nev} barátja ${elem}`;
  });

  console.log(tomb);
};

new Szemely("Béla").barataimES6(haverok);
