import React, {useEffect} from "react";
import "./MiddleAbout.css"; // Import CSS for styling


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <section id="about">
      <br />
      <br />
      <br />
      <br />
      <h1>
        <span className="highlight">About</span> Us
      </h1>
      <p>
        CargoVertex, your trusted partner in logistics and transportation. Based in the heart of Gauteng, we specialize in helping individuals and business owners make seamless moves, whether relocating to a new home or expanding your business operations.
      </p>

      <p>
        At CargoVertex, we understand the challenges of moving and offer a convenient solution: the opportunity to rent one of our reliable vehicles to ensure your goods are transported safely and efficiently.
      </p>

      <p>
        We proudly serve all nine provinces of South Africa, ensuring that no destination is too far or too remote. Our commitment to excellence, reliability, and customer satisfaction sets us apart in the logistics industry.
      </p>

      <p>
        Whether you're moving across town or across provinces, let CargoVertex handle the heavy lifting so you can focus on what matters most.
        <br/>
        <br/>
        <b>CargoVertex – Moving You Forward.</b>
        
        </p>
      <div className="about-images">
        <img src="/photo2.jpg" alt="Description 2" />
        <img src="/photo3.jpg" alt="Description 3" />
        <img src="/photo5.jpg" alt="Description 4" />
      </div>
    </section>
  );
};

export default About;