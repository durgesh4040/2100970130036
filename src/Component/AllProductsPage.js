// src/pages/AllProductsPage.js

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend API or use demo data
    const demoProducts = [
      {
        id: 1,
        name: "Product 1",
        company: "Company A",
        price: 100,
        rating: 4.5,
        discount: 10,
        availability: true,
      },
      {
        id: 2,
        name: "Product 2",
        company: "Company B",
        price: 150,
        rating: 4.0,
        discount: 5,
        availability: false,
      },
      // Add more demo products as needed
    ];
    setProducts(demoProducts);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
