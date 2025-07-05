import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: '', price: '', stock: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/products/${id}/`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/products/${id}/`, product)
      .then(() => navigate('/products'))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={product.name} onChange={handleChange} className="block mb-2 p-2 border w-full" placeholder="Product Name" />
        <input type="number" name="price" value={product.price} onChange={handleChange} className="block mb-2 p-2 border w-full" placeholder="Price" />
        <input type="number" name="stock" value={product.stock} onChange={handleChange} className="block mb-2 p-2 border w-full" placeholder="Stock" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
