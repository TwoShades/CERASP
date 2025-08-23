import "./css/AboutOverview.css";
import "../_css/Subpage.css";
import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import aboutTranslations from "./about-translations.json";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import InteractiveBullet from "../../components/uicomponents/InteractiveBullet";
import ContactIcon from "../../components/interactables/ContactIcon";

export default function AboutOverview() {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(
    ScreenSizeContext
  );
  const content = aboutTranslations;
  const subValues = content.subValues;
  return (
    <main className="subpage-overview">
      <ContactIcon />
      <div className="layout-panel-5"></div>
      <AnimateObject
        variantsToRun={["slideLeft", "fadeIn"]}
        className="subpage-intro-grid"
      >
        <h1>
          {language === "fr" ? "HISTORIQUE" : "HISTORY"}
        </h1>
        <p>{content.overviewA[language]}</p>
      </AnimateObject>

      <section className="subpage-row">
        <div className="subpage-col-1-5">
          <img
            src="/photos/FromOldSite/biotech-scaled.jpg"
            alt="Biotech facility"
          />
        </div>
      </section>

      <section className="subpage-row">
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
      </section>

      <section className="subpage-row">
        <AnimateObject
          direction="right"
          className="subpage-col-1-5"
        >
          <p>{content.overviewC[language]}</p>
        </AnimateObject>
      </section>

      <section
        className="subpage-row"
        id="about-overview-secondary-content"
      >
        <AnimateObject
          className="subpage-col-2-5"
          variantsToRun={["slideLeft", "fadeIn"]}
          style={{ marginBottom: "var(--space-l" }}
        >
          <h2>{content.mission.title[language]}</h2>
          <p>{content.mission[language]}</p>
        </AnimateObject>

        <AnimateObject
          className="subpage-col-2-5"
          variantsToRun={["slideRight", "fadeIn"]}
          style={{ marginBottom: "var(--space-l" }}
        >
          <h2>{content.vision.title[language]}</h2>
          <p>{content.vision[language]}</p>
        </AnimateObject>
        <AnimateObject
          className="subpage-col-2-5"
          variantsToRun={["slideLeft", "fadeIn"]}
        >
          <h2>{content.values.title[language]}</h2>
          <p>{content.values[language]}</p>
        </AnimateObject>
      </section>

      <div
        className="subpage-flex-column"
        id="about-overview-bullets"
      >
        {/* <div className="subpage-col-1-5"> */}
        {subValues.map(({ title, en, fr }) => (
          <InteractiveBullet
            key={title[language]}
            title={title[language]}
            description={language === "en" ? en : fr}
          />
        ))}
        {/* </div> */}
      </div>
    </main>
  );
}
