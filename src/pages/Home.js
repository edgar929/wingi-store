import React from "react"
import Navbar from "../components/Navbar";
import Products from "./Products";

//homepage of the project
const Home = () => {
    return (
        <div className="hero">
            <Navbar />
            <div className="card text-white border-0 bg-custom">
                <img src="/assets/bg-1.png" className="card-img" alt="..." height="650px" />
            </div>
            {/* calling the product component */}
            <Products />
        </div>
    )
};

export default Home;
