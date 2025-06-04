import React, { useContext } from "react";
import "./css/SectorsPrototyping.css";
import { MessagesSquare } from 'lucide-react';
import { LanguageContext } from "../../contexts/LanguageContext";
// import sectorsTranslations from "./sectors-translations.json";

const SectorsPrototyping = () => {
  const { language } = useContext(LanguageContext);
//   const prototyping = sectorsTranslations.prototyping;

  return (
    <div className="sectors-prototyping-parent">
      <div className="sectors-prototyping-panel">
        {/* Title at top left */}
        <div className="sectors-prototyping-title">
          <h1>{language === "fr" ? "Prototypage" : "Prototyping"}</h1>
        </div>

        {/* <div className="sectors-prototyping-icon">
          <MessagesSquare />
        </div> */}
        
        {/* Main text centered */}
        <div className="sectors-prototyping-maintext">
          <p>
            {language === "fr"
              ? `Nous nous spécialisons dans le développement et les tests de prototypes pour les 
                produits pharmaceutiques, la biomanufacturation et les applications de santé. Nos 
                services incluent la création de modèles à un stade précoce pour les formulations de 
                médicaments, autres produits, ou les processus de production, permettant des tests 
                rigoureux et un perfectionnement avant le passage à une production à grande échelle. 
                Nous aidons à identifier les problèmes potentiels, à optimiser la conception et à garantir la 
                fonctionnalité du produit ainsi que sa conformité réglementaire. Nos services de 
                prototypage facilitent une transition en douceur du concept à la production commerciale.`
              : `We specialize in developing and testing prototypes for pharmaceutical products, 
                biomanufacturing, and healthcare applications. Our services include creating early-stage 
                models for drug and product formulations, or production processes, allowing for rigorous 
                testing and refinement before scaling up. We help identify potential issues, optimize 
                design, and ensure product functionality and regulatory compliance. Our prototyping 
                services support a smooth transition from concept to commercial production.`}
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

export default SectorsPrototyping;
