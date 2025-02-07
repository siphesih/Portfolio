import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";  // Your Navbar component
import Home from "../landingPage/Home";  // Your HomePage component
//import LinkPage from "./";  // Your new page component

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
