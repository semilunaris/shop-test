import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../../models/Product';
import { fetchProducts } from '../api/products';
import { deleteProductApi,addProductApi } from '../api/products';


export const loadProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  'products/loadProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchProducts();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk<Product, Product, { rejectValue: string }>(
  'products/addProduct',
  async (newProduct, { rejectWithValue }) => {
    try {
      //@ts-ignore /// а то джсон сервер не видаляє
      const response = await addProductApi({...newProduct, id: newProduct.id.toString()});
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeProduct = createAsyncThunk<void, number, { rejectValue: string }>(
  'products/removeProduct',
  async (productId, { rejectWithValue }) => {
    try {
      await deleteProductApi(productId);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
