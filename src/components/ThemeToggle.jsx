import { useState, useEffect } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Update HTML attribute and localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`theme-toggle-wrapper ${theme === "dark" ? "dark" : ""}`}
      onClick={toggleTheme}
    >
      <div className={`theme-toggle-slider ${theme === "dark" ? "dark" : ""}`}>
        {theme === "light" ? "☀️" : "🌙"}
      </div>
    </div>
  );
}
