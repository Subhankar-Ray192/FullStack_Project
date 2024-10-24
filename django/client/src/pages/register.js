import React, { useState } from "react";
import "../styles/register/default_style.css";
import "../styles/buttons.css";
import "../styles/card.css";
import "../styles/input.css";
import "../styles/register/font.css";
import axios from "axios";

const root_url = ""; // Define your backend URL here

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

  const handleOrgSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting

    const payload = {
      data: {
        type: "OrganizationRegisterView",
        attributes: {
          data: "Organization Registration",
          org_name: organizationForm.organizationName,
          org_email: organizationForm.organizationEmail,
          org_password: organizationForm.organizationPassword,
        },
      },
    };

    const url = root_url + "register/organization/submit/";

    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/vnd.api+json",
        },
      });
      console.log("Organization registered successfully:", response.data);
    } catch (error) {
      console.error("Error during organization registration:", error.response?.data || error);
    }
  };

  const handleIndividualSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting

    const payload = {
      data: {
        type: "IndividualRegisterView",
        attributes: {
          data: "Individual Registration",
          organizationName: individualForm.organizationName,
          individualType: individualForm.individualType,
          individualName: individualForm.individualName,
          rollNumber: individualForm.rollNumber,
          individualPassword: individualForm.individualPassword,
          department: individualForm.department,
        },
      },
    };

    let url = "";

    if (individualForm.individualType === "Teacher") {
      url = root_url + "register/teacher/submit/";
    } else {
      url = root_url + "register/student/submit/";
    }

    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/vnd.api+json",
        },
      });
      console.log("Individual registered successfully:", response.data);
    } catch (error) {
      console.error("Error during individual registration:", error.response?.data || error);
    }
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
          <div className="button" onClick={handleOrgSubmit}>Submit</div>
          <div className="link">Forget Password?</div>
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
          <div className="button" onClick={handleIndividualSubmit}>Submit</div>
          <div className="link">Forget Password?</div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
