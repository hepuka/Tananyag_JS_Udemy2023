const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

//a PersonProtóból egy új protot hozunk létre a student-nek
const StudentProto = Object.create(PersonProto);

//majd egy új student objektumot hozunk létre a StudentProtoból
const jay = Object.create(StudentProto);

//StudentProto-nak deklarálunk metódusokat
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

console.log(jay);
