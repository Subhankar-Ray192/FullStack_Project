import React, { useState } from "react";
import "../styles/register/default_style.css";
import "../styles/button.css";
import "../styles/card.css";
import "../styles/input.css";
import "../styles/register/font.css";
import Footer from "../components/foot.js";
import axios from "axios";

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

  const handleOrgSubmit = async () => {
    const payload = {
      data: {
        type: "OrganizationRegisterView",
        attributes: {
          org_name: organizationForm.organizationName,
          org_email: organizationForm.organizationEmail,
          org_password: organizationForm.organizationPassword,
        },
      },
    };

    const url = "https://root/register/organisation/submit";
    
    try {
       const response = await axios.post(url, payload, {
       headers: {
        "Content-Type": "application/vnd.api+json",
         },
      });
    }catch (error){
        console.error("Error during individual registration:", error.response?.data || error);
    }
 };

  const handleIndividualSubmit = async () => {
    const payload = {
      data: {
        type: "IndividualRegisterView",
        attributes: {
          organizationName: individualForm.organizationName,
          individualType: individualForm.individualType,
          individualName: individualForm.individualName,
          rollNumber: individualForm.rollNumber,
          individualPassword: individualForm.individualPassword,
          department: individualForm.department,
        },
      },
    };

    const url = "https://root/register/individual/submit";

    try {
       const response = await axios.post(url, payload, {
       headers: {
        "Content-Type": "application/vnd.api+json",
         },
      });
    }catch (error){
        console.error("Error during individual registration:", error.response?.data || error);
    }
  };

  return (
    <div className="registration-container">
      {/* Organization Registration Form */}
      <div className="card">
        <h2>Organization</h2>
        <form onSubmit={(e) => e.preventDefault()}>
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
          <div className="button" onClick={handleOrgSubmit}>Submit</div>
          <div className="link">Forget Password?</div>
        </form>
      </div>

      {/* Individual Registration Form */}
      <div className="card">
        <h2>Individual</h2>
        <form onSubmit={(e) => e.preventDefault()}>
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
          <div className="button" onClick={handleIndividualSubmit}>Submit</div>
          <div className="link">Forget Password?</div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
