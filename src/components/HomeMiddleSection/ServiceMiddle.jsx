import React from "react";
import "./ServiceMiddle.css"; // Importing CSS file for styles
import cargoImage from "../../assets/cargo.jpg"; // Replace with your actual image path
import destinationImage from "../../assets/package-on-road.jpg"; // Replace with your actual image path

const Services = () => {
  return (
    <section className="services-section">
      <h1 className="services-title">
        <span className="highlight">Our</span> Services
      </h1>
      <div className="services-container">
        <p>
          At CargoVertex, we specialize in providing comprehensive logistics solutions 
          for individuals and business owners needing to relocate. We offer the opportunity to 
          rent a variety of vehicles tailored to meet your moving needs. With our expansive reach, 
          we serve all nine provinces of South Africa, ensuring seamless and efficient transportation. Based in Gauteng, 
          our team is committed to delivering top-notch service, making your move as smooth and hassle-free as possible. 🚚🌟</p>

        {/* Service 1 */}
        <div className="service-item">
          <img src={cargoImage} alt="Cargo Rental" />
          <div className="service-info">
            <h2>Rental for Cargo</h2>
            <p>
              We provide affordable and reliable cargo rental services for all your needs.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-item">
          <img src={destinationImage} alt="Destinations" />
          <div className="service-info">
            <h2>Destinations We Travel</h2>
            <p>
              Discover our wide range of destinations to meet your transportation needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
