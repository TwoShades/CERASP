import React, { useContext, useState, useEffect, useRef } from "react";
import "./css/ExpertiseHealthCanada.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import { ExternalLink, Shield, Award, Users } from "lucide-react";

const ExpertiseHealthCanada = ({
  leftContent,
  rightContent,
  className = "",
}) => {
  const { language } = useContext(LanguageContext);
  const healthCanada = expertiseTranslations.health_canada;
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const panelRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    // Add smooth scroll or navigation logic here
    console.log("Health Canada logo clicked");
  };

  return (
    <section className="expertise-health-canada-parent">
      <div
        ref={panelRef}
        className={`expertise-health-canada-panel ${
          isVisible ? "animate-in" : ""
        } ${className}`}
      >
        <div className="expertise-health-canada-left">
          {/* Enhanced Logo Section */}
          <div className="expertise-health-canada-link">
            <button
              onClick={handleLogoClick}
              className="logo-button"
              aria-label="Health Canada Official Site"
            >
              <img
                src="./svg/canadagovlogo.svg"
                alt="Government of Canada Logo"
                loading="lazy"
              />
              {/* <ExternalLink size={16} className="external-icon" /> */}
            </button>
          </div>

          {/* Enhanced Title Section */}
          <div className="expertise-health-canada-title">
            <div className="title-decorator"></div>
            <h2>{healthCanada.title[language]}</h2>
            <div className="title-badge">
              <Shield size={16} />
              <span>{healthCanada.badge[language]}</span>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="expertise-health-canada-content">
            <p className="main-text">{healthCanada.content[language]}</p>

            {/* New Features Grid */}
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <Shield size={20} />
                </div>
                <div className="feature-text">
                  <span className="feature-title">
                    {healthCanada.features.regulatory.title[language]}
                  </span>
                  <span className="feature-desc">
                    {healthCanada.features.regulatory.description[language]}
                  </span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Users size={20} />
                </div>
                <div className="feature-text">
                  <span className="feature-title">
                    {healthCanada.features.team.title[language]}
                  </span>
                  <span className="feature-desc">
                    {healthCanada.features.team.description[language]}
                  </span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            {/* <div className="cta-section">
              <button className="primary-cta">
                Learn More About Our Services
              </button>
              <button className="secondary-cta">
                View Certifications
              </button>
            </div> */}
          </div>
        </div>

        {/* Enhanced Image Section */}
        <div className="expertise-health-canada-image">
          <div className="image-container">
            <div className={`image-placeholder ${imageLoaded ? "loaded" : ""}`}>
              <div className="placeholder-shimmer"></div>
            </div>
            <img
              src="./photos/cerasp-image1-scaled-450x450.jpg"
              alt="Healthcare Technology Solutions"
              loading="lazy"
              onLoad={handleImageLoad}
              className={`main-image ${imageLoaded ? "loaded" : ""}`}
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <div className="overlay-badge">
                  <span>{healthCanada.overlay_badge[language]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Statistics */}
          {/* <div className="floating-stats">
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Compliant</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseHealthCanada;
