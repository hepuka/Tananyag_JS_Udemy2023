// Function Declarations vs. Expressions

// Function declaration, ez esetben a függvény hívás történhet a deklaráció előtt
const age1 = calcAge1(1991);

function calcAge1(birthYeah) {
  return 2022 - birthYeah;
}

// Function expression
//névnélküli függvény írunk, és ezt helyezzük el egy változóban.A függvényhíváskor erre a változóra hivatkozunk
//const age2 = calcAge2(1991); //ez esetben hibát dob, nem férünk hozzá a függvényhez a deklaráció előtt

const calcAge2 = function (birthYeah) {
  return 2022 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
