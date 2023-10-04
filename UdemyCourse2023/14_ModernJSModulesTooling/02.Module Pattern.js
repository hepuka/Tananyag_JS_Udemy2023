console.log('-------The Module Pattern------');

const ShoppingCart2 = (function () {
  //---------PRIVATE SECTION----------//
  //a változók és a függvények kívülről nem látszódnak közvetlenül
  //ha el akarjuk érni őket kívülről akkor a return objektumba kell rakni

  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  //----------PUBLIC, EXPORTED SECTION-----------//
  //public API

  return {
    addToCart,
    orderStock,
    cart,
    totalPrice,
    totalQuantity,
  };
})(); //azonnal meghívódó függvényként deklaráljuk mert nem fogjuk külön meghívni

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
ShoppingCart2.orderStock('banana', 10);

console.log(ShoppingCart2);
console.log(ShoppingCart2.cart);
console.log(ShoppingCart2.totalPrice);

console.log(ShoppingCart2.shippingCost); //undefined, mivel ez nincs a public section-ben
