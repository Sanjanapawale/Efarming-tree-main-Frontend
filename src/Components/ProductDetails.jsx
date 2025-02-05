import React, { useState } from 'react';

export default function ProductDeatils() {
  const [product, setProduct] = useState({
    product_name: '',
    category: '',
    available_quantity: '',
    price_per_unit: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the product
    // For example, sending the data to an API or storing in the state
    console.log("Product Data Submitted: ", product);
    // Reset the form after submission if needed
    setProduct({
      product_name: '',
      category: '',
      available_quantity: '',
      price_per_unit: '',
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add/Update Product Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="product_name">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            name="product_name"
            value={product.product_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="available_quantity">Available Quantity</label>
          <input
            type="number"
            className="form-control"
            id="available_quantity"
            name="available_quantity"
            value={product.available_quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="price_per_unit">Price per Unit (Rs)</label>
          <input
            type="number"
            className="form-control"
            id="price_per_unit"
            name="price_per_unit"
            value={product.price_per_unit}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3 w-100">Save</button>
      </form>
    </div>
  );
}
