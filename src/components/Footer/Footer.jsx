import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__top">
      <div className="footer__brand">
        <div className="footer__logo">
          <span className="footer-e">e</span>
          <span className="footer-gov">GOV</span>
        </div>
        <p className="footer__tagline">
          Catalysing digital transformation in public service delivery at speed &amp; scale.
        </p>
        <div className="footer__socials">
          {["f", "𝕏", "in", "▶"].map((icon, i) => (
            <a key={i} href="#" className="footer__social">{icon}</a>
          ))}
        </div>
      </div>

      <div className="footer__links-group">
        <h4 className="footer__group-title">Useful Links</h4>
        <ul>
          {["About Us", "Our Impact", "Financials", "Contact Us"].map(l => (
            <li key={l}><a href="#" className="footer__link">{l}</a></li>
          ))}
        </ul>
      </div>

      <div className="footer__links-group">
        <h4 className="footer__group-title">Platform</h4>
        <ul>
          {["Our People", "DIGIT Sandbox", "Resources", "Blog"].map(l => (
            <li key={l}><a href="#" className="footer__link">{l}</a></li>
          ))}
        </ul>
      </div>

      <div className="footer__subscribe">
        <h4 className="footer__group-title">Subscribe Now</h4>
        <p className="footer__subscribe-desc">Receive regular updates of our monthly newsletter DOT — in your inbox.</p>
        <div className="footer__subscribe-form">
          <input type="email" placeholder="Your email address" className="footer__email-input" />
          <button className="footer__subscribe-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div className="footer__bottom">
      <p>© 2026. eGov. All Rights Reserved.</p>
      <div className="footer__bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Conditions</a>
      </div>
    </div>
  </footer>
);

export default Footer;
