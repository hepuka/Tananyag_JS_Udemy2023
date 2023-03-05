console.log('---------Another Class Exxample-------');
console.log('------Encapsulation: Protected Properties and Methods-----');
console.log('------Encapsulation: Private Class Fields and Methods------');

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances), nem érhető el kívülről csak egy API-on keresztül
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //this.#movements = [];
    //this.locale = navigator.language;
  }

  // public interface
  //mivel a #-el private láthatóságú a movement, az csak egy API-al kérdezhető le
  getMovement() {
    return this.#movements;
  }

  // public interface
  deposit(val) {
    this.#movements.push(val);
    return this; //nem szükséges, de akkor kell ha chaining-et akarunk 387.sor
  }

  // public interface
  withdraw(val) {
    this.deposit(-val);
    return this; //nem szükséges, de akkor kell ha chaining-et akarunk 387.sor
  }

  // public interface
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved!');

      return this; //nem szükséges, de akkor kell ha chaining-et akarunk 387.sor
    }
  }

  //az osztályra vonatkozik, az osztálynév és nem a példány metódusaként hívható meg
  static helper() {
    console.log('Helper');
  }

  // Private methods, kívülről nem hívható meg, ez csak a requestLoan public metódus része
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.getMovement());

Account.helper();

console.log('-------Chaining Methods------');

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovement());
