import React, { useContext } from "react";
import "./css/ExpertiseIdeation.css";
import "../_css/Subpage.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import InteractiveBullet from "../../components/uicomponents/InteractiveBullet"; // <-- your bullet component
import AnimateObject from "../../components/uicomponents/AnimateObject";
import ContactCTA from "../../components/interactables/ContactCTA";

const ExpertiseIdeation = () => {
  const { language } = useContext(LanguageContext);
  const ideation = expertiseTranslations.ideation;

  const title = ideation.title[language];
  const intro = ideation.intro[language];
  const content = ideation[language]; // <---- THIS line extracts the correct array for the current language

  return (
    <div className="subpage">
      <div className="subpage-overview">
        <AnimateObject
          direction="right"
          className="subpage-overview-intro"
        >
          <h1>{title.toUpperCase()}</h1>
          <p>{intro}</p>
        </AnimateObject>
        <AnimateObject
          direction="left"
          className="subpage-overview-image"
        >
          <img
            src="/photos/FromOldSite/AdobeStock_142270277__-scaled.jpg"
            alt="Biotech facility"
            id="expertise-intro-img"
            height="600"
          />
        </AnimateObject>
        <div className="subpage-bulleted-list">
          {content.map(({ title, description }) => (
            <InteractiveBullet
              key={title}
              title={title}
              description={description}
            />
          ))}
          <div className="expertise-generic-square"></div>
        </div>

        <ContactCTA infoText="////Custom Text.////" />
      </div>
    </div>
  );
};

export default ExpertiseIdeation;
