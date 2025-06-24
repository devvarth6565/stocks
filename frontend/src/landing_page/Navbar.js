import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useAuth } from "./GeneralContext";
function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optionally, call your backend to clear cookies/session
    logout();
    navigate("/signup");
  };

  return (
  
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#fff"}}>
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img src="media/logo.svg" style={{width:"35%"}}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex" role="search">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!isLoggedIn ? (
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={"/signup"}>
                    Signup
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <button className="nav-link active" style={{background: "none", border: "none"}} onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/product"}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/support"}>
                  Support
                </Link>
              </li>
                
                  
            </ul>
              
            </form>
          </div>
        </div>
      </nav>
  
  );
}

export default Navbar;
