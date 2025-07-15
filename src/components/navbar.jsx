import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-name">Adv. Shantanu Sahu</span>
      </div>
      
      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <div className="navbar-links">
          <Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="navbar-link" onClick={() => setMenuOpen(false)}>
            About Me
          </Link>
          <Link to="/services" className="navbar-link" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/contact" className="navbar-link" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
        <a href="tel:+919876543210" className="navbar-contact">
          +91-9876543210
        </a>
      </div>

      <button
        className={`navbar-mobile-toggle ${menuOpen ? "active" : ""}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="hamburger" />
        <span className="hamburger" />
        <span className="hamburger" />
      </button>
    </nav>
  );
};

export default Navbar;