function Owl() {
  this.speak = function () {
    console.log(this);
  };
}

let owl = new Owl();
let speak = owl.speak;

let boundSpeak = speak.bind(owl);

boundSpeak();
