import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login/default_style.css";
import "../styles/buttons.css";
import "../styles/card.css";
import "../styles/input.css";
import "../styles/login/font.css";
import axios from "axios";

const root_url = ""; // Define your backend URL here

const Login = () => {
  const [organizationLoginForm, setOrganizationLoginForm] = useState({
    organizationEmail: "",
    organizationPassword: "",
  });

  const [individualLoginForm, setIndividualLoginForm] = useState({
    individualType: "",
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

  const navigate = useNavigate();

  // Handle changes for individual login form
  const handleIndividualChange = (e) => {
    const { name, value } = e.target;
    setIndividualLoginForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle organization login form submission
  const handleOrgSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      data: {
        type: "OrganizationLoginView",
        attributes: {
          email: organizationLoginForm.organizationEmail,
          password: organizationLoginForm.organizationPassword,
        },
      },
    };

    const url = root_url + "/authorize/organization/submit/";

    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/vnd.api+json",
        },
      });
      console.log("Response from Organization Login:", response.data);
      
      if(response.status === 200){
         navigate("/admin-dashboard");
      }

    } catch (error) {
      console.error(
        "Error during organization login:",
        error.response?.data || error
      );
    }
  };

  // Handle individual login form submission
  const handleIndividualSubmit = async (e) => {
    e.preventDefault();


    let url = "";
    let payload = "";

    if (individualLoginForm.individualType === "teacher") {
      url = root_url + "/authorize/teacher/submit/";
      
      payload = {
      data: {
        type: "TeacherLoginView",
        attributes: {
          email: individualLoginForm.individualEmail,
          password: individualLoginForm.individualPassword,
        },
      },
    };
    
    } 
    else {
      url = root_url + "/authorize/student/submit/";
      payload = {
      data: {
        type: "StudentLoginView",
        attributes: {
          email: individualLoginForm.individualEmail,
          password: individualLoginForm.individualPassword,
        },
      },
    };

    }

    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/vnd.api+json",
        },
      });
      console.log("Response from Individual Login:", response.data);

      if ((individualLoginForm.individualType === "teacher") && (response.status === 200)) {
          navigate("/teacher-dashboard");
      }

      if((individualLoginForm.individualType === "student") && (response.status === 200)) {
          navigate("/student-dashboard");
      }

    } catch (error) {
      console.error(
        "Error during individual login:",
        error.response?.data || error
      );
    }
  };

  return (
    <div className="login-container">
      {/* Organization Admin Login Form */}
      <div className="card">
        <h2>Organization Login</h2>
        <form onSubmit={handleOrgSubmit}>
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
          <div className="button" onClick={handleOrgSubmit}>
            Submit
          </div>
          <div className="link">Forget Password?</div>
        </form>
      </div>

      {/* Individual Login Form */}
      <div className="card">
        <h2>Individual Login</h2>
        <form onSubmit={handleIndividualSubmit}>
           <div>
            <select
              name="individualType"
              value={individualLoginForm.individualType}
              onChange={handleIndividualChange}
              required
              className="input" // Ensures consistent styling with other inputs
            >
              <option value="" disabled hidden>Select Individual Type</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
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
          <div className="button" onClick={handleIndividualSubmit}>
            Submit
          </div>
          <div className="link">Forget Password?</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
