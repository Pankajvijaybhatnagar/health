import React from "react";
import Image from "next/image"; // Next.js image optimization
import Doctersimage from "../../../../public/images/bigbyte-banner1.webp";
import "./css/banner1.css";
const Medicalbanner1: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        {/* Left Section */}
        <div className="text-section">
          <h1 className="heading-primary">Where Comfort</h1>
          <h2 className="heading-secondary">Meets Cure!</h2>
          <p className="banner-description">
            Compassionate care and world-class treatment combining indian
            tradition with modern medicine for your holistic well-being!
          </p>
          <button className="banner-button">Get Started</button>
        </div>

        {/* Right Section (Image Only) */}
        <div className="image-section">
          <Image
            src={Doctersimage} // Replace with the path to your image
            alt="expert doctors-bigbyte health india"
            layout="intrinsic"
            width={500}
            height={400}
            className="doctor-image"
          />
        </div>
      </div>

      {/* Geometric Graphics */}
      <div className="circle large-circle"></div>
      <div className="circle small-circle"></div>
      <div className="shapes">
        {/* <div className="rect"></div> */}
        <div className="line"></div>
        <div className="dots"></div>
      </div>
      <div className="ring-shape"></div>
      <div className="ring-shape2"></div>
      {/* Inline Styles */}
    </div>
  );
};

export default Medicalbanner1;
