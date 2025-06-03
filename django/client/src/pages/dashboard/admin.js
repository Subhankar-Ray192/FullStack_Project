import React, { useState } from "react";
import axios from 'axios';
import Sidebar from "../../components/dashboard/admin/sidebar";
import "../../styles/dashboard/default_style.css";
import Navbar from "../../components/dashboard/nav";
import Footer from "../../components/foot";
import Dropdown from "../../components/dashboard/dropdown";
import Table from "../../components/dashboard/admin/table";
import "../../styles/dashboard/icons.css";
import "../../styles/buttons.css"

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showUploadBox, setShowUploadBox] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedTable, setSelectedTable] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  
  const headings = ["Name", "Age", "City", "Occupation"];
  const data = [
    ["Alice", 30, "New York", "Engineer"],
    ["Bob", 25, "San Francisco", "Designer"],
    ["Charlie", 35, "Chicago", "Teacher"],
    ["Diana", 28, "Boston", "Developer"],
  ];

  const handleUploadClick = () => setShowUploadBox(true);
  const handleClosePopup = () => {
    setSelectedFile(null);
    setShowUploadBox(false);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleExportSchema = async () => {
    if (!selectedTable) return alert("Please select a table to export schema.");

    try {
      const response = await axios.post(
        "http://localhost:8000/api/schema/export/",
        { table_name: selectedTable },
        { responseType: "blob" }
      );

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${selectedTable}_schema.xlsx`;
      link.click();
    } catch (error) {
      console.error("Export failed:", error);
      alert("Export failed. Check backend.");
    }
  };

  const handleFileUpload = async () => {
    if (!selectedTable || !selectedFile) {
      alert("Please select a table and choose a file.");
      return;
    }

    const formData = new FormData();
    formData.append("table_name", selectedTable);
    formData.append("excel_file", selectedFile);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/schema/import/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("File imported successfully!");
      handleClosePopup();
    } catch (error) {
      console.error("Import failed:", error);
      alert("Import failed. Check backend.");
    }
  }; 

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`content ${isSidebarOpen ? "expanded" : ""}`}>
          {!isSidebarOpen && (
            <button className="toggle-btn" onClick={toggleSidebar}>
              <i className="bx bx-sidebar"></i>
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
                onChange={(value) => setSelectedTable(value)}
              />
              <div className="icons">
                <i className="bx bx-plus-circle"></i>
                <i className="bx bx-edit-alt"></i>
                <i className="bx bx-minus-circle"></i>
                <button onClick={handleUploadClick} className="button" style={{ marginLeft: "10px" }}>
                  <i className="bx bx-upload"></i>
                </button>
              </div>
            </div>
            <Table headings={headings} data={data} />
          </div>
        </div>
      </div>
      <Footer />

      {showUploadBox && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "35%",
            width: "30%",
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "20px",
            zIndex: 9999,
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ textAlign: "right" }}>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={handleClosePopup}
            >
              ❌
            </span>
          </div>

          <h3 style={{ marginBottom: "15px", textAlign: "center" }}>
            Bulk Operation
          </h3>

          <div style={{ marginBottom: "10px", textAlign: "center" }}>
            <button onClick={handleExportSchema} className="button">
              <i className="bx bx-cloud-download"></i>
            </button>
          </div>

          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <label htmlFor="excel-file" className="button">
              <i className="bx bxs-file-find"></i>
              <input
                type="file"
                id="excel-file"
                accept=".xlsx,.xls"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </label>
          </div>

          {selectedFile && (
            <div
              style={{
                fontSize: "14px",
                marginBottom: "10px",
                color: "#333",
                textAlign: "center",
              }}
            >
              Selected File: <strong>{selectedFile.name}</strong>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={handleFileUpload} className="button">
              <i className="bx bx-cloud-upload"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
