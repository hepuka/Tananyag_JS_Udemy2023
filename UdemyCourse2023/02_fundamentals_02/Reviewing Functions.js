// Reviewing Functions
const calcAge = function (birthYeah) {
  return new Date().getFullYear() - birthYeah;
};

const yearsUntilRetirement2 = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement2(1991, "Jonas"));
console.log(yearsUntilRetirement2(1950, "Mike"));
