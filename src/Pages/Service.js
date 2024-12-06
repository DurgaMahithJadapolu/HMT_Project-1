import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  {
    title: "Web Development",
    description: "Creating responsive and engaging websites.",
  },
  {
    title: "Web3 Development",
    description: "Building Decentralized and Future-Ready Applications.",
  },
  {
    title: "Blockchain Development",
    description: "Innovative Solutions for Secure Transactions.",
  },
  {
    title: "Software Testing",
    description: "Ensuring Quality and Performance in Every Release.",
  },
  {
    title: "Marketing Services",
    description: "Driving Growth with Data-Driven Strategies.",
  },
  {
    title: "DevOps Services",
    description: "Streamlining Operations for Better Efficiency.",
  },
];

const ServiceContexts = {
  "Web Development": [
    "Responsive Design",
    "Frontend Development",
    "Backend Development",
  ],
  "Web3 Development": ["Smart Contracts", "Decentralized Apps", "Crypto Wallets"],
  "Blockchain Development": [
    "Cryptocurrency Integration",
    "Ledger Systems",
    "Blockchain Security",
  ],
  "Software Testing": ["Automation Testing", "Manual Testing", "Performance Testing"],
  "Marketing Services": ["SEO", "Social Media Marketing", "Email Campaigns"],
  "DevOps Services": ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring"],
};

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [showTabs, setShowTabs] = useState(false);

  const handleTabClick = (title) => {
    setActiveTab(title === activeTab ? null : title); // Toggle active tab
    setShowTabs(false); // Reset hover state
  };

  const handleMouseEnter = () => {
    if (activeTab) setShowTabs(true);
  };

  const handleMouseLeave = () => {
    setShowTabs(false);
  };

  return (
    <div className="container py-5">
      <div
        className="row text-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {services.map((service) => (
          <div
            key={service.title}
            className="col-md-4 col-sm-6 mb-3 d-flex align-items-stretch"
          >
            <div
              className={`card w-100 ${
                activeTab === service.title ? "bg-light" : ""
              }`}
              style={{
                cursor: "pointer",
                height: "150px",
              }}
              onClick={() => handleTabClick(service.title)}
            >
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
              {activeTab === service.title && showTabs && (
                <div className="mt-2">
                  {ServiceContexts[service.title].map((subTab) => (
                    <p key={subTab} className="mb-1">
                      {subTab}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {activeTab && !showTabs && (
        <div className="row mt-4">
          <div className="col-12 text-center">
            <div
              className="card"
              style={{
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="card-body">
                <h4 className="card-title">{activeTab}</h4>
                <p className="card-text">
                  Content or details for {activeTab}.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicePage;
