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
          <div className="facility-card">
            <img
              src="/photos/facilities/john-abbott-college.jpg"
              alt="John Abbott College"
            />
            <h2>John Abbott College</h2>
            <p>Small-scale manufacturing and testing</p>
          </div>
          <div className="facility-card">
            <img
              src="/photos/facilities/cegep-gerald-godin.jpg"
              alt="Cégep Gerald Godin"
            />
            <h2>Cégep Gérald-Godin</h2>
            <p>Small-scale manufacturing and testing</p>
          </div>
          <div className="facility-card">
            <img src="/photos/facilities/admare.jpg" alt="AdMare Facility" />
            <h2>AdMare BioInnovations</h2>
            <p>Research laboratory and development</p>
          </div>
        </div>

        <div className="about-facilities-map">
          <h2>Where to find us</h2>
          <img src="/photos/facilities/cerasp-map.jpg" alt="CERASP Map" />
        </div>
      </div>
    </div>
  );
}
