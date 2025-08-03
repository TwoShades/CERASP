import "./css/AboutFacilities.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import { useContext } from "react";
import React from "react";
import SubPageHeader from "../../components/layouts/SubPageHeader";
import RevealOnScroll from "../../components/uicomponents/RevealOnScroll";

export default function AboutFacilities() {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(ScreenSizeContext);
  return (
    <div className="about-facilities">
      <div className="about-facilities-intro">
        <RevealOnScroll direction="right">
          <h1>{language === "fr" ? "INSTALLATIONS" : "FACILITIES"}</h1>
          <p>
            {language === "fr"
              ? "Le CERASP compte trois sites répartis à travers Montréal."
              : "The CERASP has three platforms available across Montreal."}
          </p>
        </RevealOnScroll>
      </div>
      <div className="about-facilities-content">
        <div className="facility-card facility-jac">
          <img
            src={`/photos/facilities/${
              isFullScreen
                ? "john-abbott-college.jpg"
                : "john-abbott-college-landscape.jpg"
            }`}
            alt="John Abbott College"
          />
        </div>
        <div className="facility-jac-info">
          {" "}
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

        <div className="facility-card facility-gg">
          <img
            src={`/photos/facilities/${
              isFullScreen
                ? "cegep-gerald-godin.jpg"
                : "cegep-gerald-godin-landscape.jpg"
            }`}
            alt="Cégep Gérald-Godin"
          />
        </div>
        <div className="facility-gg-info">
          {" "}
          <h2>Cégep Gérald-Godin</h2>
          <p>
            {language === "fr"
              ? "Prototypage, fabrication à petit échelle et tests"
              : "Prototyping, small-scale manufacturing and testing"}
          </p>
        </div>
        <div className="facility-card facility-admare">
          <img
            src={`/photos/facilities/${
              isFullScreen ? "admare.jpg" : "admare-landscape.jpg"
            }`}
            alt="AdMare Facility"
          />
        </div>
        <div className="facility-admare-info">
          {" "}
          <h2>AdMare BioInnovations</h2>
          <p>
            {language === "fr"
              ? "Laboratoire de recherche et développement"
              : "Research laboratory and development"}
          </p>
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
