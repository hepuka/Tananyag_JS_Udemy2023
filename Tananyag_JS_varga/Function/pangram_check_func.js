// Version using indexOf
function isPangram(sentence) {
  let lowerCased = sentence.toLowerCase();

  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (lowerCased.indexOf(char) === -1) {
      //-1 -el tér vissza ha nincs benne
      return false;
    }
  }
  return true;
}

// Version using string.includes()
// Nice and clean, but not supported in IE
function isPangram2(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!lowerCased.includes(char)) {
      return false;
    }
  }
  return true;
}
