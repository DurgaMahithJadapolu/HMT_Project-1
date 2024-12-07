import React from "react";
import Img2 from "../images/Shaping innovative.png";

 import SetUpPart from "../Components/SetUpPart.js";
 import BluePrintOfSucess from "../Components/BluePrintOfSucess.js";
 import Exploresolution from "../Components/Exploresolution.js";


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
      <div className="container-fuild">
        <img src={Img2} className="bgimg" alt="Heroimage" />
      </div>
      <div className="container-fuild bgimg1">
        <div>
          <h3 className="what-do-text">what we do</h3>
        </div>
        <div>
          <button>Learn more about Our Solutions</button>
        </div>
      </div>

       <div>
        <SetUpPart />
      </div> 

      <div>
        <BluePrintOfSucess />
        
        <Exploresolution/>
      </div> 

    </header>
  );
};

export default HeroSection;
