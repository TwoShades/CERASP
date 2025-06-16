import React, { useContext } from "react";
import "./css/LandingAboutUs.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import landingTranslations from "./landing-translations.json";

const LandingAboutUs = () => {
  const { language } = useContext(LanguageContext);
  const t = landingTranslations["landing-about-us"][language].aboutUs;

  const stats = [
    {
      number: "10+",
      label: t.stats[0].label,
      icon: "🚀",
    },
    {
      number: "500+",
      label: t.stats[1].label,
      icon: "💼",
    },
    {
      number: "50+",
      label: t.stats[2].label,
      icon: "👥",
    },
    {
      number: "99%",
      label: t.stats[3].label,
      icon: "⭐",
    },
  ];

  const values = t.values.map((val, index) => ({
    ...val,
    icon: ["💡", "🎯", "🤝"][index],
  }));

  const handleLearnMore = () => {
    window.location.href = "/about";
  };

  return (
    <section className="about-panel">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-intro">
              <span className="landing-section-label">{t.sectionLabel}</span>
              <h2>{t.title}</h2>
              <p className="main-description">{t.description}</p>
            </div>

            <div className="company-values">
              <h3>{t.drivesUs}</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <div className="value-content">
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="stats-container">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="landing-stat-card">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mission-showcase">
              <div className="mission-card">
                <div className="mission-icon">🎯</div>
                <h4>{t.missionTitle}</h4>
                <p>{t.missionDescription}</p>
              </div>

              <div className="vision-card">
                <div className="vision-icon">🌟</div>
                <h4>{t.visionTitle}</h4>
                <p>{t.visionDescription}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <button className="landing-cta-button" onClick={handleLearnMore}>
            {t.learnMore}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingAboutUs;
