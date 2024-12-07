import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Img1 from '../images/Data-Driven Decision Making.png'

const TabsExample = () => {
  return (
    <div className="container-fulid mt-5">
      {/* Tab Navigation */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="disabled-tab"
            data-bs-toggle="tab"
            data-bs-target="#disabled"
            type="button"
            role="tab"
            aria-controls="disabled"
            aria-selected="false"
          >
            Disabled
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content text-dark" id="myTabContent">
        <div
          className="tab-pane fade show active  homebg"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <p>This is the Home tab content.</p>
          <img src={Img1} alt='image-1' className='Img-1'
          style={{
        
          }}/>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p>This is the Profile tab content.</p>
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <p>This is the Contact tab content.</p>
        </div>
        <div
          className="tab-pane fade"
          id="disabled"
          role="tabpanel"
          aria-labelledby="disabled-tab"
        >
          <p>This is the Disabled tab content.</p>
        </div>
      </div>
    </div>
  );
};

export default TabsExample;
