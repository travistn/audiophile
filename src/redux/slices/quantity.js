import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
};

export const quantitySlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value === 1) {
        state.value = 1;
      } else {
        state.value -= 1;
      }
    },
    resetQuantity: (state) => {
      state.value = 1;
    },
  },
});

export const selectQuantity = (state) => state.quantity.value;

export const { increment, decrement, resetQuantity } = quantitySlice.actions;
export default quantitySlice.reducer;
