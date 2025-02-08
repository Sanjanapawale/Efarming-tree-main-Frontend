import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    uid: "",
    ptid: "",
    qty: "",
    price: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:8023/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      alert("Product added successfully!");
      navigate("/productdetail");
      setFormData({ uid: "", ptid: "", qty: "", price: "" }); // Reset form
    } else {
      alert("Failed to add product");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="form">
      <div className='card shadow-sm'>
        <div className="card-header bg-primary text-white text-center">
      <h3 >Add Product</h3></div>
      <div className="mb-3">
        <label className='form-label'>User ID:</label>
        <input className="form-control" type="number" name="uid" value={formData.uid} onChange={handleChange} required />
        </div>
        <div className="mb-3">
        <label className='form-label'>Product Type ID:</label>
        <input className="form-control" type="number" name="ptid" value={formData.ptid} onChange={handleChange} required />
        </div>
        <div className="mb-3">
        <label className='form-label'>Quantity:</label>
        <input className="form-control" type="number" name="qty" value={formData.qty} onChange={handleChange} required />
        </div>
        <div className="mb-3">
        <label className='form-label'>Price:</label>
        <input className="form-control" type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <button type='button' className='btn btn-primary mb-3 w-100' onClick={handleSubmit}>Save</button>
        <button type="button" className='btn btn-secondary mb-3 w-100' 
        onClick={() => setFormData({ uid: "", ptid: "", qty: "", price: "" })}>
            Clear</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
