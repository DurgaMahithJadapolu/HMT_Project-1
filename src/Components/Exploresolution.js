import React from "react";
import Img1 from "../images/Web development.png";
import Img2 from "../images/Software testing.png";
import Img3 from "../images/Web3 development.png";
import Img4 from "../images/Blockchain development.png";
import Img5 from "../images/Marketing services.png";
import Img6 from "../images/share your ideas.png";
import Img7 from "../images/HMT Global1.png";

const ExpertSolutions = () => {
  return (
    <div className="container-fuild expert-solutions py-5">
      <div className="container">
        <div className="row">
          {/* Left Section - Text Content */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="text-start mb-5">🌐 Explore Our Expert Solutions</h2>
            <h2
              className="web-development-title py-5 mt-5"
              style={{ color: "#65C6B9" }}
            >
              Web Development
            </h2>
            <p style={{ width: "480px" }}>
              We create responsive, user-friendly websites that blend seamless
              functionality with stunning design. Our web solutions enhance your
              brand’s online presence and provide a superior user experience.
            </p>
          </div>

          {/* Right Section - Image with Contact */}
          <div className="col-12 col-md-6 text-center">
            <p className="text-center mb-4">
              From strategy to execution, discover the services that drive your
              business forward. Let’s build something great together.
            </p>
            <div className="position-relative">
              <img
                src={Img1}
                alt="Web Development"
                className="img"
                style={{
                  height: "auto",
                  maxWidth: "80%",
                  objectFit: "cover",
                }}
              />
              <button className="contact-button">Contact</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex mt-5">
        <div className="row">
          <div className="col-12 col-md-6 text-center">
            <div className="position-relative">
              <img
                src={Img2}
                alt="Software Testing"
                className="img"
                style={{
                  height: "auto",
                  maxWidth: "80%",
                  objectFit: "cover",

                }}
              />
              <button className="contact-button1">Contact</button>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2
              className=" SOFTWARE TESTING-title  mt-4  py-3"
              style={{ color: "#65C6B9" }}
            >
              SOFTWARE TESTING
            </h2>
            <p style={{ width: "480px" }}>
              Ensure your software runs smoothly with our comprehensive testing
              services. We perform functional, performance, and security testing
              ta deliver ratust, bug- free applications that perform flawlessly:
            </p>
          </div>
        </div>
      </div>

      <div className="container d-flex mt-5">
        <div className="row">
          {/* Left Section - Text Content */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2
              className="web-development-title mt-4  py-3"
              style={{ color: "#65C6B9" }}
            >
              WEB3 DEVELOPEMENT
            </h2>
            <p style={{ width: "480px" }}>
              Dive into the future of the internet with our Web development
              services. We buitd decentralized applications (dApps), smart
              contracts, and token systems that empower your business with
              blockchain-based salutions.
            </p>
          </div>

          <div className="col-12 col-md-6 text-center">
            <div className="position-relative">
              <img
                src={Img3}
                alt="Web Development"
                className="img"
                style={{
                  height: "auto",
                  maxWidth: "80%",
                  objectFit: "cover",
                }}
              />
              <button className="contact-button">Contact</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex mt-5">
        <div className="row">
          <div className="col-12 col-md-6 text-center">
            <div className="position-relative">
              <img
                src={Img4}
                alt="Web Development"
                className="img"
                style={{
                  height: "auto",
                  maxWidth: "80%",
                  objectFit: "cover",
                }}
              />
              <button className="contact-button1">Contact</button>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2
              className="web-development-title mt-4  py-3"
              style={{ color: "#65C6B9" }}
            >
              BLOCKCHAIN DEVELOPEMENT
            </h2>
            <p style={{ width: "480px" }}>
              Our blockchain development service provides secure, transparent,
              and scalable solutions. From private blockchains to public
              platforms, we help businesses streamline processes with
              cutting-edge technology.
            </p>
          </div>
        </div>
      </div>
      <div className="container d-flex mt-5">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="title mt-4  py-3" style={{ color: "#65C6B9" }}>
              MARKETING SERVICES
            </h2>
            <p style={{ width: "480px" }}>
              Boost your brand's visibility with our expert marketing
              strategies. From digital campaigns to SEQ, we help you connect
              with your audience and grow your business through tailored
              marketing efforts.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center">
            <div className="position-relative">
              <img
                src={Img5}
                alt="Web Development"
                className="img"
                style={{
                  height: "auto",
                  maxWidth: "80%",
                  objectFit: "cover",
                }}
              />
              <button className="contact-button">Contact</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
        
        <div className="top-section text-center  py-5" style={{ color:'#B1B2', height: '50vh' }}>
        <h1 className="display-4">Let’s make your ideas</h1>
        <h1 className="display-4">HAPPEN!</h1>

        </div>
        </div>
      </div>

       {/* Bottom Section */}
       <div className="bottom-section container py-5">
        <div className="row align-items-center">
          {/* Form Section */}
          <div className="col-md-6">
            <h2>Share Your Ideas</h2>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Business mail" />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Phone" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Company's name" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>

          {/* Image and Text Section */}
          <div className="col-md-6 text-center" style={{position:'relative'}}>
            <div className="d-flex justify-content-center">

              <div>
              <img
                src={Img6}
                alt="Team"
                className="img-fluid IdeaImg"
                


              />

              </div>
              <div>
                
              <img
                src={Img7}
                alt="Team"
                className="img-fluid BgHmt"
              />

              </div>
              

            </div>
            <p className="Html-text">
              Whether you're just starting out or ready to level up, our team of experts is here to propel your brand
              forward, unlock new growth, and bring your vision to life. Let’s build something incredible, side by side.
            </p>
            <p>
              <strong>Email:</strong> info@shimotechglobal.com <br />
              <strong>Phone:</strong> +91-7015085891
            </p>
          </div>
        </div>
      </div>











    </div>
  );
};

export default ExpertSolutions;
