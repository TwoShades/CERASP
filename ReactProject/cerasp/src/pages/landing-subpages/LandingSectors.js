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
    <div className="landing-container">
      <div className="landing-header">
        <h1 className="landing-title">{t.title}</h1>
        <p className="landing-subtitle">{t.subtitle}</p>
      </div>

      <div className="landing-grid">
        {t.sections.map((activity, index) => (
          <div key={index} className="landing-card">
            <div className="landing-icon-container">
              <span className="landing-icon">{icons[index]}</span>
            </div>
            <h3 className="landing-card-title">{activity.title}</h3>
            <p className="landing-card-description">{activity.description}</p>
            <div className="landing-highlights-container">
              {activity.highlights.map((highlight, idx) => (
                <span key={idx} className="landing-highlight">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="landing-footer">
        <div className="landing-footer-content">
          <h3 className="landing-footer-title">{t.footer.title}</h3>
          <div className="landing-benefits">
            {t.footer.items.map((benefit, idx) => (
              <div key={idx} className="landing-benefit">
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
