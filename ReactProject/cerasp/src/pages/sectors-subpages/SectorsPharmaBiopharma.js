import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import InteractiveBullet from "../../components/uicomponents/InteractiveBullet";
import PageLinkCTA from "../../components/interactables/PageLinkCTA";
import sectorTranslations from "./sectors-translation.json";

import "../_css/Subpage.css";
import "./css/SectorsPharmaBiopharma.css";

export default function SectorsPharmaBiopharma() {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(
    ScreenSizeContext
  );
  const content =
    sectorTranslations.pharmaceutical_biopharmaceutical;

  return (
    <main className="subpage-overview">
      <div className="layout-panel-5"></div>
      <AnimateObject
        variantsToRun={["slideLeft", "fadeIn"]}
        className="subpage-intro-grid"
      >
        <h1>{content.title[language]}</h1>
        <p>{content.contentA[language]}</p>
      </AnimateObject>
      <section className="subpage-row">
        <AnimateObject
          variantsToRun={["slideLeft", "fadeIn"]}
          className="subpage-col-1-3"
        >
          <img
            src="/photos/FromOldSite/cerasp-image1-scaled-450x450.jpg"
            alt="Product Development"
          />
        </AnimateObject>
        <AnimateObject
          variantsToRun={["slideLeft", "fadeIn"]}
          className="subpage-col-3-5"
          style={{ padding: "10% 0 0 0" }}
        >
          <p>{content.contentB[language]}</p>
        </AnimateObject>
      </section>
      <section className="subpage-row">
        <AnimateObject
          variantsToRun={["slideLeft", "fadeIn"]}
          className="subpage-col-1-4 pharma-biopharma-bullets"
        >
          <h2>{content.bulletTitle[language]}</h2>
          <ul>
            {content.bulletPoints[language].map(
              (point, index) => (
                <li key={index}>{point}</li>
              )
            )}
          </ul>
        </AnimateObject>
      </section>
      <PageLinkCTA
        text={
          language === "fr"
            ? "Dermo / Cosméceutiques"
            : "Dermo / Cosmeceuticals"
        }
        url="/sector-of-activities/dermo-cosmeceuticals"
      />
    </main>
  );
}
