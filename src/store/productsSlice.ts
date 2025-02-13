import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../models/Product';

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    updateProduct(state, action: PayloadAction<Product>) {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index >= 0) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const { setProducts, addProduct, removeProduct, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
