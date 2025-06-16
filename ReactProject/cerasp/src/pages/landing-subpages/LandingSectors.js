import React from "react";

const OverviewPanel = () => {
  const activities = [
    {
      icon: "🧪",
      title: "Preformulation & Formulation",
      description:
        "Selection and configuration of equipment/processes for cGMP environments, ingredient selection, and development of dosage forms tailored to patient needs.",
      highlights: [
        "API & Excipient Selection",
        "Process Optimization",
        "Dosage Form Development",
      ],
    },
    {
      icon: "🔬",
      title: "Research & Technical Support",
      description:
        "Comprehensive support ensuring safe, efficient, and compliant development from inception to commercialization.",
      highlights: [
        "Formulation Development",
        "Process Optimization",
        "Regulatory Guidance",
      ],
    },
    {
      icon: "📋",
      title: "Regulatory Affairs",
      description:
        "Health Canada Partner with privileged access for regulatory dossiers, guidance on Canadian, US and EU policies.",
      highlights: [
        "Market Authorization",
        "Compliance Assistance",
        "IP Registration Support",
      ],
    },
    {
      icon: "💊",
      title: "Pharmaceutical Development",
      description:
        "Comprehensive support throughout drug development process, from formulation to commercialization with GMP compliance.",
      highlights: [
        "Drug Formulation",
        "Technology Transfer",
        "Scale-up Support",
      ],
    },
    {
      icon: "🧬",
      title: "Biomanufacturing",
      description:
        "Protein synthesis, cell culture, fermentation, and production of traditional biologics and advanced therapies.",
      highlights: ["Protein Production", "mRNA Vaccines", "Gene Therapies"],
    },
    {
      icon: "⚙️",
      title: "Feasibility & Technical Transfer",
      description:
        "Comprehensive feasibility studies, pilot trials, and technology transfer services for improved outcomes and compliance.",
      highlights: ["Pilot Studies", "Process Transfer", "Digital Integration"],
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Areas of Activities</h1>
        <p style={styles.subtitle}>
          Comprehensive pharmaceutical and biotechnology solutions from concept
          to commercialization
        </p>
      </div>

      <div style={styles.grid}>
        {activities.map((activity, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.iconContainer}>
              <span style={styles.icon}>{activity.icon}</span>
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
          <h3 style={styles.footerTitle}>Why Choose CERASP?</h3>
          <div style={styles.benefits}>
            <div style={styles.benefit}>
              <strong>Health Canada Partnership</strong>
              <p>Privileged access for regulatory submissions and guidance</p>
            </div>
            <div style={styles.benefit}>
              <strong>Comprehensive Expertise</strong>
              <p>From R&D to commercial production with GMP compliance</p>
            </div>
            <div style={styles.benefit}>
              <strong>Global Reach</strong>
              <p>Experience with Canadian, US, and EU regulatory frameworks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
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
    cursor: "pointer",
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

export default OverviewPanel;
