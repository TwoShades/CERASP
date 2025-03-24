import React, { useState } from "react";
import "./css/AboutOverview.css";

const AboutOverview = () => {
  // State hooks for toggling the full text for Mission, Vision, and Values
  const [showMission, setShowMission] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [showValues, setShowValues] = useState(false);

  const toggleMission = () => {
    setShowMission(!showMission); // Toggle the visibility of the mission details and bullet points
  };

  const toggleVision = () => {
    setShowVision(!showVision); // Toggle the visibility of the vision details and bullet points
  };

  const toggleValues = () => {
    setShowValues(!showValues); // Toggle the visibility of the values details and bullet points
  };

  return (
    <div className="about-overview-grid">
      <div className="about-overview-history">
        <div className="small-circle"></div>
        <h2>HISTORY</h2>
        <p>
          Founded in 2019, the Centre for Expertise and Applied Research in
          Pharmaceutical Sciences (CERASP) supports applied research, technology
          transfer, and technical training in biopharmaceuticals, pharmaceutical
          technology, production, and Regulatory Affairs. As a trusted life
          sciences partner, we provide turnkey solutions to streamline product
          development and reduce commercialization risks. We also offer
          industry-focused training and internships. A member of the CCTT
          network, CERASP is affiliated with John Abbott College and Cégep
          Gérald-Godin, delivering high-quality services through innovation and
          expertise.
        </p>
      </div>

      {/* Background Panel */}
      <div className="about-overview-background"></div>

      {/* Mission Section */}
      <div className="about-overview-mission">
        <h2>MISSION</h2>
        <ul className={`mission-bullet-points ${showMission ? "hide" : ""}`}>
          <li>Advance research</li>
          <li>Develop solutions</li>
          <li>Support advancements</li>
        </ul>
        <button onClick={toggleMission}>{showMission ? "-" : "+"}</button>
        <div className={`mission-details ${showMission ? "open" : ""}`}>
          <p>
            {`Advance research and training in pharmaceutical innovation to
            drive cutting-edge solutions, Develop and evaluate new solutions in
            biopharmaceutics and technology to enhance product quality, Support
            production and digital health advancements to ensure the industry's
            growth and transformation.`}
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="about-overview-vision">
        <h2>VISION</h2>
        <ul className={`vision-bullet-points ${showVision ? "hide" : ""}`}>
          <li>Be a leading partner</li>
          <li>Deliver innovations</li>
          <li>Foster strong ties</li>
        </ul>
        <button onClick={toggleVision}>{showVision ? "-" : "+"}</button>
        <div className={`vision-details ${showVision ? "open" : ""}`}>
          <p>
            {`Be a leading partner in applied pharmaceutical research in Quebec
            and Canada by providing transformative solutions, Deliver innovative
            solutions to clients while ensuring their success, Foster strong
            ties with educational and research communities worldwide to
            collaborate and advance pharmaceutical technologies.`}
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="about-overview-values">
        <h2>VALUES</h2>
        <ul className={`values-bullet-points ${showValues ? "hide" : ""}`}>
          <li>Excellence & Integrity</li>
          <li>Client-Focused</li>
          <li>Sustainable Innovation</li>
        </ul>
        <button onClick={toggleValues}>{showValues ? "-" : "+"}</button>
        <div className={`values-details ${showValues ? "open" : ""}`}>
          <p>
            {`Excellence & Integrity: We aim to provide high-quality service
            with dedication, trust, and confidentiality, Client-Focused Solutions:
            We focus on delivering fast, proactive, and mutually successful
            solutions, Sustainable Innovation: We are committed to developing
            eco-friendly technologies with a long-term environmental responsibility.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOverview;
