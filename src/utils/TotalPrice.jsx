export const getTotalPrice = (cart) =>
  cart?.reduce((prevPrice, current) => prevPrice + current.price * current.quantity, 0);

export const getValueAddedTax = (totalPrice) => Math.round(totalPrice * 0.2);
