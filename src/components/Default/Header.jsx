import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img src="/LOGO_IPACERS_fullcolor.png" alt="iPACERS Project" />
          </a>
        </div>
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <a
              href="/"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/about"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              About the Project
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/team"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Team
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/research"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Research
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/outreach"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Outreach
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/publications"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Publications
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
