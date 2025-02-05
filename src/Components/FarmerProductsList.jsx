import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FarmersProductList() {
  const FarmerProductInfo = {
    "data": {
      "products": [
        {
          "id": 1,
          "product_name": "Wheat",
          "price_per_unit": 30,
          "available_quantity": 100,
          "category": "Grains"
        },
        {
          "id": 2,
          "product_name": "Tomatoes",
          "price_per_unit": 50,
          "available_quantity": 0,
          "category": "Vegetables"
        },
        {
          "id": 3,
          "product_name": "Milk",
          "price_per_unit": 40,
          "available_quantity": 200,
          "category": "Dairy"
        },
        {
          "id": 4,
          "product_name": "Apples",
          "price_per_unit": 70,
          "available_quantity": 0,
          "category": "Fruits"
        },
        {
          "id": 5,
          "product_name": "Eggs",
          "price_per_unit": 6,
          "available_quantity": 30,
          "category": "Poultry"
        }
      ]
    }
  };

  const products = FarmerProductInfo.data.products;

  let navigate = useNavigate();

  function handleUpdate(event, id) {

    navigate(`/products/${id}/details`);
  }




  return (
    <div className="container mt-4">
      <table className="table table-bordered table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price Per Unit</th>
            <th scope="col">Available Quantity</th>
            <th scope="col">Total Price</th>
            <th scope="col">Category</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.product_name}</td>
                <td>{product.price_per_unit} Rs</td>
                <td>{product.available_quantity}</td>
                <td>{product.price_per_unit * product.available_quantity} Rs</td>
                <td>{product.category}</td>
                <td><button className="btn btn-warning" onClick={(event) => handleUpdate(event, product.id)} >Update</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No data found! Please add a product.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
