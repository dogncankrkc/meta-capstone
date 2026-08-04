import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import AppLogo from "../../assets/images/Logo.svg";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const {pathname} = location;

  const handleHamburgerClick = () => {
    setIsMenuOpen((currentOpen) => !currentOpen);
  };

  const handleNavigationClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="header-logo">
        <img src={AppLogo} alt="Little Lemon Logo" />
      </div>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <ul>
          <li>
            <a href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/booking" className={pathname === "/booking" ? "active" : ""}>
              Order Online
            </a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="hamburger-menu"
        onClick={handleHamburgerClick}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
      >
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          className="hamburger-icon"
        />
      </button>

      <div className={`mobile-nav-overlay ${isMenuOpen ? "open" : ""}`} onClick={handleNavigationClick} />

      <aside
        id="mobile-navigation"
        className={`mobile-nav-panel ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul>
            <li>
              <a href="#hero" onClick={handleNavigationClick}>Home</a>
            </li>
            <li>
              <a href="#hero" onClick={handleNavigationClick}>About</a>
            </li>
            <li>
              <a href="#specials" onClick={handleNavigationClick}>Menu</a>
            </li>
            <li>
              <a href="#testimonials" onClick={handleNavigationClick}>Reservations</a>
            </li>
            <li>
              <a href="#about" onClick={handleNavigationClick}>Order Online</a>
            </li>
            <li>
              <a href="#about" onClick={handleNavigationClick}>Login</a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
