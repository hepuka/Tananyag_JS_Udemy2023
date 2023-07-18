function count(string) {
  let count = {};

  string
    .split("")
    .map((item) => (count[item] = count[item] ? count[item] + 1 : 1));

  return count;
}

console.log(count("aba"));
