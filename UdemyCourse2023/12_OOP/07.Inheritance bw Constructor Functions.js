const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //student kiterjesztése Person osztállyal
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
//prototype-ok átadása,örököltetjük a Person prototype-ot
Student.prototype = Object.create(Person.prototype);

console.log(Student.prototype);
console.log(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();
console.log(mike);

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
