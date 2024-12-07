import React from 'react';

const DropdownMenu = ({ isVisible, toggleDropdown }) => {
  return (
    isVisible && (
      <div
        className="dropdown-menu show"
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          border: '1px solid #ccc',
          zIndex: 1000,
          padding: '10px',
          width: '200px',
          top: '100%', // Position dropdown below the About Us tab
          left: '0',
        }}
      >
        <a href="#our-mission" className="dropdown-item">
          Our Mission
        </a>
        <a href="#our-team" className="dropdown-item">
          Our Team
        </a>
        <a href="#contact-us" className="dropdown-item">
          Contact Us
        </a>
        <div className="dropdown-divider"></div>
        <p className="p-3">
          Learn more about our team and mission to deliver the best services to our customers.
        </p>
        <button className="btn btn-primary" href="#learn-more">
          Learn More
        </button>
        <div className="mt-3">
          <button className="btn btn-secondary" onClick={toggleDropdown}>
            Choose Another
          </button>
        </div>
      </div>
    )
  );
};

export default DropdownMenu;
