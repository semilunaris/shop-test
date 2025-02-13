import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../models/Product';
import { addProduct, removeProduct, setProducts } from '../../store/productsSlice';
import { RootState } from '../../store/index'


const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    imageUrl: '',
    name: '',
    count: 0,
    size: { width: 0, height: 0 },
    weight: '',
    comments: [],
  });

  useEffect(() => {
    // fetch('http://localhost:5000/products')
    //   .then((res) => res.json())
    //   .then((data) => dispatch(setProducts(data)));
  }, [dispatch]);

  const handleAddProduct = () => {
    // fetch('http://localhost:5000/products', {
    //   method: 'POST',
    //   body: JSON.stringify(newProduct),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => dispatch(addProduct(data)))
    //   .finally(() => setIsModalOpen(false));
  };

  const handleDeleteProduct = (id: number) => {
    // fetch(`http://localhost:5000/products/${id}`, { method: 'DELETE' })
    //   .then(() => dispatch(removeProduct(id)));
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Add Product</button>
      {isModalOpen && (
        <div>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            placeholder="Product name"
          />
          <button onClick={handleAddProduct}>Confirm</button>
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
        </div>
      )}

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
