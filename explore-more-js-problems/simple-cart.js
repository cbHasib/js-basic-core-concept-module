const shoppingCart = [
  { name: "mouse", price: 900, quantity: 7 },
  { name: "keyboard", price: 1100, quantity: 2 },
  { name: "HDMI Cable", price: 500, quantity: 3 },
  { name: "Bag", price: 2000, quantity: 1 },
  { name: "Shoe", price: 1700, quantity: 3 },
  { name: "Router", price: 3900, quantity: 2 },
  { name: "Lan Cable", price: 260, quantity: 3 },
  { name: "Mouse Pad", price: 100, quantity: 2 },
  { name: "Pendrive", price: 3200, quantity: 1 }
];

function totalCost(cart) {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].price*cart[i].quantity;
  }
  return sum;
}

console.log(totalCost(shoppingCart));
