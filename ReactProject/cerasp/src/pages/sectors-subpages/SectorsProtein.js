import React, { useContext } from "react";
import "./css/SectorsProtein.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const SectorsProtein = () => {
  const { language } = useContext(LanguageContext);
  const protein = sectorsTranslations.protein_synthesis;
  const { overview, capabilities, collaboration } = protein.content[language];

  return (
    <div className="sectors-protein">
      <div className="sectors-protein-content">
        <SubPageHeader
          name={protein.title[language]}
          extraContent={
            <div className="about-overview-header-text">
              {language === "fr" ? (
                <p>
                  De nombreuses protéines d'intérêt peuvent être produites par
                  fermentation à partir de microorganismes tels que des
                  bactéries, des champignons ou des plantes. La surexpression de
                  ces protéines peut être induite par transformation génétique à
                  l’aide de plasmides (bactéries), de protoplastes (champignons)
                  ou d’agrobactéries (plantes). Les conditions optimales pour
                  l'extraction et la purification peuvent être atteintes en
                  intégrant des solutions économiques et respectueuses de
                  l’environnement, tout en préservant la structure et la
                  fonctionnalité de ces protéines. Enfin, leur structure et leur
                  fonctionnalité peuvent être caractérisées grâce à notre large
                  gamme d’équipements.
                </p>
              ) : (
                <p>
                  Many proteins of interest can be produced by fermentation from
                  microorganisms such as bacteria, fungi, or from plants.
                  Overexpression of these proteins can be induced by genetic
                  transformation using plasmids (bacteria), protoplasts (fungi)
                  or agrobacterium (plants). The optimum conditions for
                  extraction and purification can be achieved by integrating
                  cost- effective and environmentally friendly solutions, while
                  preserving the structure and functionality of these proteins.
                  Finally, their structure and functionality can be
                  characterized using our extensive range of equipment.
                </p>
              )}
            </div>
          }
        />

        {/* Hero Section with Image */}
        <div className="protein-hero-section">
          <div className="protein-hero-image">
            <img
              src="/photos/FromOldSite/agri-food-food-production-scaled.jpg"
              alt="Protein Synthesis"
              className="sectors-protein-image"
            />
          </div>
        </div>

        <div className="protein-cards-container">
          {/* Overview Card */}
          <div className="protein-card overview-card">
            <div className="card-header">
              <div className="card-icon">🏢</div>
            </div>
            <div className="card-content">
              {overview.map((point, idx) => (
                <div key={`overview-${idx}`} className="bullet-point">
                  • {point}
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities Card */}
          <div className="protein-card capabilities-card">
            <div className="card-header">
              <div className="card-icon">🧬</div>
            </div>
            <div className="card-content">
              <div className="bullet-point">
                • {language === "fr" ? "Capacités :" : "Capabilities include:"}
              </div>
              <div className="sub-bullet-points">
                {capabilities.map((item, idx) => (
                  <div key={`capability-${idx}`} className="sub-bullet">
                    o {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Collaboration Card */}
          <div className="protein-card collaboration-card">
            <div className="card-header">
              <div className="card-icon">🤝</div>
            </div>
            <div className="card-content">
              {collaboration.map((item, idx) => (
                <div key={`collab-${idx}`} className="bullet-point">
                  • {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorsProtein;
