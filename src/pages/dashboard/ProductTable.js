import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

const ProductTable = ({ loggedInUser }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      setProducts(await response.clone().json());
      // localStorage.setItem("products", JSON.stringify(products));
    }
    const data = localStorage.getItem(`${loggedInUser}_products`);
    if (data) {
      setProducts(JSON.parse(data));
    } else {
      getProducts()
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // generate a random id for the product
    const id = uuidv4();
    setProduct({ ...product, id });
    //add new product to existing ones
    let newProducts = [...products];
    //check if the product already exists and edit it instead or add it as the new one
    const index = newProducts.findIndex((p) => p.id === product.id);
    if (index >= 0) {
      newProducts[index] = product;
    } else {
      newProducts.push(product); 
    }
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
    localStorage.setItem(`${loggedInUser}_products`, JSON.stringify(newProducts));
    setProduct({});
  };

  //function to handle deleted data
  const handleDelete = (id) => {
    const newProducts = products.filter((p) => p.id !== id);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
    localStorage.setItem(`${loggedInUser}_products`, JSON.stringify(newProducts));
  };

  
  const handleImageChange = (event) => {
    const file = event.target.value;
    console.log(event.target.value)
    setProduct({ ...product, image: file });
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      
      <h1>Product Table</h1>
      <div className="d-flex flex-row justify-content-around">
        {/* product table */}
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th className="w-50">Name</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                <img src={p.image} alt={p.title} width="50" />
              </td>
              <td>{p.title}</td>
              <td>{p.category}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => setProduct(p)}
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(p.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        </Table>

        {/* Product form */}
        
       <Form onSubmit={handleSubmit}>
       <h1>{product.id ? "Edit Product" : "Add Product"}</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={product.title || ""}
            onChange={(e) =>
              setProduct({ ...product, title: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={product.category || ""}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            required
          >
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="men's Clothing">Men's Clothing</option>
            <option value="women's Clothing">Women's Clothing</option>
            <option value="Jewelery">Jewelery</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            accept="assets/images/*"
            onChange={handleImageChange}
            required={!product.image}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Product"
              style={{ maxWidth: "200px", marginTop: "10px" }}
            />
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="d-flex justify-content-center">
          {product.id ? "Update" : "Add"}
        </Button>
      </Form>
      </div>
    </>
  );
};

export default ProductTable;
