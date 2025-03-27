// app/admin/layout.tsx
"use client;"
import React, { use } from "react";
import Link from "next/link";
import { FaTachometerAlt, FaBox, FaShoppingCart, FaCog } from "react-icons/fa";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Admin Panel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-900 text-white min-h-screen p-6">
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
          <nav className="flex flex-col gap-4">
            <Link href="/admin/dashboard" className="flex items-center gap-2 hover:text-gray-300">
              <FaTachometerAlt /> Dashboard
            </Link>
            <Link href="/admin/products" className="flex items-center gap-2 hover:text-gray-300">
              <FaBox /> Products
            </Link>
            <Link href="/admin/orders" className="flex items-center gap-2 hover:text-gray-300">
              <FaShoppingCart /> Orders
            </Link>
            <Link href="/admin/features" className="flex items-center gap-2 hover:text-gray-300">
              <FaCog /> Features
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        {/* <div className="flex-grow p-6 w-full">
           <header className="bg-white shadow p-4 rounded-md mb-4 flex justify-between items-center">
             <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
             <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
          </header>*/}
        <main>{children}</main>
        {/* </div>*/}
      </body>
    </html>
  );
};

export default AdminLayout;

