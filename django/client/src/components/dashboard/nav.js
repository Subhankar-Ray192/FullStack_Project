// src/components/Nav.js
import React from "react";
import "../../styles/default_style.css"; // Import the CSS file
import "../../styles/buttons.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-title">Eureka!</div>
      <div>
        <div className="button">Logout</div>
        <div className="button">FAQ</div>
      </div>
    </nav>
  );
};

export default Nav;
