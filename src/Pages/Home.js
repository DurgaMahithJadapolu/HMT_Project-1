import React from "react";

import SetUpPart from "../Components/SetUpPart.js";
import BluePrintOfSucess from "../Components/BluePrintOfSucess.js";
import Exploresolution from "../Components/Exploresolution.js";
import Counter from "../Components/CountUp.js";
import Form from "../Components/Form.js";

const HeroSection = () => {
  return (
    <header className="hero-section  text-center">
      <div className="container-fulid text-light ">
        <div className="bgimg  d-flex flex-column align-items-center justify-content-center">
        <h1 className="display-4 fw-bold" style={{ fontSize: '4rem' }}>
  The Future of Web3 
</h1>

<h1 className="display-4 fw-bold" style={{ fontSize: '4rem' }}>
and Blockchain
</h1>
         
          <div className="mt-4">
            <a href="/" className="btn btn-primary btn-lg me-3">
              Explore
            </a>
            <a href="/" className="btn btn-outline-light btn-lg">
              Contact us
            </a>
          </div>
        </div>
      </div>
      <div className="container-fuild text-white">
        <div className="bgimg1  d-flex flex-column align-items-center justify-content-center">
          <p className="lead">SHAPING</p>
          <h1 className="display-4 fw-bold">INNOVATIVE</h1>
          <p>AND</p>
          <h3>ENGAGING</h3>
          <h1 className="">DIGITAL PATHWAYS</h1>
        </div>
      </div>
      <div
        className="container-fluid d-flex bgimg2"
        style={{ position: "relative" }}
      >
        <div>
          <h3 className="what-do-text">what we do</h3>
        </div>
        <div className="LearnSolutions">
          <button className="LearnSolutions">
            Learn more about Our Solutions
          </button>
        </div>
      </div>

      <div>
        <Counter />
      </div>
      <div>
        <SetUpPart />
      </div>

      <div>
        <BluePrintOfSucess />
      </div>
      <div>
        <Exploresolution />
      </div>
      <div>
      <Form/>
      </div>
    </header>
  );
};

export default HeroSection;
