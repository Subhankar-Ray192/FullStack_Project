// RegistrationPage.js
import React, { useState } from "react";
import "../styles/register.css";
import "../styles/button.css";
import "../styles/card.css";
import "../styles/input.css";
import "../styles/registration/heading.css";
import Footer from "../components/foot.js";

const Registration = () => {
  const [organizationForm, setOrganizationForm] = useState({
    organizationName: "",
    organizationEmail: "",
    organizationPassword: "",
  });

  const [individualForm, setIndividualForm] = useState({
    organizationName: "",
    individualType: "",
    individualName: "",
    rollNumber: "",
    individualPassword: "",
    department: "",
  });

  const handleOrgChange = (e) => {
    const { name, value } = e.target;
    setOrganizationForm({ ...organizationForm, [name]: value });
  };

  const handleIndividualChange = (e) => {
    const { name, value } = e.target;
    setIndividualForm({ ...individualForm, [name]: value });
  };

  const handleOrgSubmit = (e) => {
    e.preventDefault();
    console.log("Organization Registration:", organizationForm);
    // Add your form submission logic here
  };

  const handleIndividualSubmit = (e) => {
    e.preventDefault();
    console.log("Individual Registration:", individualForm);
    // Add your form submission logic here
  };

  return (
    <div className="registration-container">
      {/* Organization Registration Form */}
      <div className="card">
        <h2>Organization</h2>
        <form onSubmit={handleOrgSubmit}>
          <div>
            <input
              type="text"
              name="organizationName"
              placeholder="Organization Name"
              value={organizationForm.organizationName}
              onChange={handleOrgChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="organizationEmail"
              placeholder="Organization Email"
              value={organizationForm.organizationEmail}
              onChange={handleOrgChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="organizationPassword"
              placeholder="Organization Administrator Password"
              value={organizationForm.organizationPassword}
              onChange={handleOrgChange}
              required
            />
          </div>
          <div className="button">Submit</div>
        </form>
      </div>

      {/* Individual Registration Form */}
      <div className="card">
        <h2>Individual</h2>
        <form onSubmit={handleIndividualSubmit}>
          <div>
            <input
              type="text"
              name="organizationName"
              placeholder="Organization Name"
              value={individualForm.organizationName}
              onChange={handleIndividualChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="individualType"
              placeholder="Individual Type"
              value={individualForm.individualType}
              onChange={handleIndividualChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="individualName"
              placeholder="Individual Name"
              value={individualForm.individualName}
              onChange={handleIndividualChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="rollNumber"
              placeholder="University Roll Number"
              value={individualForm.rollNumber}
              onChange={handleIndividualChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="individualPassword"
              placeholder="Individual Password"
              value={individualForm.individualPassword}
              onChange={handleIndividualChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={individualForm.department}
              onChange={handleIndividualChange}
              required
            />
          </div>
          <div className="button">Submit</div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
