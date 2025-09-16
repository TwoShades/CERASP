import React, { useContext } from "react";
// import "./css/SectorsMedicalDevices.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";
import sectorTranslations from "./sectors-translation.json";
import "../_css/Subpage.css";
import "./css/SectorsMedicalDevices.css";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import PageLinkCTA from "../../components/interactables/PageLinkCTA";

export default function SectorsMedicalDevices() {
  const { language } = useContext(LanguageContext);
  const content = sectorsTranslations.medical_device;

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
            src="/photos/pexels/pexels-analogicus-3383763-10665639.jpg"
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
            ? "Santé Animale"
            : "Animal Health"
        }
        url="/sector-of-activities/animal-health"
      />
    </main>
  );
}
