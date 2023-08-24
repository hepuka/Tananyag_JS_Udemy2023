class User {
  constructor(name, addrees) {
    this._address = address;
    this._name = name;
    this._addrees = addrees;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get addrees() {
    return this._addrees;
  }

  set addrees(value) {
    this._addrees = value;
  }
}
