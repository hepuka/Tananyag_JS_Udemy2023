//azonnal meghívásra kerülő függvények

// IIFE (Immediately Invoked Function Expressions)

//azonnal meghívódó név nélküli függvény, ezért kel ()-be rakni az egész függvényt

//a js nem utasításként hanem kifejezésként kezeli
(function (teszt) {
  let pont = Math.random() * 10; // 0-9 közötti szám generálása

  console.log(pont >= 5);
  console.log(teszt);
})("Itt adom át a szöveget a függvénynek");
