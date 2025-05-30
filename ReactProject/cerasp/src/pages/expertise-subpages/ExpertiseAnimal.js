import React, { useContext, useState } from "react";
import "./css/ExpertiseAnimal.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
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
    TrendingUp
} from "lucide-react";

const ExpertiseAnimal = ({ className = "" }) => {
    const { language } = useContext(LanguageContext);
    const animal = expertiseTranslations.animal_health;
    const nhp = expertiseTranslations.nhp_nutraceuticals;
    const [hoveredSection, setHoveredSection] = useState(null);

    const expertiseSections = [
        {
            id: 'animal',
            title: animal.title[language].toUpperCase(),
            content: animal.content[language],
            icon: Heart,
            searchTerm: "veterinary care",
            color: "#FF6B6B",
            features: ["Veterinary Research", "Pet Nutrition", "Animal Wellness", "Clinical Trials"],
            stats: { projects: "200+", success: "95%", years: "15+" }
        },
        {
            id: 'nhp',
            title: nhp.title[language].toUpperCase(),
            content: nhp.content[language],
            icon: Pill,
            searchTerm: "natural supplements",
            color: "#4ECDC4",
            features: ["Natural Products", "Supplement Development", "Quality Testing", "Regulatory Support"],
            stats: { projects: "150+", success: "98%", years: "12+" }
         }//,
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
        <div className={`expertise-container-enhanced ${className}`}>
            <div className="expertise-header">
                <h1> Animal Health, NHP & Nutraceuticals</h1>
                <p>Leading innovation in health, research, and natural solutions</p>
            </div>

            <div className="expertise-grid">
                {expertiseSections.map((section, index) => {
                    const IconComponent = section.icon;
                    return (
                        <div 
                            key={section.id}
                            className={`expertise-section-enhanced ${hoveredSection === section.id ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredSection(section.id)}
                            onMouseLeave={() => setHoveredSection(null)}
                            style={{ '--section-color': section.color, '--animation-delay': `${index * 0.2}s` }}
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

                            <div className="expertise-image-enhanced">
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

                            <div className="expertise-content">
                                <h2>{section.title}</h2>
                                <p>{section.content}</p>
                                
                                <div className="features-list">
                                    {section.features.map((feature, idx) => (
                                        <div key={idx} className="feature-item">
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="animal-stats-grid">
                                    <div className="animal-stat-item">
                                        <div className="animal-stat-number">{section.stats.projects}</div>
                                        <div className="animal-stat-label">Projects</div>
                                    </div>
                                    <div className="animal-stat-item">
                                        <div className="animal-stat-number">{section.stats.success}</div>
                                        <div className="animal-stat-label">Success Rate</div>
                                    </div>
                                    <div className="animal-stat-item">
                                        <div className="animal-stat-number">{section.stats.years}</div>
                                        <div className="animal-stat-label">Experience</div>
                                    </div>
                                </div>

                                {/* <button className="cta-button">
                                    <span>Learn More</span>
                                </button> */}
                            </div>

                            {/* <div className="expertise-footer">
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

            <div className="expertise-summary">
                <div className="summary-content">
                    <h3>Comprehensive Solutions</h3>
                    <p>Our integrated approach combines cutting-edge research, natural innovation, and proven methodologies to deliver exceptional results across all domains.</p>
                </div>
            </div>
        </div>
    );
};

export default ExpertiseAnimal;