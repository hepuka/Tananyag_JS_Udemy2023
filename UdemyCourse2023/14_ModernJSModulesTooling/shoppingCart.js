const shippingCost = 10;
const totalPrice = 237;
const totalQuantity = 23;
export { shippingCost, totalPrice, totalQuantity as tq };

export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

export default function add(product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
