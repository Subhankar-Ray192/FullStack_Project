import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Registration from "./pages/register";
import Login from "./pages/login";
import AdminDashboard from "./pages/dashboard/admin";
import StudentDashboard from "./pages/dashboard/student";
import TeacherDashboard from "./pages/dashboard/teacher";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
	<Route path="/register" element={<Registration />} />
	<Route path="/login" element={<Login />} />
	<Route path="/admin-dashboard" element={<AdminDashboard />} />
	<Route path="/student-dashboard" element={<StudentDashboard />} />
	<Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
