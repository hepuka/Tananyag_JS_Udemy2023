const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1977,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
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
