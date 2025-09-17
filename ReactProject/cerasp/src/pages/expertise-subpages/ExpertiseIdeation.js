import React, { useContext } from "react";
import "./css/ExpertiseIdeation.css";
import "../_css/Subpage.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import InteractiveBullet from "../../components/uicomponents/InteractiveBullet"; //
import AnimateObject from "../../components/uicomponents/AnimateObject";
import PageLinkCTA from "../../components/interactables/PageLinkCTA";

const ExpertiseIdeation = () => {
  const { language } = useContext(LanguageContext);
  const ideation = expertiseTranslations.ideation;

  const title = ideation.title[language];
  const intro = ideation.intro[language];
  const content = ideation[language];

  return (
    <main className="subpage-overview">
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
          className="subpage-col-1-4"
        >
          <img
            src="/photos/FromOldSite/AdobeStock_142270277__-scaled.jpg"
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
      <PageLinkCTA
        text={
          language === "fr"
            ? "Preuve de Concept"
            : "Proof of Concept"
        }
        url="/expertise/proof-of-concept"
      />
    </main>
  );
};

export default ExpertiseIdeation;
