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
      <SubPageHeader name={content.overview.title[language]} />
      <div className="about-overview">
        <div className="about-overview-video">
          {language === "fr" ? (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6Wmb18o6Yos?si=5gXT4SvgAUZu-CEG"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ShwbF2xodT8?si=gexIqKRxD2kxLQVe"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
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
