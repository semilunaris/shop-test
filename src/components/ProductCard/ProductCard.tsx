import { Product } from '../../models/Product';
import React from 'react';


interface ProductCardProps {
  product: Product;
  handleDeleteProduct: (id: number)=> void
}

const ProductCard: React.FC<ProductCardProps> = ({ product,  handleDeleteProduct}) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-card__image" />
      <div className="product-card__details">
        <h2 className="product-card__name">{product.name}</h2>
        <p className="product-card__weight">Weight: {product.weight}</p>
        <p className="product-card__size">
          Size: {product.size.width} x {product.size.height} cm
        </p>
        <p className="product-card__count">In stock: {product.count}</p>
        <div className="product-card__comments">
          <h3>Comments:</h3>
          <ul>
            {product.comments.map((comment) => (
              <li key={comment.id} className="product-card__comment">
                <p>{comment.description}</p>
                <small>{comment.date}</small>
              </li>
            ))}
          </ul>
          <button onClick={() => {
              console.log(product.id)
              handleDeleteProduct(product.id)}}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
