import React, { useState } from 'react';
import styles from './Modal.module.scss'; 
import { Product } from '../../models/Product';


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
  
    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      field: keyof Product | 'size.width' | 'size.height'
    ) => {
      const { value } = e.target;
      if (field === 'size.width' || field === 'size.height') {
        setNewProduct((prevState) => ({
          ...prevState,
          size: {
            ...prevState.size,
            [field.split('.')[1] as 'width' | 'height']: Number(value),
          },
        }));
      } else {
        setNewProduct((prevState) => ({
          ...prevState,
          [field]: value,
        }));
      }
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
        handleAddProduct(productWithId); // Передаем новый продукт в ProductList
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
