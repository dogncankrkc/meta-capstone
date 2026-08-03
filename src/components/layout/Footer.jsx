import React from "react";
import AppLogo from "../../assets/images/Logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={AppLogo} alt="Little Lemon Logo" />
        </div>

        <nav className="footer-nav">
          <div className="footer-nav-section">
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#hero">About</a>
              </li>
              <li>
                <a href="#specials">Menu</a>
              </li>
              <li>
                <a href="#testimonials">Reservations</a>
              </li>
              <li>
                {" "}
                <a href="#about">Order Online</a>{" "}
              </li>
              <li>
                <a href="#about">Login</a>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-nav-section">
            <ul>
              <li>
                <a href="#hero">Address</a>
              </li>
              <li>
                <a href="#hero">Phone Number</a>
              </li>
              <li>
                <a href="#specials">email</a>
              </li>
            </ul>
          </div>

          <div className="footer-nav-section">
            <ul>
              <li>
                <a href="#hero">Facebook</a>
              </li>
              <li>
                <a href="#hero">Instagram</a>
              </li>
              <li>
                <a href="#specials">Twitter</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
