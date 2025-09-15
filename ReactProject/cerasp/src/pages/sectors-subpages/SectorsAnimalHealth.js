import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";
import "./css/SectorsAnimalHealth.css";

const SectorsAnimalHealth = () => {
  const { language } = useContext(LanguageContext);
  const translation = sectorsTranslations.animalHealth;

  const content = {
    title: translation.title[language],
    subtitle: translation.content[language],
  };

  const services = [
    {
      icon: "🧪",
      title: translation.vetPharma.title[language],
      description: translation.vetPharma.content[language],
    },
    {
      icon: "⚙️",
      title: translation.supplements.title[language],
      description: translation.supplements.content[language],
    },
    {
      icon: "📋",
      title: translation.therapies.title[language],
      description: translation.therapies.content[language],
    },
    {
      icon: "🔧",
      title: translation.vaccines.title[language],
      description: translation.vaccines.content[language],
    },
    {
      icon: "🔬",
      title: translation.biologics.title[language],
      description: translation.biologics.content[language],
    },
    {
      icon: "📊",
      title: translation.topAndDerma.title[language],
      description: translation.topAndDerma.content[language],
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

export default SectorsAnimalHealth;
