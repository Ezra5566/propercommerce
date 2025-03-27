"use client";
import React, { useState } from "react";
import Layout from "@/app/admin/layout";
const Products = () => {
  //   const products = [];
  //
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: "$100" },
    { id: 2, name: "Product 2", price: "$150" },
  ]);
  //
  return (
    <Layout>
      <h2 className="text-xl font-bold">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;

