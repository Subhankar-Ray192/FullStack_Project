import React, { useState } from "react";
import Sidebar from "../../components/dashboard/admin/sidebar";
import "../../styles/dashboard/default_style.css";
import Navbar from "../../components/dashboard/nav";
import Footer from "../../components/foot";
import Dropdown from "../../components/dashboard/dropdown";
import Table from "../../components/dashboard/admin/table";
import "../../styles/dashboard/icons.css"

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev); // Toggle the sidebar state
  };
  
  const headings = ["Name", "Age", "City", "Occupation"];

  const data = [
    ["Alice", 30, "New York", "Engineer"],
    ["Bob", 25, "San Francisco", "Designer"],
    ["Charlie", 35, "Chicago", "Teacher"],
    ["Diana", 28, "Boston", "Developer"],
    ["Diana", 28, "Boston", "Developer"],
    ["Diana", 28, "Boston", "Developer"],
    ["Diana", 28, "Boston", "Developer"],
    ["Diana", 28, "Boston", "Developer"],
    ["Diana", 28, "Boston", "Developer"],
    ["Diana", 28, "Boston", "Developer"],
    ["Diana", 28, "Boston", "Developer"],
  ];

     

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
            <div>
              <Dropdown
                options={[
                  "Course",
                  "Department",
                  "Student",
                  "Teacher",
                  "Schedule",
                ]}
                placeholder="Select Table"
              />
              <div className="icons">
                <i class="bx bx-cloud-upload"></i>
                <i class="bx bx-plus-circle"></i>
                <i class="bx bx-edit-alt"></i>
                <i class="bx bx-minus-circle"></i>
              </div>
            </div>
            <Table headings={headings} data={data} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
