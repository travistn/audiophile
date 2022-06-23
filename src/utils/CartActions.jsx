export const addToCart = (product, quantity) => {
  const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const cartProduct = {
    ...product,
    quantity,
  };

  const existingItem = cart.find((cartItem) => cartItem.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push(cartProduct);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
};
