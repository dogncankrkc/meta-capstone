import React from "react";
import AppLogo from "../../assets/images/Logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div>
        <img src={AppLogo} alt="Little Lemon Logo" />
      </div>

      <nav>
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
            <a href="#about">Order Online</a>
          </li>
          <li>
            <a href="#about">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
