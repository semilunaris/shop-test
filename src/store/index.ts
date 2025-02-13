// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
