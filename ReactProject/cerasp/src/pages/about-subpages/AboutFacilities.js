import "./css/AboutFacilities.css";
import "../_css/Subpage.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import { useContext } from "react";
import React from "react";
import SubPageHeader from "../../components/layouts/SubPageHeader";
import AnimateObject from "../../components/uicomponents/AnimateObject";

export default function AboutFacilities() {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(
    ScreenSizeContext
  );
  return (
    <main className="subpage-overview">
      <AnimateObject
        variantsToRun={["slideLeft", "fadeIn"]}
        className="subpage-intro-grid"
      >
        <h1>
          {language === "fr"
            ? "INSTALLATIONS"
            : "FACILITIES"}
        </h1>
        <p>
          {language === "fr"
            ? "Le CERASP compte trois sites répartis à travers Montréal."
            : "The CERASP has three platforms available across Montreal."}
        </p>
      </AnimateObject>

      <section className="subpage-row">
        <div className="subpage-col-1-3">
          <img
            src={`/photos/facilities/${
              isFullScreen
                ? "john-abbott-college.jpg"
                : "john-abbott-college-landscape.jpg"
            }`}
            alt="John Abbott College"
          />
        </div>
        <div className="subpage-col-3-5 about-facilities-names">
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
      </section>
      <section className="subpage-row">
        <div className="subpage-col-1-3 about-facilities-names">
          <h2>Cégep Gérald-Godin</h2>
          <p>
            {language === "fr"
              ? "Prototypage, fabrication à petit échelle et tests"
              : "Prototyping, small-scale manufacturing and testing"}
          </p>
        </div>
        <div className="subpage-col-3-5">
          <img
            src={`/photos/facilities/${
              isFullScreen
                ? "cegep-gerald-godin.jpg"
                : "cegep-gerald-godin-landscape.jpg"
            }`}
            alt="Cégep Gérald-Godin"
          />{" "}
        </div>
      </section>
      <section className="subpage-row">
        <div className="subpage-col-1-3">
          <img
            src={`/photos/facilities/${
              isFullScreen
                ? "admare.jpg"
                : "admare-landscape.jpg"
            }`}
            alt="AdMare Facility"
          />
        </div>

        <div className="subpage-col-3-5 about-facilities-names">
          {" "}
          <h2>AdMare BioInnovations</h2>
          <p>
            {language === "fr"
              ? "Laboratoire de recherche et développement"
              : "Research laboratory and development"}
          </p>
        </div>
      </section>
      <section className="subpage-row">
        <div className="subpage-col-2-4 about-facilities-map-container">
          <h2 id="about-facilities-map-title">
            {language === "fr"
              ? "Où nous trouver"
              : "Where to find us"}
          </h2>
          {language === "fr" ? (
            <img
              src="/photos/facilities/cerasp-map-fr.jpg"
              alt="CERASP Map"
            />
          ) : (
            <img
              src="/photos/facilities/cerasp-map-en.jpg"
              alt="CERASP Map"
              id="about-facilities-map"
            />
          )}
        </div>
      </section>
    </main>
  );
}
