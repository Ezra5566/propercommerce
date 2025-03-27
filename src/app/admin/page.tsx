// app/admin/page.tsx
import React from "react";
import Layout from "./layout";

const AdminPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600">1,245</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold">Active Sessions</h2>
          <p className="text-3xl font-bold text-green-600">87</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold">Pending Requests</h2>
          <p className="text-3xl font-bold text-red-600">12</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="border-b pb-2">User <strong>John Doe</strong> updated profile</li>
          <li className="border-b pb-2">New admin <strong>Lisa Smith</strong> added</li>
          <li className="border-b pb-2">Settings updated by <strong>Admin</strong></li>
        </ul>
      </div>
    </Layout>
  );
};

export default AdminPage;

