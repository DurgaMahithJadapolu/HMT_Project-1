import React from "react";
import  Img1 from '../images/share your ideas.png'// For additional styling if needed

const AboutScreen = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Section: Text Content */}
        <div className="col-md-6">
          <h4 className="text-primary mb-3"> 🌐What Sets Us Apart</h4>
          <h2 className="mb-4">Our Edge is Smart, Setting Us Apart</h2>
          <p>
            Hinotech Global has established itself as a trusted name in the IT
            industry, recognized for delivering reliable services and managing
            projects with precision. Since 2007, we have been dedicated to
            helping businesses create a strong digital identity in an
            increasingly competitive technological landscape.
          </p>
          <p>
            Our mission is to leverage the latest advancements in computer
            science, making IT solutions accessible, efficient, and user-friendly
            for all. With a committed team of experts, we continuously strive to
            build trust with our clients, ensuring consistent quality and
            dependable outcomes.
          </p>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-primary">Our Journey, Your Success</button>
            <button className="btn btn-outline-primary">Let's Talk</button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="col-md-6 text-center">
          <img
            src={Img1}// Replace with your image URL
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
