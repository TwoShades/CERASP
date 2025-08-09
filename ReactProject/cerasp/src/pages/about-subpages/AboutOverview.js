import "./css/AboutOverview.css";
import "../_css/Subpage.css";
import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import aboutTranslations from "./about-translations.json";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import InteractiveBullet from "../../components/uicomponents/InteractiveBullet";

export default function AboutOverview() {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(
    ScreenSizeContext
  );
  const content = aboutTranslations;

  return (
    <div className="subpage-overview">
      <AnimateObject
        variantsToRun={["slideLeft", "fadeIn"]}
        className="subpage-intro-grid"
      >
        <h1>
          {language === "fr" ? "HISTORIQUE" : "HISTORY"}
        </h1>
        <p>{content.overviewA[language]}</p>
      </AnimateObject>

      <div className="subpage-row">
        <div className="subpage-col-1-5">
          <img
            src="/photos/FromOldSite/biotech-scaled.jpg"
            alt="Biotech facility"
          />
        </div>
      </div>

      <div className="subpage-row">
        <AnimateObject className="subpage-col-1-3">
          <img
            src="/photos/FromOldSite/AdobeStock_315999267_-scaled-450x450.jpg"
            alt="Biotech facility"
          />
        </AnimateObject>
        <AnimateObject
          variantsToRun={["slideLeft", "fadeIn"]}
          className="subpage-col-3-5"
          style={{ padding: "30% 0 0 0" }}
        >
          <p>{content.overviewB[language]}</p>
        </AnimateObject>

        {/*  <AnimateObject
          direction="right"
          className="subpage-col-2-5"
        >
          <p>{content.overviewC[language]}</p>
        </AnimateObject> */}

        {/* <div className="about-overview-primary-sections">
          <AnimateObject
            className="about-overview-primary mission"
            direction="right"
          >
            <h2>{content.mission.title[language]}</h2>
            <p>{content.mission[language]}</p>
          </AnimateObject>

          <AnimateObject
            className="about-overview-primary vision"
            direction="right"
          >
            <h2>{content.vision.title[language]}</h2>
            <p>{content.vision[language]}</p>
          </AnimateObject>

          <AnimateObject
            className="about-overview-primary values"
            direction="right"
          >
            <h2>{content.values.title[language]}</h2>
            <p>{content.values[language]}</p>
          </AnimateObject>
        </div> */}
        {/* <div className="about-overview-secondary-sections-align">
          {Object.entries(content.subValues).map(
            ([key, val]) => (
              <InteractiveBullet
                key={key}
                title={val.title[language]}
                description={val[language]}
                className={`values-${key}`}
              />
            )
          )}
        </div> */}
      </div>
    </div>
  );
}
