export const CartQuantity = (cart) =>
  cart.reduce((prevQuantity, current) => prevQuantity + current.quantity, 0);
