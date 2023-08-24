//Singleton
const Config = {
  start: () => console.log("App has started"),
  update: () => console.log("App has updated"),
};

// We freeze the object to prevent new properties being added and existing properties being modified or removed
Object.freeze(Config);

Config.name = "hello";
console.log(Config);

//Abstract Factory
class Car {
  constructor() {
    this.name = "Car";
    this.wheels = 4;
  }

  turnOn = () => {
    console.log("Car is started");
  };
}

class Motorcycle {
  constructor() {
    this.name = "Motorcycle";
    this.wheels = 2;
  }

  turnOn = () => {
    console.log("Motorcycle is started");
  };
}

class createVehicle {
  constructor(type) {
    if (type === "Car") return new Car();
    if (type === "Motorcycle") return new Motorcycle();
  }
}

const car = new createVehicle("Car");
const motorcycle = new createVehicle("Motorcycle");

///BUILDER
const addStopFunction = (obj) => {
  obj.stopFunction = () => console.log(`${obj.name} stopped`);
};

addStopFunction(car);
addStopFunction(motorcycle);

//STRUCTURAL
//DECORATOR
class MacBook {
  constructor() {
    this.price = 120;
    this.screen = 11.5;
  }

  cost() {
    return this.price;
  }

  screenSize() {
    return this.screen;
  }
}

let decoratorFunction = (() => {
  const memory = (macbook) => {
    const v = macbook.cost();
    macbook.cost = () => v + 100;
  };
  const engsaving = (macbook) => {
    const v = macbook.cost();
    macbook.cost = () => v + 50;
  };

  return {
    decorate(macbook) {
      memory(macbook);
      engsaving(macbook);
    },
  };
})();

let macbook = new MacBook();
console.log(macbook.cost()); //120
decoratorFunction.decorate(macbook);
console.log(macbook.cost()); //270

//Facade
const loadData = () => {
  console.log("loadData");
};

const resize = () => {
  console.log("resize");
};

const log = () => {
  console.log("log");
};

let pageFacade = {
  updateMenu: function () {
    loadData();
    resize();
    log();
  },
};

pageFacade.updateMenu();

//ADAPTER
const timers = [
  {
    city: "Bp",
    time: 6000,
  },
  {
    city: "Db",
    time: 600,
  },
];

const addObj = {
  city: "Miskolc",
  time: 6,
};

const dataModifier = (obj) => {
  obj.time *= 60;
};

dataModifier(addObj);
timers.push(addObj);
console.log(timers);

//BEHAVIORAL
//STARTEGY
class Strategy {
  constructor(name) {
    this._name = name;
  }

  execute() {
    throw new Error("Startegy execute method needs to be overriden.");
  }

  getName() {
    console.log(this._name);
  }
}

class GreetingStrategy extends Strategy {
  execute() {
    console.log("Hello");
  }
}

class PoliteGreetingStrategy extends Strategy {
  execute() {
    console.log("Welcome");
  }
}

class FriendlyGreetingStrategy extends Strategy {
  execute() {
    console.log("Ciao");
  }
}

const makeGreet = (strategy) => {
  strategy.execute();
  strategy.getName();
};

const simpleGreet = makeGreet(new GreetingStrategy("Simple Strategy"));
const politeGreet = makeGreet(new PoliteGreetingStrategy("Polite Strategy"));
const friendlyGreet = makeGreet(
  new FriendlyGreetingStrategy("Friendly Strategy"),
);

//OBSERVER
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data) {
    this.observers.forEach((observer) => {
      observer.update.call(observer, data);
    });
  }
}

const observer1 = {
  update(args) {
    console.log("press");
  },
};
const observer2 = {
  update(args) {
    console.log("pressed too");
  },
};

const observable = new Observable();
observable.subscribe(observer1);
observable.subscribe(observer2);

observable.notify({ some: "User clicked button!" });

console.log(observable);
