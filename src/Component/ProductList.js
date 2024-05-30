// src/components/ProductList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: "",
    company: "",
    rating: "",
    minPrice: "",
    maxPrice: "",
    availability: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Mocked data since API call is not available
        const data = [
          {
            productName: "Laptop 1",
            price: 2236,
            rating: 4.7,
            discount: 63,
            availability: "yes",
          },
          {
            productName: "Laptop 13",
            price: 1244,
            rating: 4.5,
            discount: 45,
            availability: "out-of-stock",
          },
          {
            productName: "Laptop 3",
            price: 9102,
            rating: 4.44,
            discount: 98,
            availability: "out of-stock",
          },
          {
            productName: "Laptop 11",
            price: 2652,
            rating: null,
            discount: null,
            availability: null,
          },
        ];
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Link
            to={`/product/${index}`}
            key={index}
            className="border p-4 rounded shadow"
          >
            <img
              src={`https://via.placeholder.com/150`}
              alt={product.productName}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{product.productName}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating || "N/A"}</p>
            <p>Discount: {product.discount ? `${product.discount}%` : "N/A"}</p>
            <p>
              Availability:{" "}
              {product.availability === "yes" ? "Available" : "Out of Stock"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
