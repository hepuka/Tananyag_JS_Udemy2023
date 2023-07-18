String.prototype.isUpperCase = function () {
  //   return this == this.toUpperCase();

  return !/[a-z]/.test(this);
};

function replace(s) {
  return s.replace(/[aeiouAEIOU]/g, "!");
}

console.log(replace("ABCDE"));

//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN(pin) {
  return /^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6);
}

console.log(validatePIN("123"));

function correct(string) {
  return string.replace(/0/g, "O").replace(/5/g, "S").replace(/1/g, "I");
}

console.log(correct("51NGAP0RE"));

function fakeBin(x) {
  return x.replace(/[0-4]/g, 0).replace(/[5-9]/g, 1);
}

console.log(fakeBin("45385593107843568"));

function countSmileys(arr) {
  // let preferredPatterns = [
  //   ":)",
  //   ":D",
  //   ";-D",
  //   ":~)",
  //   ";~D",
  //   ":-D",
  //   ";-)",
  //   ":D",
  //   ";~D",
  //   ":-)",
  //   ";D",
  //   ";)",
  //   ";~)",
  //   ":~D",
  // ];
  // return arr.reduce(
  //   (acc, curr) => acc + (preferredPatterns.includes(curr) === true ? 1 : 0),
  //   0
  // );

  return arr.reduce((acc, curr) => acc + /^[:;][-~]?[D)]$/.test(curr), 0);
}

console.log(countSmileys([":~D", ":(", ":D", ":)", ":>", ";(", ";~D"]));

function wave(str) {
  let result = [];

  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1),
      );
    }
  });

  return result;
}

console.log(wave("hello"));

function noSpace(x) {
  return x.replace(/ /g, "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

////////////////////////////////////////////////////////////////////////////////////////////
function spEng(sentence) {
  return /English/i.test(sentence);
}

console.log(spEng("eNglisH"));

function stringClean(s) {
  return s.replace(/\d/g, "");
}

console.log(stringClean("This looks5 grea8t!"));
