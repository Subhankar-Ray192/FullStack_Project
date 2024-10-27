import React from "react";
import "../../../styles/dashboard/sidebar.css";
import "../../../styles/buttons.css";

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
            <li>Members: Loading</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div className="button">Register Rooms</div>
            </li>
            <li>
              <div className="button">Register Courses</div>
            </li>
            <li>
              <div className="button">Register Departments</div>
            </li>
            <li>
              <div className="button">Generate Schedule</div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
