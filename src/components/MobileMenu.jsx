import React, { useState } from "react";
import { Link } from "react-router-dom";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Menu */}
      <ul className="desktop-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Hamburger */}
      <button className="hamburger" onClick={() => setIsOpen(true)}>
        ☰
      </button>

      {/* Overlay Background */}
      {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}

      {/* Slide Menu */}
      <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>

        {/* Close Button */}
        <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>

        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default MobileMenu;
