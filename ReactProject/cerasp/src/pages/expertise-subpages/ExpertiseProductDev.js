import React, { useContext } from "react";
import "../_css/Subpage.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import InteractiveBullet from "../../components/uicomponents/InteractiveBullet";
import PageLinkCTA from "../../components/interactables/PageLinkCTA";

const ExpertiseProductDev = () => {
  const { language } = useContext(LanguageContext);
  const productDev = expertiseTranslations.productDev;

  return (
    <main className="subpage-overview">
      <div className="layout-panel-5"></div>

      <AnimateObject
        variantsToRun={["slideLeft", "fadeIn"]}
        className="subpage-intro-grid"
      >
        <h1>{productDev.title[language].toUpperCase()}</h1>
        <p>
          {productDev.content
            ? productDev.content[language]
            : ""}
        </p>
      </AnimateObject>

      <section className="subpage-row">
        <AnimateObject
          direction="left"
          className="subpage-col-1-4"
        >
          <img
            src="/photos/FromOldSite/biotech-scaled.jpg"
            alt="Product Development"
          />
        </AnimateObject>
      </section>

      <div className="subpage-flex-column">
        <div id="expertise-ideation-bullets">
          {Object.entries(productDev)
            .filter(([key]) => key.startsWith("card"))
            .map(([key, card]) => (
              <InteractiveBullet
                key={key}
                title={card.title[language]}
                description={card.content[language]}
              />
            ))}
          <div className="expertise-generic-square"></div>
        </div>
      </div>
      <PageLinkCTA
        text={
          language === "fr"
            ? "Mise à l'Échelle & Préparation à la Production"
            : "Scale-Up & Manufacturing Readiness"
        }
        url="/expertise/scale-up-manufacturing"
      />
    </main>
  );
};

export default ExpertiseProductDev;
