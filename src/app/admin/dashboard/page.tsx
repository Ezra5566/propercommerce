"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/app/admin/layout";

const Dashboard = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(["/sample1.jpg", "/sample2.jpg"]); // Replace with actual API call
  }, []);

  return (
    <Layout>
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img key={index} src={img} alt="Feature" className="rounded-lg w-full h-40 object-cover" />
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;

