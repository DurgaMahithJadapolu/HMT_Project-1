import React from "react";

import SetUpPart from "../Components/SetUpPart.js";
import BluePrintOfSucess from "../Components/BluePrintOfSucess.js";
import Exploresolution from "../Components/Exploresolution.js";
import Counter from "../Components/Aclouser.js";

const HeroSection = () => {
  return (
    <header className="hero-section  text-center">
      <div className="container-fulid text-light ">
        <div className="bgimg  d-flex flex-column align-items-center justify-content-center">
          <p className="lead">Smile :) You're in the right place!</p>
          <h1 className="display-4 fw-bold">
            The Future of Web3 and Blockchain
          </h1>
          <p className="mt-3">
            We don’t just build blockchain projects; we help you shape the
            future. Whether you’re developing your first decentralized
            application or launching a new cryptocurrency, our consulting team
            brings deep industry knowledge to guide you every step of the way.
          </p>
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
    </header>
  );
};

export default HeroSection;
