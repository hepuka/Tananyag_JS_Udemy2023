const Animal = function (sound) {
  //////////////private part//////////////
  let _sound = sound;

  function speak() {
    setTimeout(() => console.log(_sound), 0);
  }

  //////////////public part///////////////
  return {
    speak,
  };
};

//instances
const owl = new Animal("HOOT!");

//inheritance, and extend with new function
owl.fly = function () {
  console.log("flying");
};

owl.speak();
owl.fly();

console.log(owl);

//Polymorphism, modify the inherited behavior
owl.speak = function () {
  console.log("modified speak function");
};

owl.speak();

//THIS
function thisFunction() {
  console.log(this);
}

// thisFunction();

//create object
class Owl {
  constructor(sound, age) {
    this.sound = sound;
    this.age = age;
  }

  speak = function () {
    console.log(this.sound);
  };
}

let owl2 = new Owl("miou", 5);
console.log(owl2);
owl2.speak();
console.log(owl2.sound);

class Animals {
  #multiplier = 235;
  #privatefield = 40 * this.#multiplier;

  constructor(sound) {
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }

  getPrivateData() {
    return this.#privatefield;
  }

  setPrivateData(data) {
    this.#privatefield = data * this.#multiplier;
  }
}

class Cat extends Animals {
  constructor() {
    super();
    this.sound = "moiuuuuu";
  }
}

let cat1 = new Cat();

console.log(cat1);
cat1.speak();

cat1.setPrivateData(10);
console.log(cat1.getPrivateData());
