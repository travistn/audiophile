import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload });
      }
    },
    addItem: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);

      if (itemInCart) itemInCart.quantity++;
    },
    removeItem: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);

      if (itemInCart.quantity <= 1) {
        state.cart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id);
      } else {
        itemInCart.quantity--;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const selectCart = (state) => state.cart.cart;
export const { addToCart, addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
