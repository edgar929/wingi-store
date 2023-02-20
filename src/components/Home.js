import React from "react"
import Navbar from "./Navbar";
import Products from "./Products";

const Home = (props) => {
    return (
        <div className="hero">
            <Navbar />
            <div className="card text-white border-0 bg-custom">
                <img src="/assets/bg-1.png" className="card-img" alt="..." height="650px" />
            </div>
            <Products />
        </div>
    )
};

export default Home;
