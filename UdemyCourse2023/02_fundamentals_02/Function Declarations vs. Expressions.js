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

//hoisting only for function declaration works
//Hoisting doesn't work for function expression
// console.log("Result ", calcSum(2, 3));
let calcSum = function (a, b) {
  return a + b;
};

function showName(firstName, secondName) {
  console.log("First Name - ", firstName);
  if (secondName == undefined) {
    console.log("Second name is not specified");
  } else {
    console.log("Second Name - ", secondName);
  }
}
showName("John");

function showName2(firstName = "John", secondName = "default parameterName") {
  console.log("First Name - ", firstName);
  console.log("Second Name - ", secondName);
}
showName2("William", "Smith");
showName2("William");

//Self-calling Functions
(function (name) {
  console.log("Hello ", name);
})("Student");
