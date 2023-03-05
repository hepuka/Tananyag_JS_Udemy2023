console.log('-------------Setters and Getters------------');

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

//getter használata
console.log(account.latest);

//setter használata
account.latest = 50;
console.log(account.movements);
