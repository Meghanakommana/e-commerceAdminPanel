import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ProductTable from './components/ProductTable';
import AddProduct from './components/AddProduct'; // ⬅️ Import the new component
import EditProduct from './components/EditProduct';



function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-4 bg-gray-100 min-h-full overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<ProductTable />} />
              <Route path="/products/add" element={<AddProduct />} />
              <Route path="/products/edit/:id" element={<EditProduct />} />
              {/* Later we’ll add <Route path="/orders" /> etc. */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
