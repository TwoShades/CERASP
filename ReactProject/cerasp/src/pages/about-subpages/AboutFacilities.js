import "./css/AboutFacilities.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import { useContext } from "react";
import React from "react";

export default function AboutFacilities() {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(ScreenSizeContext);
  return (
    <div className="about-facilities">
      <div className="about-facilities-layout">
        <div className="about-facilities-header">
          <h1>{language === "fr" ? "LOCATIONS" : "FACILITIES"}</h1>
          <h3>
            {language === "fr"
              ? "Le CERASP dispose de 3 sites à la fine pointe de la technologie!"
              : "The CERASP has 3 state-of-the-art sites available!"}
          </h3>
        </div>

        <div className="about-facilities-images">
          <div className="facility-card">
            <img
              src={`/photos/facilities/${
                isFullScreen
                  ? "john-abbott-college.jpg"
                  : "john-abbott-college-Landscape.jpg"
              }`}
              alt="John Abbott College"
            />
            <div className="facility-card-info">
              <h2>John Abbott College</h2>
              <p>
                {language === "fr"
                  ? "Fabrication et tests à petite échelle"
                  : "Small-scale manufacturing and testing"}
              </p>
            </div>
          </div>

          <div className="facility-card">
            <img
              src={`/photos/facilities/${
                isFullScreen
                  ? "cegep-gerald-godin.jpg"
                  : "cegep-gerald-godin-Landscape.jpg"
              }`}
              alt="Cégep Gérald-Godin"
            />
            <div className="facility-card-info">
              <h2>Cégep Gérald-Godin</h2>
              <p>
                {language === "fr"
                  ? "Fabrication et tests à petite échelle"
                  : "Small-scale manufacturing and testing"}
              </p>
            </div>
          </div>

          <div className="facility-card">
            <img
              src={`/photos/facilities/${
                isFullScreen ? "admare.jpg" : "admare-Landscape.jpg"
              }`}
              alt="AdMare Facility"
            />
            <div className="facility-card-info">
              <h2>AdMare BioInnovations</h2>
              <p>
                {language === "fr"
                  ? "Laboratoire de recherche et développement"
                  : "Research laboratory and development"}
              </p>
            </div>
          </div>
        </div>

        <div className="about-facilities-map">
          <h2>{language === "fr" ? "Où nous trouver" : "Where to find us"}</h2>
          <img src="/photos/facilities/cerasp-map.jpg" alt="CERASP Map" />
        </div>
      </div>
    </div>
  );
}
