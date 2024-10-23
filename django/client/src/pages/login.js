import React, { useState } from "react";
import "../styles/login/default_style.css";
import "../styles/button.css";
import "../styles/card.css";
import "../styles/input.css";
import "../styles/login/font.css";

const Login = () => {
  const [organizationLoginForm, setOrganizationLoginForm] = useState({
    organizationName: "",
    organizationEmail: "",
    organizationPassword: "",
  });

  const [individualLoginForm, setIndividualLoginForm] = useState({
    organizationName: "",
    individualEmail: "",
    individualPassword: "",
  });

  // Handle changes for organization login form
  const handleOrgChange = (e) => {
    const { name, value } = e.target;
    setOrganizationLoginForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle changes for individual login form
  const handleIndividualChange = (e) => {
    const { name, value } = e.target;
    setIndividualLoginForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle organization login form submission
  const handleOrgSubmit = (e) => {
    e.preventDefault();
    console.log("Organization Login Data:", organizationLoginForm);
    // Add your organization login logic here
  };

  // Handle individual login form submission
  const handleIndividualSubmit = (e) => {
    e.preventDefault();
    console.log("Individual Login Data:", individualLoginForm);
    // Add your individual login logic here
  };

  return (
    <div className="login-container">
      {/* Organization Admin Login Form */}
      <div className="card">
        <h2>Organization Login</h2>
        <form onSubmit={handleOrgSubmit}>
          <div>
            <input
              type="text"
              name="organizationName"
              placeholder="Organization Name"
              value={organizationLoginForm.organizationName}
              onChange={handleOrgChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="organizationEmail"
              placeholder="Organization Email"
              value={organizationLoginForm.organizationEmail}
              onChange={handleOrgChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="organizationPassword"
              placeholder="Organization Password"
              value={organizationLoginForm.organizationPassword}
              onChange={handleOrgChange}
              required
            />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
          <div className="link">Forget Password?</div>
        </form>
      </div>

      {/* Individual Login Form */}
      <div className="card">
        <h2>Individual Login</h2>
        <form onSubmit={handleIndividualSubmit}>
          <div>
            <input
              type="text"
              name="organizationName"
              placeholder="Organization Name"
              value={individualLoginForm.organizationName}
              onChange={handleIndividualChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="individualEmail"
              placeholder="Individual Email"
              value={individualLoginForm.individualEmail}
              onChange={handleIndividualChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="individualPassword"
              placeholder="Individual Password"
              value={individualLoginForm.individualPassword}
              onChange={handleIndividualChange}
              required
            />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
          <div className="link">Forget Password?</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
