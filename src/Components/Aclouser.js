import React from 'react';
import CountUp from 'react-countup'; // Import CountUp
import Img1 from '../images/Closer look at us.png';

const AboutUs = () => {
  return (
    <div className="about-us container-fluid d-flex align-items-center">
      <div className="row w-100">
        {/* Left Side */}
        <div className="col-md-4  p-5 d-flex flex-column justify-content-between">
          <div className="mb-4">
            <h5>A Legacy Since</h5>
            <h2>
              <CountUp end={2024} duration={2} />
            </h2>
          </div>
          <div className="mb-4">
            <h5>Project Delivery</h5>
            <h2>
              <CountUp end={200} duration={3} />+
            </h2>
          </div>
          <div className="mb-4">
            <h5>Worldwide Project Impact</h5>
            <h2>
              <CountUp end={100} duration={2} suffix="%" />
            </h2>
          </div>
          <div className="mb-4">
            <h5>Customer Ratings</h5>
            <h2>
              <CountUp end={4.9} duration={2} decimals={1} suffix="/5" />
            </h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-lg-6 col-md-12 text-center py-5 px-4 d-flex flex-column justify-content-center">
          <div className="highlight-box mb-4">
            <span className="badge  text-dark">Where experience fuels DIGITAL SUCCESS</span>
          </div>
          <h1 className="text-primary fw-bold mb-5">A Closer Look at US!</h1>
          <div className="text-box  p-4 rounded">
            <img src={Img1} alt="HMT Logo" className="mb-3" />
            <p>
              At himnotech global, we are at the forefront of the Web3 revolution, delivering cutting-edge blockchain solutions and crypto projects that shape the digital landscape. With over 3-4 years of experience, our team excels in creating innovative, secure, and scalable decentralized applications and networks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
