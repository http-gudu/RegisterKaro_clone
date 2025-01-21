import React from "react";
import "./style.css"; // Import the CSS file for styles

const logos = [
  { src: "logo1.png", alt: "Logo 1" },
  { src: "logo2.png", alt: "Logo 2" },
  { src: "logo3.png", alt: "Logo 3" },
  // Add all your logo paths here
];

const HappyClients = () => {
  return (
    <section className="happy-clients">
      <h2>Our Happy Clients</h2>
      <p>
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource-leveling customer service for state-of-the-art customer service.
      </p>
      <div className="logos-container">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyClients;
