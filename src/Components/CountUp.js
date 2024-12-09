import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from 'react-countup';
import Img1 from "../images/Closer look at us.png"; // Replace with the actual path for the person image
import Img2 from "../images/HMT Global1.png"; // Replace with the actual path for the HMT logo
import BgImage from "../images/Rectangle_73__1_-removebg-preview.png"; // Replace with the actual path for the background image

const App = () => {
  return (
    <div className="container-fluid p-4">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-4 d-flex flex-column gap-4">
      <div>
        <h5 className="fw-bold text-primary">A Legacy Since</h5>
        <h1 className="fw-bold display-4 text-dark">
          <CountUp start={0} end={2021} duration={2} />
        </h1>
      </div>
      <div>
        <h5 className="fw-bold text-primary">Project Delivery</h5>
        <h1 className="fw-bold display-4 text-dark">
          <CountUp start={0} end={200} suffix="+" duration={2} />
        </h1>
      </div>
      <div>
        <h5 className="fw-bold text-primary">Worldwide Project Impact</h5>
        <h1 className="fw-bold display-4 text-dark">
          <CountUp start={0} end={100} suffix="%" duration={2} />
        </h1>
      </div>
      <div>
        <h5 className="fw-bold text-primary">Customer Ratings</h5>
        <h1 className="fw-bold display-4 text-dark">
          <CountUp start={0} end={4.9} decimals={1} duration={2} />
        </h1>
      </div>
    </div>

        {/* Middle Section */}
        <div className="col-md-4 position-relative text-center">
          {/* Person Image */}
          <div className="mb-3">
            <img
              src={Img1}
              alt="Person"
              className="img-fluid"
              style={{
                Width: "500px",
                height:'500px',
                borderRadius: "10px",
                
              }}
            />
          </div>

          {/* Description Box */}
          <div
            className=" rounded shadow p-3 text-start position-absolute"
            style={{
              bottom: "0px",
              left: "0px",
              Width: "100%",
              height:"250px",
            }}
          >
            <div className="d-flex align-items-center mb-2">
              <img
                src={Img2}
                alt="HMT Global Logo"
                style={{ width: "100px", height: "100px" }}
              />
              
            </div>
            <p className="mb-0" style={{ fontSize: "0.9rem" }}>
              At himtech global, we are at the forefront of the Web3 revolution,
              delivering cutting-edge blockchain solutions and crypto projects
              that shape the digital landscape.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-4 position-relative">
          <div
            className="position-relative d-flex align-items-center justify-content-center text-white"
            style={{
              backgroundImage: `url(${BgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "550px",
              borderRadius: "10px",
            }}
          >
            <h1 className="fw-bold text-center" style={{ fontSize: "2.5rem" }}>
              A Closer <br /> Look at US!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
