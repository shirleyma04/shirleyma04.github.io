import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import "./styles/variables.css";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="page-wrapper">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="background-gradient"></div>
      <ThemeToggle />
      <Header />
      <ScrollToTop />
      <main className="page-content" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
