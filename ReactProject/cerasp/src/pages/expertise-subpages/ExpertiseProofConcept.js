import React, { useContext } from "react";
import "./css/ExpertiseProofConcept.css";
import "../_css/Subpage.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import InteractiveBullet from "../../components/uicomponents/InteractiveBullet";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import ContactCTA from "../../components/interactables/ContactCTA";

const ExpertiseProofConcept = () => {
  const { language } = useContext(LanguageContext);
  const proofConcept = expertiseTranslations.proofConcept;

  const title = proofConcept.title[language];
  const intro = proofConcept.content[language];
  const content = Object.values(proofConcept.steps).map(
    (step) => ({
      title: step.title[language],
      description: step.description[language],
    })
  );

  return (
    <main className="subpage-overview">
      <div className="layout-panel-5"></div>

      <AnimateObject
        variantsToRun={["slideLeft", "fadeIn"]}
        className="subpage-intro-grid"
      >
        <h1>{title.toUpperCase()}</h1>
        <p>{intro}</p>
      </AnimateObject>
      <section className="subpage-row">
        <AnimateObject
          direction="left"
          className="subpage-col-1-3"
        >
          <img
            src="/photos/FromOldSite/AdobeStock_315975074__-scaled-450x450.jpg"
            alt="Biotech facility"
          />
        </AnimateObject>
      </section>
      <div className="subpage-flex-column">
        <div id="expertise-ideation-bullets">
          {content.map(({ title, description }) => (
            <InteractiveBullet
              key={title}
              title={title}
              description={description}
            />
          ))}
          <div className="expertise-generic-square"></div>
        </div>
      </div>
      <ContactCTA />
    </main>
  );
};

export default ExpertiseProofConcept;
