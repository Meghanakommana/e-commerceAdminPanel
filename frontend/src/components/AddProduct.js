import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      name: formData.name,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
    };

    try {
      await axios.post('http://127.0.0.1:8000/api/products/', dataToSend);
      setMessage('✅ Product added successfully!');
      setFormData({ name: '', price: '', stock: '' }); // reset form
    } catch (error) {
      console.error('❌ Error adding product:', error.response?.data || error.message);
      setMessage('❌ Failed to add product. Check the console for details.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      {message && <div className="mb-4 text-sm">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Name"
          className="border p-2 w-full"
          required
        />
        <input
          name="price"
          type="number"
          step="0.01"
          onChange={handleChange}
          value={formData.price}
          placeholder="Price"
          className="border p-2 w-full"
          required
        />
        <input
          name="stock"
          type="number"
          onChange={handleChange}
          value={formData.stock}
          placeholder="Stock"
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
