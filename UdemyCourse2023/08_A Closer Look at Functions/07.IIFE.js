console.log('------Immediately Invoked Function Expressions (IIFE)--------');

const runOnce = function () {
  console.log('This will never run again');
};
//a kód egy adott pontján mindig meg kell hívni a függvényt ha alkalmazni szeretnénk
runOnce();

// IIFE - a név nélküli függvénydeklarációt követően azonnal meghívódik ,csak egyszer kell meghívni a függvénydeklaráció után rögtön ();
//a teljes függvényt ()-be kell tenni, majd azonnal meghívni ();
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

//ugyanez a függvény nyílfüggvényként
(() => console.log('This arrowfunction will also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);//hibát dob mert a const és a let blokkszintű változó, kívülről nem látszik

//vat függvényszintű innen is látható
console.log(notPrivate);
