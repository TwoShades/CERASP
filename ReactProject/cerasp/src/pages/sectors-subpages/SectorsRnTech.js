import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";
import "./css/SectorsRnTech.css";

const SectorsRnTech = () => {
  const { language } = useContext(LanguageContext);
  const translation = sectorsTranslations.researchSupport;

  const content = {
    title: translation.title[language],
    subtitle: translation.content[language],
  };

  const services = [
    {
      icon: "🧪",
      title: translation.formulation.title[language],
      description: translation.formulation.content[language],
    },
    {
      icon: "⚙️",
      title: translation.processOptimization.title[language],
      description: translation.processOptimization.content[language],
    },
    {
      icon: "📋",
      title: translation.regulatory.title[language],
      description: translation.regulatory.content[language],
    },
    {
      icon: "🔧",
      title: translation.troubleshooting.title[language],
      description: translation.troubleshooting.content[language],
    },
    {
      icon: "🔬",
      title: translation.preclinical.title[language],
      description: translation.preclinical.content[language],
    },
    {
      icon: "📊",
      title: translation.strategic.title[language],
      description: translation.strategic.content[language],
    },
  ];

  return (
    <div className="sectors-rn-tech-parent">
      <div className="research-technical-support">
        <div className="support-header">
          <h1>{content.title}</h1>
          <p>{content.subtitle}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-title">{service.title}</div>
              <div className="service-description">{service.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectorsRnTech;
