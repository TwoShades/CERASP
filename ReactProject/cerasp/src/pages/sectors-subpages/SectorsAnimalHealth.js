import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";
import AnimateObject from "../../components/uicomponents/AnimateObject.js";
import "./css/SectorsAnimalHealth.css";
import "../_css/Subpage.css";

const SectorsAnimalHealth = () => {
  const { language } = useContext(LanguageContext);
  const translation = sectorsTranslations.animalHealth;

  const content = {
    title: translation.title[language],
    subtitle: translation.content[language],
  };

  return (
    <div className="subpage-overview">
      <AnimateObject
        className="sector-animal-health subpage-overview-intro"
        direction="right"
      >
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
      </AnimateObject>
      <AnimateObject
        className="subpage-overview-image"
        direction="left"
      >
        <img
          src="/photos/FromOldSite/animal-health-scaled.jpg"
          alt="Biotech facility"
          className="animal-health-img"
        />
      </AnimateObject>
    </div>
  );
};

export default SectorsAnimalHealth;
