let regex = /zolika/gi;

console.log(regex.source);
console.log(regex.flags);
console.log(regex.lastIndex);
// console.log(regex.test("aabbaaZOLIKAaabbaa"));
console.log(regex.exec("zolika"));

const str = "table football";
const fooregex = new RegExp("foo*");
const globalRegex = new RegExp("foo*", "g");

console.log(fooregex.test(str));
console.log(globalRegex.lastIndex);
console.log(globalRegex.test(str));
console.log(globalRegex.lastIndex);
console.log(globalRegex.test(str));

//When test() returns false, the calling regex's lastIndex property will reset to 0.
const regex3 = /foo/g; // the "global" flag is set

// regex.lastIndex is at 0

regex3.test("foo"); // true
// regex.lastIndex is now at 3

regex3.test("foo"); // false
// regex.lastIndex is at 0

regex3.test("barfoo"); // true
// regex.lastIndex is at 6

regex3.test("foobar"); // false
// regex.lastIndex is at 0

regex3.test("foobarfoo"); // true
// regex.lastIndex is at 3

regex3.test("foobarfoo"); // true
// regex.lastIndex is at 9

regex3.test("foobarfoo"); // false
// regex.lastIndex is at 0

// (...and so on)

const str2 = "hello world!";
const result = /^hello/.test(str2);
console.log("str2: " + result);

//function to check substring
function testInput(re, str) {
  const midstring = re.test(str) ? "contains" : "does not contain";
  console.log(`${str} ${midstring} ${re.source}`);
}

testInput(/aba/, "jdsfgabajdsf");

//RegExp constructor
const part = 3;
const timeMachine = part === 3 ? "train" : "car";
const docExpression = new RegExp(timeMachine, "i");
const docResult = docExpression.test("There is atrainin this string");
console.log(docResult);

//replace with RegEx
console.log("Out Of A DeLorean".replace(/O/, "_"));
console.log("Out Of A DeLorean".replace(/O/g, "_"));
console.log("Out Of A DeLorean".replace(/O/gi, "_"));

let str22 = "Roads? Where We're Going, We Don't Need Roads";
let regex22 = /roads/gi;

//exec()
console.log(regex22.exec(str22));
console.log(regex22.exec(str22));
console.log(regex22.exec(str22));

//test()
console.log(regex.lastIndex);
console.log(regex.test(str22));
console.log(regex.lastIndex);
console.log(regex.test(str22));
console.log(regex.lastIndex);
console.log(regex.test(str22));

//match()
let match = str22.match(/Roads\./);
console.log(match);
