import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";
import AnimateObject from "../../components/uicomponents/AnimateObject.js";
import "./css/SectorsAnimalHealth.css";
import "../_css/Subpage.css";
import PageLinkCTA from "../../components/interactables/PageLinkCTA";
import ContactCTA from "../../components/interactables/ContactCTA";

const SectorsAnimalHealth = () => {
  const { language } = useContext(LanguageContext);
  const content = sectorsTranslations.animal_health;

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
          variantsToRun={["fadeIn"]}
          className="subpage-col-3-4"
        >
          <img
            src="/photos/pexels/pexels-tima-miroshnichenko-6235018.jpg"
            alt="Biotech facility"
          />
        </AnimateObject>
        <AnimateObject
          variantsToRun={["fadeIn"]}
          className="subpage-col-4-5"
        >
          <img
            src="/photos/pexels/pexels-pixabay-416160.jpg"
            alt="Biotech facility"
          />
        </AnimateObject>
      </section>
      <section className="subpage-row">
        <AnimateObject
          variantsToRun={["slideRight", "fadeIn"]}
          className="subpage-col-1-3"
        >
          <img
            src="/photos/FromOldSite/animal-health-scaled.jpg"
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
        text="REPLACE"
        url="/sector-of-activities"
      />
      <ContactCTA />
    </main>
  );
};

export default SectorsAnimalHealth;
