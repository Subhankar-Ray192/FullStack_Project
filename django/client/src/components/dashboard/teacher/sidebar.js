import React from "react";
import "../../../styles/dashboard/sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <i className="bx bx-x"></i> : "Open"}
      </button>
      <nav className="sidebar-nav">
        <div>
          <h1>Organization Name</h1>
          <ul>
            <li>Name: Loading</li>
            <li>Department: Loading</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
