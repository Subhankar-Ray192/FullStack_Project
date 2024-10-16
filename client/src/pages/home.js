import React from "react";
import Nav from "../components/nav";
import Footer from "../components/foot";
import "../styles/home.css";
import "../styles/heading.css";

const Home = () => {
  return (
    <div className="home-container">
      <Nav />
      <div className="heading-container">
        <h1>Welcome to Eureka!</h1>
        <p>This is the body of the landing page.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
