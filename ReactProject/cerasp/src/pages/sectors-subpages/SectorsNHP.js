import React, { useContext } from "react";
import "./css/SectorsNHP.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import PageLinkCTA from "../../components/interactables/PageLinkCTA";
import ContactCTA from "../../components/interactables/ContactCTA";
import sectorTranslations from "./sectors-translation.json";
import "../_css/Subpage.css";
import "./css/SectorsNHP.css";

export default function SectorsNHP() {
  const { language } = useContext(LanguageContext);
  const content = sectorTranslations.natural_health_product;
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
          variantsToRun={["slideRight", "fadeIn"]}
          className="subpage-col-1-3"
        >
          <img
            src="/photos/FromOldSite/pharmaNHP.jpg"
            alt="Biotech facility"
          />
        </AnimateObject>
        <AnimateObject
          variantsToRun={["slideRight", "fadeIn"]}
          className="subpage-col-3-5"
          style={{ padding: "15% 0 0 0" }}
        >
          <p>{content.contentB[language]}</p>
        </AnimateObject>
      </section>
      <PageLinkCTA
        text={
          language === "fr"
            ? "Dispositifs Médicaux"
            : "Medical Devices"
        }
        url="/sector-of-activities/medical-devices"
      />
      <ContactCTA />
    </main>
  );
}
