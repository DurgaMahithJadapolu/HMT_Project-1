import React from "react";
import Logo from '../images/HMT Global1.png'


const Footer = () => {
  return (
    <footer className="footer bg-light text-dark py-4">
      <div className="container">
        <div className="row">
          {/* Logo and Social Media Icons */}
          <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
            <img
              src={Logo} // Replace with your logo URL
              alt="Himotech Logo"
              className="mb-3"
              style={{width:'200px',height:'120px'}}
            />
            <div className="social-icons">
              <a href="/" className="me-3 text-dark">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="/" className="me-3 text-dark">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="/" className="me-3 text-dark">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="/" className="text-dark">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">About us</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Services</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Careers</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-3 mb-3 mb-md-0">
            <h5>Contact</h5>
            <p className="mb-1">info@himotechglobal.com</p>
            <p className="mb-0">+91-7011508191</p>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-md-3">
            <h5>Newsletter</h5>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your mail"
                aria-label="Email"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">
              Copyright © 2024 Himotech Global Pvt Ltd. All Rights Reserved.{" "}
              <a href="/" className="text-dark text-decoration-none">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
