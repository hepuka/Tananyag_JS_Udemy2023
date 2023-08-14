function Owl() {
  this.speak = function () {
    console.log(this);
  };
}

let owl = new Owl();
let speak = owl.speak;

let boundSpeak = speak.bind(owl);

boundSpeak();

///bind
let person = {
  name: "John",
};

function printName() {
  console.log(this.name);
}

let boundPrintName = printName.bind(person);
let callPrintName = printName.call(person);
