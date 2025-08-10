import React, { useContext } from "react";
import "../_css/Subpage.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import ContactCTA from "../../components/interactables/ContactCTA";
import InteractiveBullet from "../../components/uicomponents/InteractiveBullet";

const ExpertiseScaleUp = () => {
  const { language } = useContext(LanguageContext);
  const scaleUp =
    expertiseTranslations.scaleUpManufacturing;

  // Convert fields object to array for mapping
  const fieldsArray = Object.values(scaleUp.fields);

  return (
    <main className="subpage">
      <div className="layout-panel-5"></div>

      <div className="subpage-overview">
        <AnimateObject
          variantsToRun={["slideLeft", "fadeIn"]}
          className="subpage-intro-grid"
        >
          <h1>
            {(language === "fr"
              ? "Mise à l'échelle & préparation à la production"
              : "Scale-Up & Manufacturing Readiness"
            ).toUpperCase()}
          </h1>
          <p>{scaleUp.content[language]}</p>
        </AnimateObject>

        <section className="subpage-row">
          <AnimateObject
            direction="left"
            className="subpage-col-1-3"
          >
            <img
              src="/photos/FromOldSite/AdobeStock_309159152-scaled-450x450.jpg"
              alt="Scale-Up & Manufacturing"
            />
          </AnimateObject>
        </section>

        <div className="subpage-flex-column">
          <div id="expertise-ideation-bullets">
            {fieldsArray.map((field, i) => (
              <InteractiveBullet
                key={i}
                title={field.title[language]}
                description={field.desc[language]}
              />
            ))}
          </div>
        </div>

        <ContactCTA infoText="////Custom Text.////" />
      </div>
    </main>
  );
};

export default ExpertiseScaleUp;
