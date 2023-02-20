import React from "react"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"

const Navbar = ({loggedInUser, onLogout}) => {
  
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-custom py-3 shadow-sm ">
                <div className="container-fluid d-flex justify-content-center">
                    <Link to="/" className="navbar-brand" href="#">WINGI STORE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#">Contact</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            {loggedInUser ? <Button variant="primary" onClick={onLogout}>
                                Logout
                                </Button> :
                            <Link to="/dashboard" className="btn btn-outline-dark"><i className="fa fa-sign me-1"></i>LOGIN</Link>
                            }
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
