// Arrow functions

const calcAge3 = (birthYeah) => 2023 - birthYeah;
const age3 = calcAge3(1977);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = new Date().getFullYear() - birthYeah;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1977, "Zoltán"));
console.log(yearsUntilRetirement(1980, "Bob"));
