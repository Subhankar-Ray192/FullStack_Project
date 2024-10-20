import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Registration from "./pages/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
	<Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
