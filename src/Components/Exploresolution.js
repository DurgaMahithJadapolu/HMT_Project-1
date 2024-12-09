import React from "react";
import Img1 from "../images/Web development.png";
import Img2 from "../images/Software testing.png";
import Img3 from "../images/Web3 development.png";
import Img4 from "../images/Blockchain development.png";
import Img5 from "../images/Marketing services.png";

const ExpertSolutions = () => {
  return (
    <div className="container-fluid expert-solutions py-5">
      <div className="container">
        <div className="row">
          {/* Left Section - Text Content */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="text-start mb-5">🌐 Explore Our Expert Solutions</h2>
            <h2 className="web-development-title py-5 mt-5" style={{ color: "#65C6B9" }}>
              WEB DEVELOPMENT
            </h2>
            <p className="description-text">
              We create responsive, user-friendly websites that blend seamless functionality with stunning design. Our web solutions enhance your brand’s online presence and provide a superior user experience.
            </p>
          </div>

          {/* Right Section - Image with Contact */}
          <div className="col-12 col-md-6 text-center position-relative">
            <img src={Img1} alt="Web Development" className="img" />
            <button className="contact-button">Contact</button>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 col-md-6 text-center position-relative">
            <img src={Img2} alt="Software Testing" className="img" />
            <button className="contact-button1">Contact</button>
          </div>

          {/* Left Section - Text Content */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="py-5 mt-5 me-5" style={{ color: "#65C6B9" }}>
              SOFTWARE TESTING
            </h2>
            <p className=" description-text">
              Ensure your software runs smoothly with our comprehensive testing services. We perform functional, performance, and security testing to deliver robust, bug-free applications that perform flawlessly.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {/* Left Section - Text Content */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="web-development-title py-5 mt-5" style={{ color: "#65C6B9" }}>
              WEB3 DEVELOPMENT
            </h2>
            <p className="description-text">
              Dive into the future of the internet with our Web development services. We build decentralized applications (dApps), smart contracts, and token systems that empower your business with blockchain-based solutions.
            </p>
          </div>

          {/* Right Section - Image with Contact */}
          <div className="col-12 col-md-6 text-center position-relative">
            <img src={Img3} alt="Web3 Development" className="img" />
            <button className="contact-button">Contact</button>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 col-md-6 text-center position-relative">
            <img src={Img4} alt="Blockchain Development" className="img" />
            <button className="contact-button1">Contact</button>
          </div>

          {/* Left Section - Text Content */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="py-5 mt-5 me-5" style={{ color: "#65C6B9" }}>
              BLOCKCHAIN DEVELOPMENT
            </h2>
            <p className=" description-text">
              Our blockchain development service provides secure, transparent, and scalable solutions. From private blockchains to public platforms, we help businesses streamline processes with cutting-edge technology.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {/* Left Section - Text Content */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="web-development-title py-5 mt-5" style={{ color: "#65C6B9" }}>
              MARKETING SERVICES
            </h2>
            <p className="description-text">
              Boost your brand's visibility with our expert marketing strategies. From digital campaigns to SEO, we help you connect with your audience and grow your business through tailored marketing efforts.
            </p>
          </div>

          {/* Right Section - Image with Contact */}
          <div className="col-12 col-md-6 text-center position-relative">
            <img src={Img5} alt="Marketing Services" className="img" />
            <button className="contact-button">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSolutions;
