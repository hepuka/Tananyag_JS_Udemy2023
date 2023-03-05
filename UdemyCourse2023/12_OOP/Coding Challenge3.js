console.log('---------Coding Challenge #3--------');

/* 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property); */

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

/* 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'; */

//link to prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

/* 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'; */

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;

  console.log(
    `${this.make} accelerate at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

EV.prototype.break = function () {
  this.speed -= 20;
  this.charge += 1;

  console.log(
    `${this.make} break at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

/* 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉 */
//DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

const tesla = new EV('Tesla', 120, 23);

console.log(tesla);

tesla.chargeBattery(90);
console.log(tesla);

tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();

tesla.break();
tesla.break();
tesla.break();
console.log(tesla);
