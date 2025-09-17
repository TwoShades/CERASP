import React, { useContext } from "react";
import "../_css/Subpage.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import InteractiveBullet from "../../components/uicomponents/InteractiveBullet";
import PageLinkCTA from "../../components/interactables/PageLinkCTA";

const ExpertiseTechTransfer = () => {
  const { language } = useContext(LanguageContext);
  const techTransfer = expertiseTranslations.techTransfer;

  const featuresArray = Object.values(
    techTransfer.features
  );

  return (
    <main className="subpage-overview">
      <AnimateObject
        variantsToRun={["slideLeft", "fadeIn"]}
        className="subpage-intro-grid"
      >
        <h1>
          {techTransfer.title[language].toUpperCase()}
        </h1>
        <p>{techTransfer.content[language]}</p>
      </AnimateObject>

      <section className="subpage-row">
        <AnimateObject
          direction="left"
          className="subpage-col-1-3"
        >
          <img
            src="/photos/FromOldSite/AdobeStock_316052779__-scaled-450x450.jpg"
            alt="Technology Transfer"
          />
        </AnimateObject>
      </section>

      <div className="subpage-flex-column">
        <div id="expertise-ideation-bullets">
          {featuresArray.map((feature, i) => (
            <InteractiveBullet
              key={i}
              title={feature.title[language]}
              description={feature.description[language]}
            />
          ))}
        </div>
      </div>
      <PageLinkCTA
        text={
          language === "fr"
            ? "De l'Idée à la Stratégie"
            : "Ideation: From Concept to Strategy"
        }
        url="/expertise/ideation"
      />
    </main>
  );
};

export default ExpertiseTechTransfer;
