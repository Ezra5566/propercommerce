"use client"; // Use this for Next.js 13+ if inside the `app` folder

import { useState, useEffect } from "react";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  // Fetch products from API
  useEffect(() => {
    fetch("/api/shop/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Add new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/shop/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    if (res.ok) {
      alert("Product added successfully!");
      setNewProduct({ name: "", price: "", description: "", image: "" });
      setProducts([...products, await res.json()]); // Update UI
    } else {
      alert("Error adding product");
    }
  };

  return (
    <div>
      <h1>Admin - Manage Products</h1>

      {/* Add Product Form */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>

      {/* Display Products */}
      <h2>Products List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.name}</strong> - ${product.price}
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}

