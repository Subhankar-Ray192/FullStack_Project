// src/components/Nav.js
import React from "react";
import "../../styles/default_style.css"; // Import the CSS file
import "../../styles/buttons.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-title">Eureka!</div>
      <div>
        <Link to="/" className="button">Logout</Link>
        <div className="button">FAQ</div>
      </div>
    </nav>
  );
};

export default Nav;
