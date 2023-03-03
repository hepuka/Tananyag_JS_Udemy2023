// Object Methods
const jonas3 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1977,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2022 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas3.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

jonas3.calcAge();
console.log(jonas3.getSummary());

console.log(jonas3);
