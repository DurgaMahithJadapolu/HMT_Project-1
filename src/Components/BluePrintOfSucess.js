import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img1 from "../images/Strategic Planning and Vision.png";
import img2 from "../images/Innovation and development.png";
import img3 from "../images/Effective Team Collaboration.png";
import img4 from "../images/Data-Driven Decision Making.png";
import img5 from "../images/Scalable Execution and Delivery.png";
// import './CustomCarousel.css'; // Import custom CSS

const CustomCarousel = () => {
  return (
    <div className="container-fulid">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-interval="false"
        style={{ position: "relative" }}
      >
        <div className=" container-fulid  Vertical-text">

          <h1 >The Blueprint of Success</h1>
          <h4>Here's how we make success happen, step by step</h4>
        </div>
        {/* Indicators */}
        <div className="custom-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active custom-button"
            aria-current="true"
            aria-label="Slide 1"
          >
            1
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            className="custom-button"
            aria-label="Slide 2"
          >
            2
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            className="custom-button"
            aria-label="Slide 3"
          >
            3
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            className="custom-button"
            aria-label="Slide 4"
          >
            4
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            className="custom-button"
            aria-label="Slide 5"
          >
            5
          </button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="First Slide" />
            <div className="carousel-caption custom-caption">
              <h1>Strategic Planning and Vision</h1>
              <p>
                We begin by understanding your goals and crafting a clear,
                strategic plan that aligns with your vision. This allows us to
                chart a course for success with measurable milestones and
                long-term objectives.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Second Slide" />
            <div className="carousel-caption custom-caption">
              <h1>Innovation and Development n</h1>
              <p>
                We begin by understanding your goals and crafting a clear,
                strategic plan that aligns with your vision. This allows us to
                chart a course for success with measurable milestones and
                long-term objectives.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Third Slide" />
            <div className="carousel-caption custom-caption">
              <h1>Effective Team Collaboration</h1>
              <p>
                Our team believes in the power of collaboration. We bring
                together experts from different fields, fostering a creative and
                efficient work environment. This ensures smooth Communication
                and faster problem-solving
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="Fourth Slide" />
            <div className="carousel-caption custom-caption">
              <h1>Data-Driven Decision </h1>
              <p>
                We rely on data to make informed decisions. By analyzing trends,
                customer behaviors, and performánte metrics, we shape strategies
                that deliver results, ensuring we stay ahead in a competitive
                landscape.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="Fifth Slide" />
            <div className="carousel-caption custom-caption">
              <h1>Scalable Execution /and Delivery</h1>
              <p>
                Our approach ensures that every project we deliver can grow and
                evolve with your business. We focus on solutions that are
                flexible, adaptable, and scalable, so they continue to meet your
                needs as you expand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;