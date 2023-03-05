console.log('---------Coding Challenge #2--------');

//1. Re-create challenge 1, but this time using an ES6 class;

class CarES6 {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }

  //2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);

  get speedUS() {
    return this.speed / 1.6;
  }
  /* 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6); */

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}

/* 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter. */
//DATA CAR 1: 'Ford' going at 120 km/h

const ford = new CarES6('Ford', 120);

console.log(ford);

ford.accelerate();
ford.break();
ford.accelerate();
ford.break();

ford.speedUS = 10;
console.log(ford);
console.log(ford.speed);
