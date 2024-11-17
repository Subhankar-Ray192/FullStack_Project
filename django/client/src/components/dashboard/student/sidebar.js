import React, { useEffect,useState } from "react";
import "../../../styles/dashboard/sidebar.css";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';


const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [decoded, setDecoded] = useState(null); // Use state to store decoded JWT

  useEffect(() => {
    const accessToken = Cookies.get('access_token');
    console.log('Access Token from Cookie:', accessToken);
    
    if (accessToken) {
      try {
        const decodedData = jwtDecode(accessToken);
        setDecoded(decodedData); // Store the decoded data in state
        console.log('Decoded JWT:', decodedData);
      } catch (error) {
        console.error('Error decoding JWT:', error);
      }
    } else {
      console.error('No access token found in cookies');
    }
  }, []);




  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <i className="bx bx-x"></i> : "Open"}
      </button>
      <nav className="sidebar-nav">
        <div>
          <h1>{decoded ? decoded.org_name : "Loading..."}</h1>
          <ul>
            <li>{decoded ? decoded.student_name : "Loading..."}</li>
            <li>{decoded ? decoded.department : "Loading..."}</li>
            <li>semester</li>
            <li>year</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
