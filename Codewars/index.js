let number = document.getElementById("number");
let incButton = document.getElementById("inc");
let decButton = document.getElementById("dec");

let szamlalo = 0;

function increment() {
  szamlalo++;

  number.textContent = szamlalo;
}

function decrement() {
  szamlalo--;

  number.textContent = szamlalo;
}

function reset() {
  szamlalo = 0;

  number.textContent = szamlalo;
}
