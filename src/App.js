import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
import About from "./components/About/index.js";
import Nav from "./components/Navigation/index.js";
import ProjectList from "./components/ProjectList";
import Portfolio from "./components/Portfolio/index.js";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
