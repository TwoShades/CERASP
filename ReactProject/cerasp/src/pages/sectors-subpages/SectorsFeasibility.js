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
      features: [
        "Studies on manufacturing, process or formulation methods (preformulation).",
        "Conducting pilot and prototype studies. ",
        "Running studies on designing new facilities and equipment purchases. ",
        "Conduct digital health integration studies and incorporate digital transformation. ",
      ],
      stats: { projects: "200+", success: "95%", years: "15+" },
    },
    {
      id: "Our technical transfer services",
      title: TechTrans.title[language].toUpperCase(),
      content: TechTrans.content[language],
      icon: Stethoscope,
      searchTerm: "technical transfer",
      color: "#4ECDC4",
      features: [
        "Improving existing products in the case of a flawed or outdated procedure. ",
        "Improve existing products, processes or processes for business, pharmacological or regulatory reasons. ",
        "Improving an existing product for aesthetic reasons such as changing colour or taste.",
        "Enable the integration of technological tools for digital health and for the corporate digital shift.",
      ],
      stats: { projects: "150+", success: "98%", years: "12+" },
    }, //,
    // {
    //     id: 'research',
    //     title: "ADVANCED RESEARCH",
    //     content: "Cutting-edge research methodologies and innovative solutions for complex biological challenges.",
    //     icon: Microscope,
    //     searchTerm: "laboratory research",
    //     color: "#45B7D1",
    //     features: ["Lab Analysis", "Method Development", "Data Analytics", "Innovation"],
    //     stats: { projects: "300+", success: "97%", years: "20+" }
    // },
    // {
    //     id: 'natural',
    //     title: "NATURAL SOLUTIONS",
    //     content: "Sustainable and eco-friendly approaches to health and wellness product development.",
    //     icon: Leaf,
    //     searchTerm: "natural ingredients",
    //     color: "#96CEB4",
    //     features: ["Organic Compounds", "Green Chemistry", "Sustainability", "Bio-Innovation"],
    //     stats: { projects: "180+", success: "94%", years: "10+" }
    // }
  ];

  return (
    <div className="sectors-feasibility-layout">
      <div className={`sectors-container-enhanced ${className}`}>
        <div className="sectors-header">
          <h1>Feasibility & Technical Transfer</h1>
          <p>
            Our Feasibility studies and pilot trials will ensure your project is
            possible, or save you time and money!{" "}
          </p>
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
                  {/* <div className="section-badge">
                                    <Star size={16} />
                                    <span>Premium</span>
                                </div> */}
                </div>

                <div className="sectors-image-enhanced">
                  <StockImageFetch
                    searchTerm={section.searchTerm}
                    imgSource="large"
                    orientation="landscape"
                    page={1}
                    perPage={1}
                  />
                  {/* <div className="image-overlay">
                                    <div className="overlay-content">
                                        <TrendingUp size={24} />
                                        <span>View Details</span>
                                    </div>
                                </div> */}
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

                  {/* <div className="feasibility-stats-grid">
                    <div className="feasibility-stat-item">
                      <div className="feasibility-stat-number">
                        {section.stats.projects}
                      </div>
                      <div className="feasibility-stat-label">Projects</div>
                    </div>
                    <div className="feasibility-stat-item">
                      <div className="feasibility-stat-number">
                        {section.stats.success}
                      </div>
                      <div className="feasibility-stat-label">Success Rate</div>
                    </div>
                    <div className="feasibility-stat-item">
                      <div className="feasibility-stat-number">
                        {section.stats.years}
                      </div>
                      <div className="feasibility-stat-label">Experience</div>
                    </div>
                  </div> */}

                  {/* <button className="cta-button">
                                    <span>Learn More</span>
                                </button> */}
                </div>

                {/* <div className="sectors-footer">
                                <div className="quality-badge">
                                    <Award size={16} />
                                    <span>Quality Assured</span>
                                </div>
                                <div className="rating">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={12} fill="currentColor" />
                                    ))}
                                </div>
                            </div> */}
              </div>
            );
          })}
        </div>

        <div className="sectors-summary">
          <div className="summary-content">
            <h3>Comprehensive Solutions</h3>
            <p>
              Our integrated approach combines cutting-edge research, natural
              innovation, and proven methodologies to deliver exceptional
              results across all domains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorsFeasibility;
