import React from "react";
import "./css/ExpertiseTroubleshooting.css";
import { MessagesSquare } from 'lucide-react';

const ExpertiseTroubleshooting = ({ title, mainText }) => {
  return (
    <div className="expertise-troubleshooting-parent">
      <div className="expertise-troubleshooting-panel">
        {/* Title at top left */}
        <div className="expertise-troubleshooting-title">
          <h1>Troubleshooting</h1>
        </div>

        {/* <div className="expertise-troubleshooting-icon">
          <MessagesSquare />
        </div> */}
        
        {/* Main text centered */}
        <div className="expertise-troubleshooting-maintext">
          <p>At CERASP, we can help you identify and resolve technical issues that may arise in research 
              or production. Whether it is product-related technical problems, equipment malfunctions, 
              or manufacturing process issues, CERASP can assist you in implementing solutions to 
              correct them and improve your operations. </p>
        </div>
        {/* Optionally keep image section if needed */}
        {/* <div className="expertise-troubleshooting-image-section">
          Lorem Ipsum
        </div> */}
      </div>
    </div>
  );
};

export default ExpertiseTroubleshooting;
