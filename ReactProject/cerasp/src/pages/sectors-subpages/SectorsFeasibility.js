import React, { useContext, useState } from "react";
import "./css/SectorsFeasibility.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";
import {
  Heart,
  Pill,
  Microscope,
  Leaf,
  Shield,
  Stethoscope,
  ChevronRight,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";

const SectorsFeasibility = ({ className = "" }) => {
  const { language } = useContext(LanguageContext);
  const feasibility = sectorsTranslations.feasibility;
  const TechTrans = sectorsTranslations.TechTrans;
  const [hoveredSection, setHoveredSection] = useState(null);

  const sectorsSections = [
    {
      id: "Our Services",
      title: feasibility.title[language].toUpperCase(),
      content: feasibility.content[language],
      icon: Microscope,
      searchTerm: "feasibility studies",
      color: "#FF6B6B",
      features: feasibility.features[language],
      stats: { projects: "200+", success: "95%", years: "15+" },
    },
    {
      id: "Our technical transfer services",
      title: TechTrans.title[language].toUpperCase(),
      content: TechTrans.content[language],
      icon: Stethoscope,
      searchTerm: "technical transfer",
      color: "#4ECDC4",
      features: TechTrans.features[language],
      stats: { projects: "150+", success: "98%", years: "12+" },
    },
  ];

  return (
    <div className="sectors-feasibility-layout">
      <div className={`sectors-container-enhanced ${className}`}>
        <div className="sectors-header">
          <h1>{sectorsTranslations.section.title[language]}</h1>
          <p>{sectorsTranslations.section.subtitle[language]}</p>
        </div>

        <div className="sectors-grid">
          {sectorsSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                className={`sectors-section-enhanced ${
                  hoveredSection === section.id ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
                style={{
                  "--section-color": section.color,
                  "--animation-delay": `${index * 0.2}s`,
                }}
              >
                <div className="section-header">
                  <div className="section-icon">
                    <IconComponent size={28} />
                  </div>
                </div>

                <div className="sectors-image-enhanced">
                  <StockImageFetch
                    searchTerm={section.searchTerm}
                    imgSource="large"
                    orientation="landscape"
                    page={1}
                    perPage={1}
                  />
                </div>

                <div className="sectors-content">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>

                  <div className="features-list">
                    {section.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="sectors-summary">
          <div className="summary-content">
            <h3>{sectorsTranslations.section.summary_title[language]}</h3>
            <p>{sectorsTranslations.section.summary_text[language]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorsFeasibility;
