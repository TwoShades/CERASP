import React from "react";
import "./css/ExpertiseHealthCanada.css";

const ExpertiseHealthCanada = ({ leftContent, rightContent, className = "" }) => {
  return (
    <div className="expertise-health-canada-parent">
        <div className= "expertise-health-canada-panel">
        <div className="expertise-health-canada-left">
            <div className="expertise-health-canada-link">
                <a href="#expertise-canada-gov-logo">
                    <img src=".\svg\canadagovlogo.svg" 
                        alt="Health Canada" />
                </a>
            </div>

            <div className="expertise-health-canada-title">
            <h3>Health Canada Partner</h3>
            </div>

            <div className="expertise-health-canada-text-under-title">
                <p>Recognized partner of Health Canada for regulatory affairs and audits. As an official 
                    partner of Health Canada, we deliver solutions that meet the highest industry standards.</p>
            </div>
        </div>

        <div className="expertise-health-canada-image">
            <img src=".\photos\cerasp-image1-scaled-450x450.jpg" 
                alt="Health Canada Logo" />
        </div>
        </div>
    </div>
  );
};

export default ExpertiseHealthCanada;
