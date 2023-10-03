function Pen(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;

  this.showPrice = function () {
    console.log(`Price of ${this.name} is ${this.price}`);
  };
}

// Pen.prototype.showPrice = function () {
//   console.log(`Price of ${this.name} is ${this.price}`);
// };

const pen1 = new Pen("Marker", "Blue", "$3");
const pen2 = new Pen("Markers", "Blues", "$33");
pen1.showPrice();
pen2.showPrice();

class Pen2 {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }

  showPrice = function () {
    console.log(`Price of ${this.name} is ${this.price}`);
  };
}

const pen3 = new Pen2("Markerss", "Bluess", "$333");
const pen4 = new Pen2("Markersss", "Bluesss", "$3333");
pen3.showPrice();
pen4.showPrice();

console.log(!(6 % 2) ? "even" : "odd");
