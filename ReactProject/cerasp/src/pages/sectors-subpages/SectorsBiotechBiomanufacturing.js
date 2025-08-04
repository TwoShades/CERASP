import React, { useContext } from "react";
import "./css/SectorsBiotechBiomanufacturing.css";
import { FileText, Shield, Globe, CheckCircle } from "lucide-react";
import { LanguageContext } from "../../contexts/LanguageContext";
import regulatoryData from "./sectors-translation.json"; // <- path to your JSON

export default function SectorsBiotechBiomanufacturing() {
  const { language } = useContext(LanguageContext);
  const data = regulatoryData.bioTechBioMan;
  const t = (path) => path?.[language] || "";

  return (
    <div className="regulatory-container">
      {/* Header Section */}
      <div className="section">
        <div className="icon-heading">
          <Shield className="icon blue" />
          <h1 className="heading-main">{t(data.title)}</h1>
        </div>
        <div className="info-box">
          <p>{t(data.content)}</p>
        </div>
      </div>

      {/* bioTechBioMan Overview Section */}
      <div className="section">
        <div className="icon-heading">
          <FileText className="icon green" />
          <h2 className="heading-sub">{t(data.overview.title)}</h2>
        </div>

        {/* The Medicine Section */}
        <div className="card-block">
          <h3 className="card-title">
            <Globe className="icon small purple" />
            {t(data.overview.theMedicine.title)}
          </h3>
          <div className="grid-three">
            {Object.values(data.overview.theMedicine.cards).map((card, idx) => (
              <div key={idx} className="card">
                <h4>{t(card.title)}</h4>
                <p>{t(card.desc)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div className="grid-two">
          {/* Drugs and Biologics */}
          {/* <div className="product-box">
            <h3 className="product-title">
              <CheckCircle className="icon small blue" />
              {t(data.overview.products.drugs.title)}
            </h3>
            <ul>
              {Object.values(data.overview.products.drugs.items).map(
                (item, idx) => (
                  <li key={idx}>
                    <span className="dot blue"></span>
                    {t(item)}
                  </li>
                )
              )}
            </ul>
          </div> */}

          {/* Veterinary Medicine */}
          {/* <div className="product-box">
            <h3 className="product-title">
              <CheckCircle className="icon small green" />
              {t(data.overview.products.veterinary.title)}
            </h3>
            <ul>
              {Object.values(data.overview.products.veterinary.items).map(
                (item, idx) => (
                  <li key={idx}>
                    <span className="dot green"></span>
                    {t(item)}
                  </li>
                )
              )}
            </ul>
          </div> */}
        </div>

        {/* Development Process */}
        {/* <div className="gradient-box">
          <h3 className="heading-tertiary">
            {t(data.overview.development.title)}
          </h3>
          <div className="grid-two">
            <div>
              <h4>{t(data.overview.development.leftColumn.title)}</h4>
              <ul className="checklist">
                {Object.values(data.overview.development.leftColumn.list).map(
                  (point, idx) => (
                    <li key={idx}>• {t(point)}</li>
                  )
                )}
              </ul>
            </div>
            <div className="icon-block">
              <div className="icon-circle">
                <FileText className="icon medium indigo" />
              </div>
              <p>{t(data.overview.development.rightColumn.description)}</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
