/*

- a rest paraméter lehetővé teszi, hogy tetszőleges számú paramétert adjunk át egy függvénynek

- a paraméterekből egy tömböt hoz létre amikor átadjuk a fv-nek

- különbség, hogy a spread operátor fv hívásnál használjuk, a rest operátort a fv deklarációban

*/

//ES5
//ha előre nem tudjuk h mennyi lesz a paraméter akkor üres () használunk
function parosVagyParatlanES5() {
  //tömböt kell csinálni a paraméterekből
  var argumentumokTomb = Array.prototype.slice.call(arguments);

  //console.log(arguments);

  /*ha nem akarjuk, hogy az összes argumentumot a tömbbe tegye akkor az argumernts után
  meg kell adni, hogy hányadik elemtől pakolja bele
  
  var argumentumokTomb = Array.prototype.slice.call(arguments,1);*/

  argumentumokTomb.forEach(function (aktualis) {
    if (aktualis % 2 === 0) {
      console.log("páros");
    } else {
      console.log("páratlan");
    }
  });
}

parosVagyParatlanES5(1, 2, 3);

//ES6
//rest paraméter a szamok valtozót rögtön tömbbé alaklítja

//function parosVagyParatlanES6(teszt,...szamok) { //vesszővel elválasztva a teszt paramétert figyelmen kívül hagyja

function parosVagyParatlanES6(...szamok) {
  szamok.forEach((aktualis) => {
    if (aktualis % 2 === 0) {
      console.log("páros");
    } else {
      console.log("páratlan");
    }
  });
}

parosVagyParatlanES6(1, 2, 3);
