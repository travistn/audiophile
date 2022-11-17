import { configureStore } from '@reduxjs/toolkit';
import quantityReducer from './slices/quantity';

export const store = configureStore({
  reducer: {
    quantity: quantityReducer,
  },
});
