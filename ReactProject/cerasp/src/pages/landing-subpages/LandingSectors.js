import React from "react";
import "./css/LandingSectors.css";

const AreasOfActivitiesPanel = () => {
  const handleSectorsClick = () => {
    window.location.href = "/sector-of-activities";
  };

  const activities = [
    {
      title: "Research & Development",
      description:
        "Comprehensive R&D services including research & tech support, feasibility studies, technology transfer, and R&D scale-up solutions.",
      areas: [
        "Research & Tech Support",
        "R&D Scale Up",
        "Feasibility & Tech Transfer",
      ],
    },
    {
      title: "Formulation & Chemistry",
      description:
        "Advanced formulation development, preformulation studies, chemistry & extraction processes, and protein synthesis capabilities.",
      areas: [
        "Preformulation",
        "Formulation",
        "Chemistry & Extraction",
        "Protein Synthesis",
      ],
    },
    {
      title: "Development & Prototyping",
      description:
        "From concept to reality with prototyping services, pharmaceutical development, and comprehensive support throughout the development cycle.",
      areas: ["Prototyping", "Pharmaceutical", "Support"],
    },
    {
      title: "Regulatory & Training",
      description:
        "Regulatory affairs activities, compliance support, and specialized training programs to ensure industry standards and knowledge transfer.",
      areas: ["Regulatory Affairs Activities", "Training Program"],
    },
  ];

  return (
    <div className="landing-sectors-container">
      <div className="landing-sectors-content">
        <div className="landing-sectors-titleSection">
          <h2 className="landing-sectors-title">Areas of Activities</h2>
          <p className="landing-sectors-subtitle">
            Specialized services across the complete development lifecycle
          </p>
        </div>

        <div className="landing-sectors-cardsGrid">
          {activities.map((activity, index) => (
            <div key={index} className="landing-sectors-card">
              <h3 className="landing-sectors-cardTitle">{activity.title}</h3>
              <p className="landing-sectors-cardDescription">
                {activity.description}
              </p>
              <div className="landing-sectors-areasList">
                {activity.areas.map((area, areaIndex) => (
                  <span key={areaIndex} className="landing-sectors-areaTag">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="landing-sectors-ctaSection">
          <button
            className="landing-sectors-ctaButton"
            onClick={handleSectorsClick}
          >
            Explore All Sectors
          </button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="landing-sectors-backgroundPattern"></div>
    </div>
  );
};

export default AreasOfActivitiesPanel;
