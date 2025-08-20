import React, { useContext } from "react";
import "../_css/Subpage.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import ContactCTA from "../../components/interactables/ContactCTA";
import InteractiveBullet from "../../components/uicomponents/InteractiveBullet";
import PageLinkCTA from "../../components/interactables/PageLinkCTA";

const ExpertiseScaleUp = () => {
  const { language } = useContext(LanguageContext);
  const scaleUp =
    expertiseTranslations.scaleUpManufacturing;

  const fieldsArray = Object.values(scaleUp.fields);

  return (
    <main className="subpage-overview">
      <div className="layout-panel-5"></div>

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
      <PageLinkCTA
        text={
          language === "fr"
            ? "Transfert Technologique & Préparation Réglementaire"
            : "Technology Transfer & Regulatory Readiness"
        }
        url="/expertise/technology-transfer"
      />
      <ContactCTA infoText="////Custom Text.////" />
    </main>
  );
};

export default ExpertiseScaleUp;
