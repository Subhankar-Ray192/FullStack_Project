import React from "react";
import "../styles/sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"} Sidebar
      </button>
      <nav className="sidebar-nav">
        <h1>Organization Name</h1>
        <ul>
          <li>Name: Loading</li>
          <li>Members: Loading</li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
