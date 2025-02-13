import axios from 'axios';
import { Product } from '../../models/Product';

const apiUrl = 'http://localhost:5000/products';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const addProductApi = async (product: Product): Promise<Product> => {
  const response = await axios.post(apiUrl, product);
  return response.data;
};

export const deleteProductApi = async (id: number): Promise<void> => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
