import "./css/AboutOverview.css";
import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import aboutTranslations from "./about-translations.json";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import SubPageHeader from "../../components/layouts/SubPageHeader";

export default function AboutOverview() {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(ScreenSizeContext);
  const content = aboutTranslations.aboutOverview;

  return (
    <div className="about-overview-layout">
      <SubPageHeader
        className="test-class"
        name={content.overview.title[language]}
        extraContent={
          <div className="about-overview-header-text">
            <p>{content.overview[language]}</p>
          </div>
        }
      />
      <div className="about-overview">
        <div className="about-overview-video">
          <div className="about-overview-video-icon">
            <img
              src="/svg/microscope-bacteria.svg"
              alt="Microscope Bacteria"
              className="about-icon-img"
            />
          </div>
          <iframe
            src={`https://www.youtube.com/embed/ShwbF2xodT8`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {isFullScreen && (
            <div className="about-overview-video-icon">
              <img
                src="/svg/flask-gear.svg"
                alt="Flask Gear"
                className="about-icon-img"
              />
            </div>
          )}
        </div>

        <div className="about-overview-primary-sections">
          <div className="about-overview-primary">
            <h2>{content.mission.title[language]}</h2>
            <p>{content.mission[language]}</p>
          </div>
          <div className="about-overview-primary">
            <h2>{content.vision.title[language]}</h2>
            <p>{content.vision[language]}</p>
          </div>
          <div className="about-overview-primary">
            <h2>{content.values.title[language]}</h2>
            <p>{content.values[language]}</p>
          </div>
        </div>

        <div className="about-overview-secondary-sections">
          <details className="about-overview-secondary">
            <summary>{content.values.excellence.title[language]}</summary>
            <p>{content.values.excellence[language]}</p>
          </details>

          <details className="about-overview-secondary">
            <summary>{content.values.innovation.title[language]}</summary>
            <p>{content.values.innovation[language]}</p>
          </details>

          <details className="about-overview-secondary">
            <summary>{content.values.collaboration.title[language]}</summary>
            <p>{content.values.collaboration[language]}</p>
          </details>

          <details className="about-overview-secondary">
            <summary>{content.values.openness.title[language]}</summary>
            <p>{content.values.openness[language]}</p>
          </details>
        </div>
      </div>
    </div>
  );
}
