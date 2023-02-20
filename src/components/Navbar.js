import React from "react"

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-custom py-3 shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">WINGI STORE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href="" className="btn btn-outline-dark"><i className="fa fa-sign me-1"></i>LOGIN</a>
                            <a href="" className="btn btn-outline-dark"><i className="fa fa-shopping-cart me-1"></i>CART (0)</a>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
