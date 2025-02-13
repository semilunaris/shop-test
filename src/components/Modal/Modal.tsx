import React, { useState } from 'react';
import styles from './Modal.module.scss'; 

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
  comments: Comment[];
}

interface ModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
  handleAddProduct: (product: Product) => void;
}

const Modal: React.FC<ModalProps> = ({ setIsModalOpen, handleAddProduct }) => {
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    imageUrl: '',
    name: '',
    count: 0,
    size: {
      width: 0,
      height: 0
    },
    weight: '',
    comments: []
  });

  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [field]: field === 'size.width' || field === 'size.height' ? Number(value) : value,
    }));
  };

  const validateForm = (): boolean => {
    const { name, imageUrl, count, size, weight } = newProduct;
    if (!name || !imageUrl || !count || !size.width || !size.height || !weight) {
      setErrorMessage('All fields are required.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleConfirm = () => {
    if (validateForm()) {

      const newId = Date.now();
      const productWithId = { ...newProduct, id: newId };
      handleAddProduct(productWithId);
      setIsModalOpen(false);
    }
  };

  return (
    <div className={styles.modal}>
      <h2>Add New Product</h2>
      <input
        type="text"
        value={newProduct.name}
        onChange={(e) => handleInputChange(e, 'name')}
        placeholder="Product name"
      />
      <input
        type="text"
        value={newProduct.imageUrl}
        onChange={(e) => handleInputChange(e, 'imageUrl')}
        placeholder="Image URL"
      />
      <input
        type="number"
        value={newProduct.count}
        onChange={(e) => handleInputChange(e, 'count')}
        placeholder="Count"
      />
      <input
        type="number"
        value={newProduct.size.width}
        onChange={(e) => handleInputChange(e, 'size.width')}
        placeholder="Width"
      />
      <input
        type="number"
        value={newProduct.size.height}
        onChange={(e) => handleInputChange(e, 'size.height')}
        placeholder="Height"
      />
      <input
        type="text"
        value={newProduct.weight}
        onChange={(e) => handleInputChange(e, 'weight')}
        placeholder="Weight"
      />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={() => setIsModalOpen(false)}>Cancel</button>
    </div>
  );
};

export default Modal;
