export const addToCart = (product, quantity, setCart) => {
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

  setCart(cart);
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const editCart = (product, modifier, setCart) => {
  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

  let existingItem = cart.find((cartItem) => cartItem.id === product.id);

  if (!existingItem) return;

  if (modifier === 'subtract') {
    existingItem.quantity--;
  } else if (modifier === 'add') {
    existingItem.quantity++;
  }

  if (existingItem.quantity <= 0) {
    cart = cart.filter((cartItem) => cartItem.id !== product.id);
  }

  setCart(cart);
  localStorage.setItem('cart', JSON.stringify(cart));
};
