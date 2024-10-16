// src/components/Footer.js
import React from "react";
import "../styles/foot.css"; // Import the CSS file
import "../styles/socials.css";

const Footer = () => {
  return (
    <footer className="foot">
      <p>© 2024 Eureka! All Rights Reserved.</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="social-icons">
          <i className="bx bxl-twitter icon"></i>
        </div>
        <div className="social-icons">
          <i className="bx bxl-facebook-circle icon"></i>
        </div>
        <div className="social-icons">
          <i className="bx bxl-instagram icon"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
