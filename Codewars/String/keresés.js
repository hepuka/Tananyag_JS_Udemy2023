//RegEx
function spEng(sentence) {
    return /English/i.test(sentence);
}

console.log(spEng("eNglisH"));

//RegEx
function shortcut(string) {
    return string.replace(/[aeiou]/g, "");
}

console.log(shortcut("helloy"));
console.log(shortcut("HELLO"));

//RegEx
function replace(s) {
    return s.replace(/[aeiouAEIOU]/g, "!");
}

console.log(replace("!Hi! Hi!"));

//RegEx
function DNAStrand(dna) {
    return dna
        .replace(/A/g, "t")
        .replace(/T/g, "a")
        .replace(/C/g, "g")
        .replace(/G/g, "c")
        .toUpperCase();
}

console.log(DNAStrand("ATTGC"));

function defineSuit(card) {
    const last = card.charAt(card.length - 1);

    switch (last) {
        case "♣":
            return "clubs";
            break;
        case "♦":
            return "diamonds";
            break;
        case "♥":
            return "hearts";
            break;
        case "♠":
            return "spades";
            break;
    }

    /*   const s = {
        "♣": "clubs",
        "♠": "spades",
        "♦": "diamonds",
        "♥": "hearts",
      };
      return s[card.charAt(card.length - 1)]; */
}

console.log(defineSuit("Q♠"));
console.log(defineSuit("9♦"));
console.log(defineSuit("J♥"));

//www.codewars.com/kata/53af2b8861023f1d88000832
function areYouPlayingBanjo(name) {
    return name.charAt(0) === "R" || name.charAt(0) === "r"
        ? name + " plays banjo"
        : name + " does not play banjo";
    //  return (
    //    name +
    //    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    //    " banjo"
    //  );
}

console.log(areYouPlayingBanjo("Rolika"));

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter((item) => item === true).length;
}

console.log(countSheeps([true, true, false, false, false, true, true, true]));

function isIsogram(str) {
    //Set nem tartalmazhat 2 egyforma elemet
    //csak a különböző karaktereket rakja bele
    return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram("aba"));

function warnTheSheep(queue) {
    const wolfIndex = queue.indexOf("wolf");

    if (wolfIndex === queue.length - 1) {
        return "Pls go away and stop eating my sheep";
    }

    const sheepIndex = queue.length - wolfIndex - 1;

    return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}

console.log(
    warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
);

function correctTail(bod, tail) {
    let sub = bod.toLowerCase().slice(-1);

    console.log(sub);

    if (sub === tail) {
        return true;
    } else {
        return false;
    }
}

//  return bod[bod.length-1] === tail
console.log(correctTail("Bkkeyvjxdcunuqjrorenjcigajpmeuxsy", "s"));

const cannonsReady = (gunners) => {
    return Object.values(gunners).includes("nay")
        ? "Shiver me timbers!"
        : "Fire!";
};
let a = {Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye"};
let b = {Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye"};

console.log(cannonsReady(b));

//https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

function feast(beast, dish) {
    return (
        beast[0] === dish[0] &&
        beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)
    );

    // return (
    //   beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
    // );
}

console.log(feast("great blue heron", "garlic naan"));

// function correctTail(bod, tail) {
//   return tail.includes(bod.slice(-1));
// }
//
// console.log(correctTail("Rhino", "o"));

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

function correctPolishLetters(string) {

    return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)])
}

console.log(correctPolishLetters("Lech Wałęsa"))

function defineSuit(card) {
    // const signs = ["♣", "♦", "♥", "♠"];
    // const words = ["clubs", "diamonds", "hearts", "spades"];
    //
    // return words[signs.indexOf(card.charAt(card.length - 1))];

    const s = {
        "♣": "clubs",
        "♠": "spades",
        "♦": "diamonds",
        "♥": "hearts",
    };
    return s[card.charAt(card.length - 1)];
}

console.log(defineSuit("9♦"));
