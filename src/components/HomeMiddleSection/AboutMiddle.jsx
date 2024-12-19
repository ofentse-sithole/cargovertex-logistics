import React from "react";
import "./AboutMiddle.css"; // Importing CSS file for styles
import image from "../../assets/about.jpg"; // Adjust the path to your image

const About = () => {
  return (
    <section className="about-section">
      <div className="content">
        <h1>
          <span className="highlight">About</span> CargoVertex Logistics
        </h1>
        <p>
          CargoVertex is a Gauteng-based logistics company offering vehicle rentals for safe and efficient moves across all nine provinces. We’re dedicated to helping individuals and businesses with reliable transport solutions.
          </p>
        
      </div>
      <div className="image-container">
        <img src={image} alt="The Company" />
        
      </div>
    </section>
  );
};

export default About;
