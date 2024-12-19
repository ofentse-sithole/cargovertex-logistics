import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  // State to manage mobile menu toggle
  const [click, setClick] = useState(false);

  // Function to toggle the mobile menu
  const handleClick = () => setClick(!click);

  // Function to close the mobile menu
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo navigation using Link */}
        <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src="/public/cargovertex-logo-removebg-preview.png"
            alt="cargovertex-logo"
            className="navbar-image"
          />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>

        {/* Navigation Links */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className="nav-item">
            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/service" className="nav-links" onClick={closeMobileMenu}>
              Service
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;