console.log('----------Creating and Filling Arrays-----------');

arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty arrays + fill method
//7 üres elemet rak a tömbbe, erre az üres tömbre nem hívható meg semmi
const x = new Array(7);
console.log(x);

//1-es számokat rak a 3.indextől kezdve az 5-ig. a többi üres elem marad
x.fill(1, 3, 5);
console.log(x);

//1-esekkel tölti fel a tömböt
x.fill(1);
console.log(x);

//az eredeti tömböt módosítja
//23-as számot rak a 2.indextől kezdve a 6-ig, a többi értéket változatlanul hagyja
arr.fill(23, 2, 6);
console.log(arr);

// Array.from
//7 elemű tömböt hozok létre amit 1-esekkel töltök fel
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

//7 elemű tömböt tölt fel 1-7-ig
//azért _,i mert a (curr,i)-ből nekünk csak az í kell
// az _ egy throwaway paraméter
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

/* 
- queryselectorAll egy NodeList-el tér vissza ami egy tömb(nem valós tömb) és tartalmazza az összes kiválasztott elemet  
- mivel ez a NodeList nem egy valós tömb, ebből egy valósat kell konvertálni, hogy tudjuk rá alkalmazni a metódusokat. Array.from() metódussal tudjuk ezt megtenni

*/

//ha a teljes összegre kattintok akkor visszaadja annak movement tömbe rakott értékeit
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    //movements__value osztályú elemeket választom
    //2. argumentumnak megadhatok egy callback függvényt is
    document.querySelectorAll('.movements__value'),

    //ezen a elemeken
    item => Number(item.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];

  console.log(movementsUI2);
});
