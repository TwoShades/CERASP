import React, { useContext, useState, useEffect, useRef } from "react";
import "./css/SectorsOverview.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { FlaskConical, Cog, Atom } from "lucide-react";
import SubPageHeader from "../../components/layouts/SubPageHeader";
import StockImageFetch from "../../components/placeholders/StockImageFetch";

const SectorsOverview = ({ className = "" }) => {
  const { language } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (panelRef.current) observer.observe(panelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sectors-overview-parent">
      <div
        ref={panelRef}
        className={`sectors-overview-panel ${isVisible ? "animate-in" : ""} ${className}`}
      >
        <div className="sectors-overview-left">
          <div className="sectors-overview-title">
            <SubPageHeader name={language === "fr" ? "APERÇU" : "OVERVIEW"} />
          </div>

          <div className="sectors-title">
            <div className="title-decorator"></div>
            <h2>
              {language === "fr"
                ? "Aperçu des Solutions Scientifiques"
                : "Overview of Scientific Solutions"}
            </h2>
          </div>

          <div className="sectors-content">
            <p className="main-text">
              {language === "fr"
                ? "Nous proposons une gamme complète de services en chimie médicinale, formulation, bioproduction et transfert technologique. Nos solutions soutiennent le développement de médicaments, la production de protéines thérapeutiques, et les besoins réglementaires de nos partenaires."
                : "We offer a comprehensive suite of solutions spanning medicinal chemistry, formulation, bioproduction, and tech transfer. Our services support drug development, therapeutic protein production, and the regulatory needs of our partners."}
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <FlaskConical size={20} />
                </div>
                <div className="feature-text">
                  <span className="feature-title">
                    {language === "fr" ? "Chimie Médicinale" : "Medicinal Chemistry"}
                  </span>
                  <span className="feature-desc">
                    {language === "fr"
                      ? "Procédés intégrés de culture cellulaire à la production pharmaceutique."
                      : "Integrated cell culture to pharma production workflows."}
                  </span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Cog size={20} />
                </div>
                <div className="feature-text">
                  <span className="feature-title">
                    {language === "fr" ? "Production Protéique" : "Protein Production"}
                  </span>
                  <span className="feature-desc">
                    {language === "fr"
                      ? "Protéines thérapeutiques par expression recombinante."
                      : "Therapeutic proteins via recombinant expression."}
                  </span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Atom size={20} />
                </div>
                <div className="feature-text">
                  <span className="feature-title">
                    {language === "fr" ? "Montée en Échelle" : "Scale-Up & Transfer"}
                  </span>
                  <span className="feature-desc">
                    {language === "fr"
                      ? "Solutions GMP-ready pour le transfert technologique."
                      : "GMP-ready solutions for seamless tech transfer."}
                  </span>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <button className="primary-cta">
                {language === "fr" ? "Découvrir Nos Solutions" : "Explore Our Solutions"}
              </button>
            </div>
          </div>
        </div>

        <div className="sectors-overview-image">
          <div className="image-container">
            <StockImageFetch
              searchTerm="biologist"
              imgSource="large"
              orientation="landscape"
              page={1}
              perPage={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsOverview;
