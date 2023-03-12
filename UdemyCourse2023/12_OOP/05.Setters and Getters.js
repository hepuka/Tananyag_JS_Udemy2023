const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    // return this.movements.slice(-1).pop();
    return this.movements[this.movements.length - 1];
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

//getter használata, lekérdezi a tömb utolsó elemét
console.log(account.latest);

//setter használata, 50-et berakja a tömb végére
account.latest = 50;
console.log(account.movements);
