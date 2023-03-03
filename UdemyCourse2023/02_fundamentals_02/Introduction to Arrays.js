// Introduction to Arrays
//const y = new Array(1991, 1984, 2008, 2020); //ne használd így

const y = [1991, 1984, 2008, 2020];
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); //utolsó elem kiíratása

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";

//korábban létrehozott változó értékének elhelyezése a tömbe elemként(firstName)
const jonas2 = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas2);
console.log(jonas2.length);

// Exercise
const years = [1990, 1967, 2002, 2010, 2018];
const calcAge = (birthYeah) => new Date().getFullYear() - birthYeah;
const result = [];

years.map((item) => {
  result.push(calcAge(item));
});

console.log(result);

const age11 = calcAge(years[0]);
const age22 = calcAge(years[1]);
const age33 = calcAge(years[years.length - 1]);
console.log(age11, age22, age33);

//a 3 érték egy tömbben való tárolása
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
