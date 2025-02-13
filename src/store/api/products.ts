import axios from 'axios';
import { Product } from '../../models/Product';

const API_URL = 'http://localhost:5000/products';

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createProduct = async (newProduct: Product): Promise<Product> => {
  const response = await axios.post(API_URL, newProduct, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

