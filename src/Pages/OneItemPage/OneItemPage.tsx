import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./OneItemPage.css";
import { Product } from "../../models/Product";

// Пример данных — в реальном приложении замените на получение данных с сервера
const products: Product[] = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/300",
    name: "Продукт 1",
    count: 10,
    size: { width: 10, height: 20 },
    weight: "1 кг",
    comments: [
      { id: 1, text: "Отличный продукт!" },
      { id: 2, text: "Качество на высоте" },
    ],
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/300",
    name: "Продукт 2",
    count: 5,
    size: { width: 15, height: 25 },
    weight: "1.5 кг",
    comments: [],
  },
];

const OneItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      const foundProduct = products.find((p) => p.id === productId) || null;
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return <div className="one-item-page">Продукт не найден</div>;
  }

  return (
    <div className="one-item-page">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>
        <strong>Количество:</strong> {product.count}
      </p>
      <p>
        <strong>Размер:</strong> {product.size.width} x {product.size.height} см
      </p>
      <p>
        <strong>Вес:</strong> {product.weight}
      </p>
      <h2>Комментарии</h2>
      {product.comments.length > 0 ? (
        <ul>
          {product.comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      ) : (
        <p>Нет комментариев</p>
      )}
    </div>
  );
};

export default OneItemPage;
