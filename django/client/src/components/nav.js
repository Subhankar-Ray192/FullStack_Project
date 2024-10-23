import React from "react";
import "../styles/default_style.css";
import "../styles/buttons.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-title">Eureka!</div>
      <div>
        <Link to="/register" className="button nav-buttons">
          Register
        </Link>
        <Link to="/login" className="button">
          Login
        </Link>
        <Link className="button">
          FAQ
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
