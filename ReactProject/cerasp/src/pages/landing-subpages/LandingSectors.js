import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import overviewTranslations from "./landing-translations.json"; // or landing-translations.json

const LandingSectors = () => {
  const { language } = useContext(LanguageContext);
  const t =
    overviewTranslations["overview"][language] ||
    overviewTranslations["overview"]["en"];

  const icons = ["🧪", "🔬", "📋", "💊", "🧬", "⚙️"];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{t.title}</h1>
        <p style={styles.subtitle}>{t.subtitle}</p>
      </div>

      <div style={styles.grid}>
        {t.sections.map((activity, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.iconContainer}>
              <span style={styles.icon}>{icons[index]}</span>
            </div>
            <h3 style={styles.cardTitle}>{activity.title}</h3>
            <p style={styles.cardDescription}>{activity.description}</p>
            <div style={styles.highlightsContainer}>
              {activity.highlights.map((highlight, idx) => (
                <span key={idx} style={styles.highlight}>
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        <div style={styles.footerContent}>
          <h3 style={styles.footerTitle}>{t.footer.title}</h3>
          <div style={styles.benefits}>
            {t.footer.items.map((benefit, idx) => (
              <div key={idx} style={styles.benefit}>
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

// ... keep your styles and hover logic the same

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    lineHeight: "1.6",
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#7f8c8d",
    maxWidth: "600px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
    marginBottom: "60px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    border: "1px solid #e8e8e8",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  iconContainer: {
    marginBottom: "20px",
  },
  icon: {
    fontSize: "3rem",
    display: "block",
  },
  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "15px",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "20px",
  },
  highlightsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  highlight: {
    background: "#e3f2fd",
    color: "#1976d2",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.85rem",
    fontWeight: "500",
  },
  footer: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "15px",
    padding: "40px",
    color: "white",
    textAlign: "center",
  },
  footerContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  footerTitle: {
    fontSize: "1.8rem",
    marginBottom: "30px",
    fontWeight: "bold",
  },
  benefits: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  benefit: {
    textAlign: "left",
  },
};

// Add hover effects with CSS-in-JS
const cardHoverStyle = `
  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }
`;

// Inject the hover styles
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = cardHoverStyle;
  document.head.appendChild(styleElement);
}

export default LandingSectors;
