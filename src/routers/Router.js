import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginForm from "../components/Forms/LoginForm"
import Index from "../pages/dashboard";

export default function Routers() {
  return (
    <BrowserRouter>
      <div class="wrapper">
        {/* available routes */}
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Index />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

