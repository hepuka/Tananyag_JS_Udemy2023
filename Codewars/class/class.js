//1.
/* Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
ball1 = new Ball();
ball2 = new Ball("super");
ball1.ballType     //=> "regular"
ball2.ballType     //=> "super" */

var Ball = function (ballType) {
  this.ballType = ballType || "regular";
};

//2.
/* You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!
Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!
The constructor taking no arguments should assign 0 to Cube's Side property.*/

class Cube {
  constructor(side = 0) {
    this.side = Math.abs(side);
  }

  getSide() {
    return this.side;
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

//3.
/* Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
Output
Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.*/

var Person = function () {
  var person = {
    _name: "Leroy",
    _friends: [],

    fillFriends(f) {
      this._friends.push(...f);
    },
  };
  return person;
};

// var people = [
//   ["bob", "john"],
//   ["bob", "john", "dave"],
//   [],
//   ["bob", "john", "dave", "matt", "alex"],
// ];

//4
/* Create a method to see whether the string is ALL CAPS.
Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.*/

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

console.log("HELLO".isUpperCase());
