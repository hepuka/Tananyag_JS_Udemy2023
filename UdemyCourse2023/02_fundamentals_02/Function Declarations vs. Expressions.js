// Function Declarations vs. Expressions, ez a két függvénytípus van a JS-ben

// Function declaration, ez esetben a függvény hívás történhet a deklaráció előtt
const age1 = calcAge1(1991);

function calcAge1(birthYeah) {
  return 2022 - birthYeah;
}

// Function expression

//const age2 = calcAge2(1991); //ez esetben hibát dob, nem férünk hozzá a függvényhez a deklaráció előtt

//névnélküli függvény írunk, és ezt helyezzük el egy változóban.A függvényhíváskor erre a változóra hivatkozunk
const calcAge2 = function (birthYeah) {
  return 2022 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
