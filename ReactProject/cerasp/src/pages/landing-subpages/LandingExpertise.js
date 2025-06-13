import React from "react";
import "./css/LandingExpertise.css";

const LandingExpertise = () => {
  const handleExpertiseClick = () => {
    window.location.href = "/expertises";
  };

  return (
    <div className="landing-expertise-container">
      <div className="landing-expertise-content">
        <div className="landing-expertise-textSection">
          <h2 className="landing-expertise-title">Expertise & Solutions</h2>
          <p className="landing-expertise-description">
            We deliver cutting-edge technology solutions tailored to your
            business needs. Our expertise spans across multiple domains,
            ensuring comprehensive support for your digital transformation
            journey.
          </p>
          <button
            className="landing-expertise-button"
            onClick={handleExpertiseClick}
          >
            Explore Our Expertise
          </button>
        </div>

        <div className="landing-expertise-imageSection">
          <div className="landing-expertise-imagePlaceholder">
            <div className="landing-expertise-imageIcon">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <p className="landing-expertise-placeholderText">Your Image Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingExpertise;
