console.log('--------Coding Challenge #4-----------');
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  //a szövegdoboz tartalmát íratom ki a console-ra
  const text = document.querySelector('textarea').value;

  //sortörésnél szétvágom a stringet, és ezek a sorok lesznek atömb egyes elemei
  const rows = text.split('\n');

  for (const [index, row] of rows.entries()) {
    //a kapott sort kisbetűssé teszem, kiszedem a szóközöket majd _-nál szétvágom
    const [first, second] = row.toLowerCase().trim().split('_');

    // a tömb 0.elemét (first) és az 1. elemét(second) egymásmellé teszem, majd a az első elem kezdőbetűjét kicserélem az az első elem nagybetűjére
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    //padEnd-el adom meg, hogy a string teljes hossza 20 karakter legyen. az egyes sorokban lévő stringek hossza egyforma lesz, kiegészítve üres stringekkel.
    //az így elkészített stringhez hozzá kell rakni a pipa jelet,majd erre meghívni a repeat metódust
    console.log(`${output.padEnd(20)}${'✅'.repeat(index + 1)}`);
  }
});

console.log('--------Coding Challenge #4 VÉGE-----------');
