/*—--------------------------------------------------------------
                          TÖMB BEMENET
---------------------------------------------------------------*/
function checkTheBucket(bucket) {
  if (bucket.includes("gold")) {
    return true;
  } else {
    return false;
  }
}
console.log(checkTheBucket(["stone", "gold", "stone", "stone", "stone"]));

const well = (x) => {
  const good_count = x.filter((item) => item == "good").length;

  return good_count < 1
    ? "Fail!"
    : good_count < 3
    ? "Publish!"
    : "I smell a series!";
};
console.log(well(["bad", "bad", "bad", "bad"]));

//azokat az elemeket adja vissza egy tömbe amelyek nem szerepelnek a geese tömbben
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((item) => !geese.includes(item));
}
console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);

/*—--------------------------------------------------------------
                          STRING BEMENET
---------------------------------------------------------------*/
function correctPolishLetters(string) {
  const char = ["ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż"];

  const letter = ["a", "c", "e", "l", "n", "o", "s", "z", "z"];
  const result = [];

  string.split("").map((item) => {
    char.includes(item)
      ? result.push(letter[char.indexOf(item)])
      : result.push(item);
  });

  return result.join("");

  /*   var Letters = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  function correctPolishLetters(string) {
    return string
      .split("")
      .map((c) => Letters[c] || c)
      .join("");
  } */

  /*   function htmlspecialchars(formData) {
    return formData
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  } */
}
console.log(correctPolishLetters("Jędrzej Błądziński"));

//meszámolja a magánhangzókat a string-ben
function getCount(str) {
  return str.split("").filter((item) => "aeiouAEIOU".includes(item)).length;
  /*   const char = ["a", "e", "i", "o", "u"];
  let result = [];
  str.split("").map((item) => (char.includes(item) ? result.push(item) : null));
  return result.length; */
}
console.log(getCount("abracadabra"));

function arrayDiff(a, b) {
  return a.filter((item) => !b.includes(item));
}

console.log(arrayDiff([1, 2], [1]));

function isValid(a) {
  return (
    !(a.includes(1) && a.includes(2)) &&
    !(a.includes(3) && a.includes(4)) &&
    a.includes(5) === a.includes(6) &&
    (a.includes(7) || a.includes(8))
  );
}
console.log(isValid([1, 3, 6, 7]));
