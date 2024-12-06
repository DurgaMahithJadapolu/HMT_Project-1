import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/HMT Global1.png';
import { FaBars } from 'react-icons/fa'; // Import menu icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark reduced-height">
      <div className="container">
        <img src={Logo} alt="Logo" className="navbar-brand" style={{width:'100px', height:'3opx'}} />
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <FaBars /> {/* Use menu icon here */}
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Center links */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
                onClick={closeNavbar} // Close navbar on click
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/services"
                activeClassName="active"
                onClick={closeNavbar} // Close navbar on click
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                activeClassName="active"
                onClick={closeNavbar} // Close navbar on click
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/blog"
                activeClassName="active"
                onClick={closeNavbar} // Close navbar on click
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto"> {/* Contact button at the end */}
            <li className="nav-item">
              <NavLink
                className="btn btn-primary"
                to="/contact"
                activeClassName="active"
                onClick={closeNavbar} // Close navbar on click
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
