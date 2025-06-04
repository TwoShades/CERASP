import React, { useContext, useState, useEffect, useRef } from "react";
import "./css/UnderConstruction.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { Construction, Clock, Wrench, AlertCircle } from "lucide-react";

const UnderConstruction = ({ className = "" }) => {
  const { language } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const panelRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated progress bar
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(65); // Set to whatever percentage you want
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section className="under-construction-parent">
      <div 
        ref={panelRef}
        className={`under-construction-panel ${isVisible ? 'animate-in' : ''} ${className}`}
      >
        {/* Construction Icon */}
        <div className="construction-icon-container">
          <div className="construction-icon">
            <Construction size={64} />
          </div>
          <div className="icon-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="construction-content">
          <h1 className="construction-title">
            {language === "fr" ? "En Construction" : "Under Construction"}
          </h1>

          <p className="construction-subtitle">
            {language === "fr" 
              ? "Nous travaillons dur pour vous apporter quelque chose d'incroyable"
              : "We're working hard to bring you something amazing"
            }
          </p>

          <p className="construction-description">
            {language === "fr"
              ? "Cette section est actuellement en développement. Revenez bientôt pour découvrir nos nouvelles fonctionnalités et améliorations."
              : "This section is currently under development. Check back soon to discover our new features and improvements."
            }
          </p>

          {/* Status Items */}
          <div className="status-grid">
            <div className="status-item">
              <div className="status-icon">
                <Wrench size={20} />
              </div>
              <div className="status-text">
                <span className="status-title">
                  {language === "fr" ? "Développement" : "Development"}
                </span>
                <span className="status-desc">
                  {language === "fr" ? "En cours" : "In Progress"}
                </span>
              </div>
            </div>
            
            <div className="status-item">
              <div className="status-icon">
                <Clock size={20} />
              </div>
              <div className="status-text">
                <span className="status-title">
                  {language === "fr" ? "Lancement" : "Launch"}
                </span>
                <span className="status-desc">
                  {language === "fr" ? "Bientôt" : "Coming Soon"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="construction-decorations">
          <div className="decoration-dot decoration-dot-1"></div>
          <div className="decoration-dot decoration-dot-2"></div>
          <div className="decoration-dot decoration-dot-3"></div>
          <div className="decoration-line decoration-line-1"></div>
          <div className="decoration-line decoration-line-2"></div>
        </div>
      </div>
    </section>
  );
};

export default UnderConstruction;