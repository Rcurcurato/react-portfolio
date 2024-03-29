import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css"


function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Router>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Routes>
      <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}


export default App;
