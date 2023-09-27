// The Conditional, Ternary Operator
age = 31;

age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

//ternáris operátor használata template literálban
console.log(`I like ${true ? "tennis" : "football"}`);
