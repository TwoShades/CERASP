import React from "react";
import { Activity } from "lucide-react";

const OverviewPanel = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Areas of Activities</h1>
      </div>

      <div
        style={styles.card}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
        }}
      >
        <div style={styles.iconContainer}>
          <Activity size={40} style={styles.icon} />
        </div>
        <div style={styles.content}>
          <p style={styles.description}>
            Explore our comprehensive range of strategic initiatives and
            operational focus areas designed to drive innovation, foster
            collaboration, and deliver exceptional results across all
            organizational domains.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "0",
    letterSpacing: "-0.02em",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "24px",
    padding: "50px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    border: "1px solid rgba(226, 232, 240, 0.8)",
    maxWidth: "600px",
    width: "100%",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  },
  iconContainer: {
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 30px auto",
    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
  },
  icon: {
    color: "white",
  },
  content: {
    position: "relative",
    zIndex: 2,
  },
  description: {
    fontSize: "1.25rem",
    color: "#475569",
    lineHeight: "1.7",
    margin: "0",
    fontWeight: "400",
    letterSpacing: "0.01em",
  },
};

// Add CSS animation keyframes and font import
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
`;
document.head.appendChild(styleSheet);

export default OverviewPanel;
