import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../components/Home";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/Login/Login"
import AddProduct from "../dashboard/forms/add-form/AddForm";
import UpdateProduct from "../dashboard/forms/update-form/UpdateForm";
import Dashboard from "../dashboard/Dashboard";

export default function Routers() {
  const user = localStorage.getItem('user');
  return (
    <BrowserRouter>
      <div class="wrapper">
        <div></div>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddProduct />} />
          <Route exact path="/update" element={<UpdateProduct />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

