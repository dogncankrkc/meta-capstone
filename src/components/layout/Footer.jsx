import React from "react";
import { Link } from "react-router-dom";
import AppLogo from "../../assets/images/Logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={AppLogo} alt="Little Lemon Logo" />
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="footer-nav-section">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Menu</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
              <li><Link to="/booking">Reserve a Table</Link></li>
              <li><Link to="/">Login</Link></li>
            </ul>
          </div>

          <div className="footer-nav-section">
            <ul>
              <li><span>Address</span></li>
              <li><span>Phone Number</span></li>
              <li><span>Email</span></li>
            </ul>
          </div>

          <div className="footer-nav-section">
            <ul>
              <li><span>Facebook</span></li>
              <li><span>Instagram</span></li>
              <li><span>Twitter</span></li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}