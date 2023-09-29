// Regular Functions vs. Arrow Functions

var firstName2 = 'Mathild';

const jonas2 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    //egy reguláris függvényhívásban a this undefined, nyílfüggvényben működik
    isMillenial();
  },

  //undefined a this kulcsszó miatt, nyílfüggvénynél nincs this. Itt this nélkül kell használni. itt a this window object-re mutat
  //a var-al globálisan deklarált firstname2-t látja, arra használható a this. let és a const-nál nem működik
  //sohase használjunk itt nyílfüggvényt metódusnak, mert akkor a this bug-ot okoz

  // greet: () => console.log(`Hey ${this.firstName2}`),

  //használjunk normál függvényt és a this kulcsszót
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas2.greet();
jonas2.calcAge();

//arguments keyword
const addExpr2 = function (a, b) {
  console.log(arguments); //konzolban láthatóak az argumentumok
  return a + b;
};

addExpr2(2, 5, 8, 6); //megadhatunk több argumentumot is mint amennyit a függvény kér

var addArrow2 = (a, b) => {
  console.log(arguments);
  return a + b;
};

//ddArrow2(2, 5, 8); //itt már hibát ír ki ha többet akarunk megadni
