
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, addProduct, removeProduct } from '../../store/thunks/thunks';
import { Product } from '../../models/Product';
import { RootState, AppDispatch } from '../../store';
import ProductCard from '../ProductCard/ProductCard';
import Modal from '../../components/Modal/Modal';

// ProductList.tsx
const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

  const [isModalOpen, setIsModalOpen] = useState(false);
useEffect(()=> {
  dispatch(loadProducts());
},[dispatch])
  const handleAddProduct = (product: Product) => {
    dispatch(addProduct(product)); 
    setIsModalOpen(false);
    dispatch(loadProducts());
  };

  const handleDeleteProduct = (id: number) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Add Product</button>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} handleAddProduct={handleAddProduct} />
      )}

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {products && products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} handleDeleteProduct={handleDeleteProduct} />
            </li>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList