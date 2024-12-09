import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Web Development",
      description: "Creating responsive and engaging websites.",
      icon: "🌐",
      content: "Web Development involves building responsive, fast-loading, and user-friendly websites using the latest technologies like HTML, CSS, JavaScript, and frameworks like React or Angular.",
    },
    {
      title: "Web3 Development",
      description: "Building Decentralized and Future-Ready Applications.",
      icon: "🔗",
      content: "Web3 Development focuses on building decentralized applications (dApps) using blockchain technology, smart contracts, and decentralized networks.",
    },
    {
      title: "Blockchain Development",
      description: "Innovative Solutions for Secure Transactions.",
      icon: "⛓️",
      content: "Blockchain Development provides secure, transparent, and immutable solutions for financial transactions, supply chain tracking, and more.",
    },
    {
      title: "Software Testing",
      description: "Ensuring Quality and Performance in Every Release.",
      icon: "✔️",
      content: "Software Testing ensures the quality, functionality, and performance of software by identifying bugs and ensuring reliability through manual and automated testing.",
    },
    {
      title: "Marketing Services",
      description: "Driving Growth with Data-Driven Strategies.",
      icon: "📊",
      content: "Marketing Services help businesses grow by leveraging SEO, social media marketing, and data-driven campaigns to reach the target audience effectively.",
    },
    {
      title: "DevOps Services",
      description: "Streamlining Operations for Better Efficiency.",
      icon: "⚙️",
      content: "DevOps Services streamline development and IT operations by using tools and practices that improve collaboration, deployment speed, and reliability.",
    },
  ];

  return (
    <div className="container py-5 mt-5">
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="p-3 border rounded text-center"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedService(service)}
            >
              <div className="mb-2" style={{ fontSize: "2rem" }}>
                {service.icon}
              </div>
              <a
                href={`#${service.title.replace(" ", "-")}`}
                className="h5 d-block text-decoration-none"
              >
                {service.title}
              </a>
              <p className="text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="mt-4 p-4 border rounded">
          <h4>{selectedService.title}</h4>
          <p>{selectedService.content}</p>
          <button
            className="btn btn-secondary"
            onClick={() => setSelectedService(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
