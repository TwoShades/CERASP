import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import overviewTranslations from "./landing-translations.json"; // or landing-translations.json
import "./css/LandingSectors.css";

const LandingSectors = () => {
  const { language } = useContext(LanguageContext);
  const t =
    overviewTranslations["overview"][language] ||
    overviewTranslations["overview"]["en"];

  const icons = ["🧪", "🔬", "📋", "💊", "🧬", "⚙️"];

  return (
    <div className="landing-sector-container">
      <div className="landing-sector-header">
        <h1 className="landing-sector-title">{t.title}</h1>
        <p className="landing-sector-subtitle">{t.subtitle}</p>
      </div>

      <div className="landing-sector-grid">
        {t.sections.map((activity, index) => (
          <div key={index} className="landing-sector-card">
            <div className="landing-sector-icon-container">
              <span className="landing-sector-icon">{icons[index]}</span>
            </div>
            <h3 className="landing-sector-card-title">{activity.title}</h3>
            <p className="landing-sector-card-description">
              {activity.description}
            </p>
            <div className="landing-sector-highlights-container">
              {activity.highlights.map((highlight, idx) => (
                <span key={idx} className="landing-sector-highlight">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="landing-sector-footer">
        <div className="landing-sector-footer-content">
          <h3 className="landing-sector-footer-title">{t.footer.title}</h3>
          <div className="landing-sector-benefits">
            {t.footer.items.map((benefit, idx) => (
              <div key={idx} className="landing-sector-benefit">
                <strong>{benefit.title}</strong>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSectors;
