import React from 'react';
import CountUp from 'react-countup';
import Img from '../images/Closer look at us.png';

const AboutPage = () => {
  return (
    <div className="about-page container-fluid">
      <div className="row" style={{ height: '100vh' }}> {/* Ensure the row fills the viewport height */}
        {/* Left Section */}
        <div className="col-md-4 bg-light p-5 d-flex flex-column justify-content-between">
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

       
        <div className="col-md-4 bg-light p-5 d-flex flex-column justify-content-between">
          <div className="p-3 bg-light text-dark rounded shadow-sm">
            <img
              src={Img}
              alt="Company Logo"
              className="mb-3"
              style={{ maxWidth: '100%', height: '200px' }}
            />
            <p>
              At Himotech Global, we are at the forefront of the Web3
              revolution, delivering cutting-edge blockchain solutions and
              crypto projects that shape the digital landscape. With over
              3–4 years of experience, our team excels in creating innovative,
              secure, and scalable decentralized applications and networks.
            </p>
          </div>
        </div>


         <div className="col-md-4 bg-dark p-5 d-flex flex-column align-items-center justify-content-center text-dark " style={{ width:'300px',height:'200px'}}>
          <h1 className="text-uppercase">A Closer Look at Us!</h1>
          <h4 className="mt-4">Where experience fuels DIGITAL SUCCESS</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
