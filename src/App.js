import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import "./styles/variables.css";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="page-wrapper">
      <div className="background-gradient"></div>
      <ThemeToggle />
      <Header />
      <main className="page-content">
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
