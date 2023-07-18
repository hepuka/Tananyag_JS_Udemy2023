function getChar(c) {
  return String.fromCharCode(c);
}
console.log(getChar(55));

//convert char to num
function uniTotal(string) {
  return string.split("").reduce((acc, curr) => (acc += curr.charCodeAt()), 0);
}
console.log(uniTotal("h"));

//conv num to char
var ArrowFunc = function (arr) {
  return arr.map((item) => String.fromCharCode(item)).join("");
};
console.log(ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]));

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return text
    .toLowerCase()
    .split("")
    .map((item) => (item = alphabet.indexOf(item) + 1))
    .filter((item) => item !== 0)
    .join(" ");

  // return text
  //   .toLowerCase()
  //   .split("")
  //   .map((a) => a.charCodeAt(0) - 96)
  //   .filter((item) => item !== -64)
  //   .join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
