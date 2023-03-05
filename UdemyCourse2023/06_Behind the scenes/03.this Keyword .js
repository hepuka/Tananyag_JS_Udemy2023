///////////////////////////////////////
// The this Keyword in Practice
console.log('-------------The this Keyword in Practice---------------------');
/*
- egy speciális változó, dinamikusan működik az adott környezetben történő használatától függően
- egy objektumhoz adott metódus hívásakor a metódust tartalmazó objektumnévre mutat
pl.: const Jonas{......} objektumban használt this a Jonas névre mutat
- egyszerű függvényhíváskor a window objektumra mutat. strict módban undefined-et ad vissza
- nyílfüggvényeknek nincs saját this kulcsszava,
- eseménykezelőknél a this arra a DOM elemre mutat amelyhez az eseménykezelő rendelve van
*/

//globális scope-ban a window objektumra mutat
console.log(this);

//regulásris függvény esetében
const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //strict módban undefined, anélkül itt is a window objektumra mutat
};
calcAge2(1991);

//nyílfüggvény esetében
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //window objektumra mutat
};

calcAgeArrow(1980);

//objektum esetében

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); //teljes jonas objektumra mutat
    console.log(2037 - this.year); //itt a jonas objektum year tulajdonságára mutat
  },
};
jonas.calcAge();

//this arra az objektumra mutat amelyet a metódus hív
const matilda = {
  year: 2017,
};

//hozzáaadtuk a Jonas calcAge metódusát a matilda objektumhoz.
//lényegében egy objektum metódusát adtuk, hozzá egy másik objektumhoz
//ezt hívják method borrowing-nak
matilda.calcAge = jonas.calcAge;

matilda.calcAge(); //this arra az objektumra mutat amelyet a metódus hív. ez nem matilda metódusa, hanem Jonas-é

//hibát ad
const f = jonas.calcAge;
//f(); ez egy reguláris függvényhívás és nem egy objektumhoz hozzáaadott metódus. Nincs neki tulajdonosa
