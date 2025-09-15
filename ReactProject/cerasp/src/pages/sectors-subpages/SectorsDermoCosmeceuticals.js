import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";
import AnimateObject from "../../components/uicomponents/AnimateObject.js";
import "./css/SectorsDermoCosmeceuticals.css";
import "../_css/Subpage.css";
import PageLinkCTA from "../../components/interactables/PageLinkCTA";

export default function SectorsDermoCosmeceuticals() {
  const { language } = useContext(LanguageContext);
  const content = sectorsTranslations.dermo_cosmeceutical;
  return (
    <main className="subpage-overview">
      <div className="layout-panel-5"></div>
      <AnimateObject
        variantsToRun={["slideLeft", "fadeIn"]}
        className="subpage-intro-grid"
      >
        <h1>{content.title[language]}</h1>
        <p>{content.content[language]}</p>
      </AnimateObject>
      <section className="subpage-row">
        <AnimateObject
          variantsToRun={["slideRight", "fadeIn"]}
          className="subpage-col-2-4"
        >
          <img
            src="/photos/FromOldSite/nutraceutical.jpg"
            alt="Biotech facility"
          />
        </AnimateObject>
      </section>
      <PageLinkCTA
        text={
          language === "fr"
            ? "Produits de Santé Naturels"
            : "Natural Health Products"
        }
        url="/sector-of-activities/natural-health-products"
      />
    </main>
  );
}
