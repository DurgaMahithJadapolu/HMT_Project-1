import React from "react";
import Img from '../images/What sets us apart.jpg';

const WhatSetsUsApart = () => {
  return (
    <div className="container-fluid container-setup p-0"> {/* Use container-fluid for full-width layout */}
      <div className=" mt-5">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 col-md-12 text-section">
            <h2 className="title mb-5">🌐 What Sets Us Apart</h2>
            <p className="description mt-5">
              Himitech Global has established itself as a trusted name in the IT industry, recognized for delivering reliable services
              and managing projects with precision. Since 2021, we have been dedicated to helping businesses create a strong digital
              identity in an increasingly competitive technological landscape. Our mission is to leverage the latest advancements in
              computer science, making IT solutions accessible, efficient, and customer-friendly.
            </p>
            <div className="buttons">
              <div className="journey-text">
                <p className="journey-button">Our Journey, Your Success</p>
              </div>
              <div className="text-button">
                <p>We are here to help you shine online</p>
                <button className="btn talk-button">Let’s Talk</button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 col-md-12 image-section">
            <p className="subtitle mt-3">Our Edge is Smart, Setting Us Apart</p>
            <img
              src={Img}
              alt="Business team"
              className="team-image"
      
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default WhatSetsUsApart;
