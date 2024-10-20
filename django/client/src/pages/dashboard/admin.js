import React, { useState, useMemo, useCallback } from "react";
import "../styles/dashboard.css";
import Nav from "../components/dashboard/nav";
import Footer from "../components/foot";

// Mock data for the organization and users
const organizationDetails = {
  name: "Tech Innovators",
  email: "contact@techinnovators.com",
  address: "123 Innovation Drive, Tech City",
};

const otherDetails = {
  founded: "2010",
  employees: "500+",
  industry: "Technology",
};

const generateTableData = (length) =>
  Array.from({ length }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    role: index % 2 === 0 ? "Student" : "Teacher",
    status: "Active",
  }));

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [userFilter, setUserFilter] = useState("All");

  const tableData = useMemo(() => generateTableData(50), []);

  // Filtering and paginating data
  const filteredData = useMemo(
    () =>
      tableData.filter(
        (row) => userFilter === "All" || row.role === userFilter
      ),
    [tableData, userFilter]
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const currentRows = useMemo(
    () =>
      filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
      ),
    [filteredData, currentPage, rowsPerPage]
  );

  const handlePageChange = useCallback(
    (pageNumber) => setCurrentPage(pageNumber),
    []
  );
  const handleFilterChange = useCallback((event) => {
    setUserFilter(event.target.value);
    setCurrentPage(1);
  }, []);

  return (
    <div>
      <Nav />
      <div className="dashboard-container">
        <Section title="Organization Details">
          <Detail label="Name" value={organizationDetails.name} />
          <Detail label="Email" value={organizationDetails.email} />
          <Detail label="Address" value={organizationDetails.address} />
        </Section>
        <Section title="Additional Information">
          <Detail label="Founded" value={otherDetails.founded} />
          <Detail label="Number of Employees" value={otherDetails.employees} />
          <Detail label="Industry" value={otherDetails.industry} />
          <FilterDropdown
            filterValue={userFilter}
            onChange={handleFilterChange}
          />
          <Table data={currentRows} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Section>
      </div>
      <Footer />
    </div>
  );
};

const Section = ({ title, children }) => (
  <div
    className={`section-${title === "Organization Details" ? "left" : "right"}`}
  >
    <h2>{title}</h2>
    <div className="details">{children}</div>
  </div>
);

const Detail = ({ label, value }) => (
  <p>
    <strong>{label}:</strong> {value}
  </p>
);

const FilterDropdown = ({ filterValue, onChange }) => (
  <div className="filter-dropdown">
    <label htmlFor="userFilter">Filter Users: </label>
    <select id="userFilter" value={filterValue} onChange={onChange}>
      <option value="All">All</option>
      <option value="Teacher">Teachers</option>
      <option value="Student">Students</option>
    </select>
  </div>
);

const Table = ({ data }) => (
  <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.role}</td>
            <td>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="pagination">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => onPageChange(index + 1)}
        className={currentPage === index + 1 ? "active" : ""}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

export default Dashboard;
