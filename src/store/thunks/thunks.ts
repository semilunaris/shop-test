import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";
import * as api from "../api/products"
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const products = await api.getProducts();
      return products;
    }
  );
  

  export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (newProduct: Product) => {
      const product = await api.createProduct(newProduct);
      return product;
    }
  );
  

  export const removeProduct = createAsyncThunk(
    'products/removeProduct',
    async (id: number) => {
      await api.deleteProduct(id);
      return id; 
    }
  );