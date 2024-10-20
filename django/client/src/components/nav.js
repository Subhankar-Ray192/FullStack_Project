// src/components/Nav.js
import React from "react";
import "../styles/default_style.css";
import "../styles/button.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-title">Eureka!</div>
      <div>
        <div className="button nav-buttons">Register</div>
        <div className="button">Login</div>
      </div>
    </nav>
  );
};

export default Nav;
