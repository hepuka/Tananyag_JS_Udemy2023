class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Minden metódus a létrehozott objektum prorotype-ja lesz
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  get fullName() {
    return this._fullName;
  }

  // Set a property that already exists
  //settert adatellenőrzésre is használhatjuk
  //pl. a megadott név fullname-e
  set fullName(name) {
    //_fullname-ben a _ csak a névegyezőség miatt van
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  // Static metódus csak osztály részére, a példányok nem használhatják
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //a super függvény felelős, hogy a this erre a gyerek classra mutasson
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  //felülírtuk a Person class calcAge metódusát
  calcAge() {
    console.log(
      `I'm ${
        new Date().getFullYear() - this.birthYear
      } years old, but as a student I feel more like ${
        new Date().getFullYear() - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 1998, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();
