import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import AppLogo from "../../assets/images/Logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleHamburgerClick = () => {
    setIsMenuOpen((currentOpen) => !currentOpen);
  };

  const handleNavigationClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={AppLogo} alt="Little Lemon Logo" onClick={() => {navigate("/")}} />
      </div>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <ul>
          <li>
            <Link to="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/reservations" className={pathname === "/reservations" ? "active" : ""}>
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/booking" className={pathname === "/booking" ? "active" : ""}>
              Reserve a Table
            </Link>
          </li>
          <li>
            <Link to="/">Login</Link>
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

      <div
        className={`mobile-nav-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={handleNavigationClick}
      />

      <aside
        id="mobile-navigation"
        className={`mobile-nav-panel ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul>
            <li>
              <Link to="/" onClick={handleNavigationClick}>Home</Link>
            </li>
            <li>
              <Link to="/" onClick={handleNavigationClick}>About</Link>
            </li>
            <li>
              <Link to="/" onClick={handleNavigationClick}>Menu</Link>
            </li>
            <li>
              <Link to="/reservations" onClick={handleNavigationClick}>Reservations</Link>
            </li>
            <li>
              <Link to="/booking" onClick={handleNavigationClick}>Reserve a Table</Link>
            </li>
            <li>
              <Link to="/" onClick={handleNavigationClick}>Login</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </header>
  );
}