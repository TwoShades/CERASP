import "./css/AboutFacilities.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import { useContext } from "react";
import React from "react";
import SubPageHeader from "../../components/layouts/SubPageHeader";

export default function AboutFacilities() {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(ScreenSizeContext);
  return (
    <div className="about-facilities-layout">
      <SubPageHeader
        name={language === "fr" ? "LOCATIONS" : "FACILITIES"}
        extraContent={
          <h4>
            {language === "fr"
              ? "Le CERASP compte trois sites répartis à travers Montréal."
              : "The CERASP has three platforms available across Montreal."}
          </h4>
        }
      />

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
            {language === "fr" ? (
              <h2>Cégep John Abbott</h2>
            ) : (
              <h2>John Abbott College</h2>
            )}

            <p>
              {language === "fr"
                ? "Prototypage, fabrication à petit échelle et tests"
                : "Prototyping, small-scale manufacturing and testing"}
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
                ? "Prototypage, fabrication à petit échelle et tests"
                : "Prototyping, small-scale manufacturing and testing"}
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
        {language === "fr" ? (
          <img src="/photos/facilities/cerasp-map-fr.jpg" alt="CERASP Map" />
        ) : (
          <img src="/photos/facilities/cerasp-map-en.jpg" alt="CERASP Map" />
        )}
      </div>
    </div>
  );
}
