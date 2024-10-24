import React, { useState, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/spinner';  // Import the Spinner component

const root_url = 'https://d348-34-41-95-97.ngrok-free.app';  // Replace with your Django backend URL

// Function to check if the user is authenticated
const isAuthenticated = async () => {
  const token = localStorage.getItem('token');  // Get token from localStorage
  if (!token) {
    return false;  // No token, not authenticated
  }

  const url = root_url + '/login/jwt/verify/';

  try {
    // Token verification using POST request, which is required for JWT verify
    const response = await axios.post(url, {
      token: token,  // Send token in the request body
    });

    // If verification is successful, return true
    return response.status === 200;
  } catch (error) {
    console.error('Token verification failed:', error);
    return false;  // Token invalid or expired
  }
};

const PrivateRoute = ({ element, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(null);  // State to manage authentication status

  useEffect(() => {
    const checkAuth = async () => {
      const result = await isAuthenticated();
      setAuthenticated(result);
    };
    checkAuth();
  }, []);

  // While checking authentication, show a loading spinner
  if (authenticated === null) {
    return <Spinner />;  // Show the spinner component while loading
  }

  // If authenticated, render the component, otherwise redirect to login
  return (
    <Route
      {...rest}
      element={authenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
