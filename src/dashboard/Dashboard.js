// import './Dashboard.css'
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70, hide: true },
//   { field: 'title', headerName: 'Name', width: 350 },
//   {
//     field: 'image', headerName: 'Product Image', width: 150,

//     renderCell: (params) => {
//       return (
//         <div className="cellWithImg">
//           <img className="cellImg" src={params.row.image} alt="avatar" />

//         </div>
//       );
//     },
//   },
//   { field: 'category', headerName: 'Category', width: 150 },
//   { field: 'price', headerName: 'Price', width: 150 },


// ];

// const Dashboard = () => {
//   const [data, setData] = useState([])
//   const [products, setProducts] = useState([])
//   let temp = [data]
//   const handleDelete = (id) => {

//   };
//   const handleView = (id) => {

//   };
//   useEffect(() => {
//     handleView()
//   }, [])

//   let componentMounted = true
//   useEffect(() => {
//     const getProducts = async () => {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const newProducts = localStorage.getItem('product')
//       setProducts(newProducts);
//       console.log("newProducts",newProducts)

//       if (componentMounted) {
//         setData(await response.clone().json());
//       }
//      let prod = [...data, newProducts];
//      temp.push(newProducts)
//      console.log("prod", products)
//       setProducts(prod);
//       console.log("prod", products)
//       return () => {
//         componentMounted = false;
//       }
//     }
//     getProducts();
//   }, [])
//   temp.push(products)
//   console.log("data", temp)

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 300,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <div>
//               <Link to={`/update/${params.row.id}`} style={{ textDecoration: "none" }}>
//                 <div className="btn btn-success" onClick={() => handleView(params.row._id)} >Update</div>
//               </Link>
//             </div>
//             <Link to={`/view-product-details?id=${params.row.id}`} style={{ textDecoration: "none" }}>
//               <div className="btn btn-primary" onClick={() => handleView(params.row._id)} >View</div>

//             </Link>

//             <div
//               className="btn btn-danger"
//               onClick={() => handleDelete(params.row._id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];

//   return (
//     <>
//       <div className="datatableTitle">
//         <div className='tableTitle'>
//         </div>

//         <Link to="/add" className="link">
//           Add New
//         </Link>
//       </div>
//       <div style={{ height: 500, width: '85%', paddingLeft: '300px', paddingTop: '30px', paddingRight: '100px' }}>

//         <DataGrid
//           rows={temp}
//           columns={columns.concat(actionColumn)}
//           pageSize={7}
//           getRowId={(row) => row.id}
//           rowsPerPageOptions={[7]}
//           checkboxSelection />
//       </div></>
//   );
// }


// export default Dashboard;

import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      setProducts(await response.clone().json());
      localStorage.setItem("products", JSON.stringify(products));
    }
    const data = localStorage.getItem("products");
    if (data) {
      setProducts(JSON.parse(data));
    } else {
      getProducts()
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === product.id);
    if (index >= 0) {
      newProducts[index] = product;
    } else {
      newProducts.push(product);
    }
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
    setProduct({});
  };

  const handleDelete = (id) => {
    const newProducts = products.filter((p) => p.id !== id);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  return (
    <>
      <h1>Product Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
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
      <h1>{product.id ? "Edit Product" : "Add Product"}</h1>
      <Form onSubmit={handleSubmit}>
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
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home">Home</option>
            <option value="Beauty">Beauty</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            value={product.image || ""}
            onChange={(e) =>
              setProduct({ ...product, image: e.target.value })
            }
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {product.id ? "Update" : "Add"}
        </Button>
      </Form>
    </>
  );
};

export default Dashboard;
