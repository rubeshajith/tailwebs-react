import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <a href="/" className="navbar__logo">
          <span className="logo-e">e</span>
          <span className="logo-gov">GOV</span>
          <span className="logo-sub">foundation</span>
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {["About Us", "Areas of Work", "Products & Solutions", "Our Platform", "Ecosystem", "Resources"].map((item) => (
            <li key={item}>
              <a href="#" className="navbar__link">
                {item}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="navbar__search" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <span className="navbar__lang">ENG ▾</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
