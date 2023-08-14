class Chat {
  static sendMessage() {
    return "You got me!";
  }
}

const chat = new Chat();

console.log(Chat.sendMessage());

///2.
class Square {
  constructor(side) {
    this.side = side;
  }

  findPerimeter() {
    return 4 * this.side;
  }

  static comparePerimeter(square1, square2) {
    if (square1.side > square2.side) {
      console.log("First square has more perimeter");
    } else if (square1.side < square2.side) {
      console.log("Second square has more perimeter");
    } else {
      console.log("Both have same perimeter");
    }
  }
}

let square1 = new Square(3);
let square2 = new Square(7);
Square.comparePerimeter(square1, square2);

///3.
class User {
  static helloEmail = "hello@company.com";

  static checkValidEmail(email) {
    console.log("Hmmm, the email looks good!");
  }

  static loginHelloEmail() {
    this.checkValidEmail(this.helloEmail);
  }
}

User.loginHelloEmail();

///4.
class User2 {
  static helloEmail = "hello@company.com";

  static welcomeMessage() {
    return "Welcome to our team!";
  }

  constructor() {
    console.log(User2.helloEmail);
    console.log(User2.welcomeMessage());
  }
}
