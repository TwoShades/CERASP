import "./css/AboutFacilities.css";
import React from "react";

export default function AboutFacilities() {
  return (
    <div className="about-facilities">
      <div className="about-facilities-layout">
        <div className="about-facilities-header">
          <h1>FACILITIES</h1>
          <h3>The CERASP has 3 state-of-the-art sites available!</h3>
        </div>

        <div className="about-facilities-images">
          <img
            src="/photos/facilities/john-abbott-college.jpg"
            alt="John Abbott College"
          />
          <img
            src="/photos/facilities/cegep-gerald-godin.jpg"
            alt="Cégep Gerald Godin"
          />
          <img src="/photos/facilities/admare.jpg" alt="AdMare Facility" />
        </div>
      </div>
    </div>
  );
}
