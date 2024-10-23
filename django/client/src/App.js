import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Registration from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
	<Route path="/register" element={<Registration />} />
	<Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
