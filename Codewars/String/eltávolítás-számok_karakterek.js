function stringClean(s) {
  return s.replace(/\d/g, "");
}
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"));

function remove(string) {
  return string.endsWith("!") ? string.substring(0, string.length - 1) : string;
}
console.log(remove("Hi!"));
console.log(remove("Hi!!"));
console.log(remove("!Hi!"));
console.log(remove("!Hi"));
console.log(remove("Hi! Hi!"));

function noSpace(x) {
  return x.split(" ").join("");

  //return x.replace(/\s/g, "");
}
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
function removeChar(str) {
  return str.substring(1, str.length - 1);
  //return str.slice(1, -1);
}
console.log(removeChar("eloquent"));
