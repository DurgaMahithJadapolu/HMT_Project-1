import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/HMT Global1.png';
import { FaBars } from 'react-icons/fa'; // Import menu icon
import DropdownMenu from '../Pages/About'; // Import DropdownMenu component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null); // Track the selected tab

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };

  const handleTabSelection = (tab) => {
    setSelectedTab(tab); // Set the selected tab
    if (tab === 'about') {
      setDropdownVisible(true); // Only show the dropdown for About Us tab
    } else {
      setDropdownVisible(false); // Close dropdown for all other tabs
    }
  };

  // Close dropdown if clicked outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark reduced-height">
      <div className="container">
        <img src={Logo} alt="Logo" className="navbar-brand" style={{ width: '150px', height: '80px' }} />
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
                onClick={() => {
                  closeNavbar();
                  handleTabSelection('home');
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/services"
                activeClassName="active"
                onClick={() => {
                  closeNavbar();
                  handleTabSelection('services');
                }}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item" style={{ position: 'relative' }}> {/* Set relative positioning for dropdown */}
              <div
                className="nav-link"
                style={{ cursor: 'pointer' }}
                onClick={() => handleTabSelection('about')} // Show dropdown only for About Us
              >
                About Us
              </div>
              {/* Position the DropdownMenu below About Us tab */}
              {dropdownVisible && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%', // Position below the tab
                    left: '0',
                    zIndex: 1000,
                  }}
                >
                  <DropdownMenu
                    isVisible={dropdownVisible}
                    toggleDropdown={() => setDropdownVisible(!dropdownVisible)}
                  />
                </div>
              )}
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/blog"
                activeClassName="active"
                onClick={() => {
                  closeNavbar();
                  handleTabSelection('blog');
                }}
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
                onClick={() => {
                  closeNavbar();
                  handleTabSelection('contact');
                }}
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
