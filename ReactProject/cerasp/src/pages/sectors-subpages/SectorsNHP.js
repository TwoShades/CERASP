import React, { useContext } from "react";
import "./css/SectorsNHP.css";
import { MessagesSquare } from "lucide-react";
import { LanguageContext } from "../../contexts/LanguageContext";
// import sectorsTranslations from "./sectors-translations.json";

const SectorsNHP = () => {
  const { language } = useContext(LanguageContext);
  //   const prototyping = sectorsTranslations.prototyping;

  return (
    <div className="sectors-prototyping-parent">
      <div className="sectors-prototyping-panel">
        {/* Title at top left */}
        <div className="sectors-prototyping-title">
          <h1>
            {language === "fr"
              ? "Produits de santé naturels"
              : "Natural Health Products"}
          </h1>
        </div>

        {/* <div className="sectors-prototyping-icon">
          <MessagesSquare />
        </div> */}

        {/* Main text centered */}
        <div className="sectors-prototyping-maintext">
          <p>
            {language === "fr"
              ? `Nous soutenons le développement et la commercialisation de produits de santé naturels, en garantissant le respect des cadres réglementaires tout en préservant l'intégrité des ingrédients naturels.`
              : `We support the development and market readiness of natural health products, ensuring 
compliance with regulatory frameworks while maintaining the integrity of natural 
ingredients.`}
          </p>
        </div>
        {/* Optionally keep image section if needed */}
        {/* <div className="sectors-prototyping-image-section">
          Lorem Ipsum
        </div> */}
      </div>
    </div>
  );
};

export default SectorsNHP;
