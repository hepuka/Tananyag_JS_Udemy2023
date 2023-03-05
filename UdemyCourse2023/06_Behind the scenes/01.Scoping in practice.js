'use strict';
/*
- scope chain - a szülő elemek felé (a kódban felfele lévő) látja a változókat, de a gyerekfelé nem
- a js az adott blokkon vagy függvényen belül keresi a változót, ha nem talál akkor egyel feljebb a szülőscope-ban keresi

*/

function calcAge(birthYear) {
  const age = 2022 - birthYear; //age változó a külső fv teljes területén elérhető//
  console.log(age);

  //tudok hivatkozni, firstname globális
  console.log(firstName);

  function printAge() {
    let output = `${firstName} , you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //itt létrehoztunk egy új változót ugyanazon a néven, mint a szülő részben van (globális rész)
      const firstName = 'Steven';

      //itt viszont viszont csak megváltoztattuk a szülőben deklarált változó értékét
      output = 'New output!!';

      //itt a firstname Steven lesz Jonas helyett, mert elsőnek az adott scope-ban keresi a változót
      //ha nem találja itt akor megy feljebb a szülőre és ott globális változóként már a Jonas-t írja ki
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
      console.log(output);

      function add(a, b) {
        return a + b;
      }

      console.log(add(2, 3));
    }

    //console.log(str); itt már nem tudok hivatkozni, str const(blokkszintű). var lenne, akkor tudnék
    //console.log(add(2, 3)); itt már nem tudok rá hivatkozni, mert az add függvény scope-ja az if blokk, csak ezen belüllátható. itt a függvény blokk szintű
    console.log(output); //new output a kimenet, mert a szülőben lévő output-ot megváltoztattuk a gyerekben (a belső if-ben)
  }

  //console.log(str); itt már nem tudok rá hivatkozni
  //console.log(output); itt már nem tudok rá hivatkozni

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1977);

//console.log(age); itt már nem tudok az age-re hivatkozni
//printAge(); itt már nem tudok az age-re hivatkozni
