import React, { useState } from "react";
import Sidebar from "../../components/dashboard/teacher/sidebar";
import "../../styles/dashboard/default_style.css";
import Navbar from "../../components/dashboard/nav";
import Footer from "../../components/foot";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev); // Toggle the sidebar state
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`content ${isSidebarOpen ? "expanded" : ""}`}>
          {/* Show button only when sidebar is closed */}
          {!isSidebarOpen && (
            <button className="toggle-btn" onClick={toggleSidebar}>
              <i class="bx bx-sidebar"></i>
            </button>
          )}
          <div className="admin-panel">
            <h1>Table</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
