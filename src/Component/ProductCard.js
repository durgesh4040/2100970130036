// src/components/ProductCard.js

import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.company}</p>
      <p className="text-lg font-bold mt-2">${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>
        Availability:{" "}
        <span
          className={product.availability ? "text-green-500" : "text-red-500"}
        >
          {product.availability ? "Available" : "Out of stock"}
        </span>
      </p>
    </div>
  );
};

export default ProductCard;
