const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1977,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //arrow function-el nem működik
  calcAge: function () {
    //this kulcsszó az objektumra mutat
    console.log(this);

    this.age = new Date().getFullYear() - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.getSummary());

console.log(jonas);
