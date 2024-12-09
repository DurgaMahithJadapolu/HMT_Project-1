import React from 'react'
import Img6 from "../images/share your ideas.png";
import Img7 from "../images/HMT Global1.png";

const Form = () => {
  return (
    <div className="container-fulid expert-solutions" >

<div>
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
  )
}

export default Form