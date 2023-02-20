import React, { useState, useEffect } from "react";

import { Form, Button, Navbar } from "react-bootstrap";
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // submit form data  
  };
  const [users, setUsers] = useState([])
  let componentMounted = true

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("https://fakestoreapi.com/users");

      if (componentMounted) {
        setUsers(await response.clone().json());
      }

      return () => {
        componentMounted = false;
      }
    }
    getUsers();
  }, [])
  return (
    <div className="main">
      <Navbar />
      <Form onSubmit={handleSubmit}>

        <Form.Group controlId="email">
          <Form.Label></Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Type your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Type your Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Form.Label></Form.Label>
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
