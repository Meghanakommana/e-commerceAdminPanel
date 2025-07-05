import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/products" className="hover:bg-gray-700 p-2 rounded">Products</Link>
        {/*<Link to="/orders" className="hover:bg-gray-700 p-2 rounded">Order</Link>
        <Link to="/analytics" className="hover:bg-gray-700 p-2 rounded">Analytics</Link>/*}

        {/* Add more like: <Link to="/orders">Orders</Link> */}
        <Link to="/products/add" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" >
        Add product
        </Link>

      </nav>
    </div>
  );
}

export default Sidebar;
