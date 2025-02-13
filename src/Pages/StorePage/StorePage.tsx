import React from "react";
import ProductList from "../../components/ProductList/ProductList"

const StorePage: React.FC = () => {
  return (
    <div className="store-page">
      <h1>Наш магазин</h1>
      <ProductList />
    </div>
  );
};

export default StorePage;
