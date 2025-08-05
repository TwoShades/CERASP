import "./css/AboutOverview.css";
import React, { useContext, useLayoutEffect, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import aboutTranslations from "./about-translations.json";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import SubPageHeader from "../../components/layouts/SubPageHeader";
import RevealOnScroll from "../../components/uicomponents/RevealOnScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollFadeInSection } from "../../components/uicomponents/ScrollAnimations";

export default function AboutOverview() {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(ScreenSizeContext);
  const content = aboutTranslations.aboutOverview;

  return (
    <div className="about-overview">
      <div className="about-overview-color-panel" />
      <div className="about-overview-video">
        {language === "fr" ? (
          <iframe
            src="https://www.youtube.com/embed/6Wmb18o6Yos?si=5gXT4SvgAUZu-CEG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            src="https://www.youtube.com/embed/ShwbF2xodT8?si=gexIqKRxD2kxLQVe"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="about-overview-history">
        <div className="history-a">
          <RevealOnScroll direction="right">
            <h1>{language === "fr" ? "HISTORIQUE" : "HISTORY"}</h1>
            <p>{content.overviewA[language]}</p>
          </RevealOnScroll>
        </div>

        <div className="history-img-a">
          <img src="/photos/FromOldSite/biotech-scaled.jpg" alt="Biotech facility" className="history-img" />
        </div>

        <div className="history-b">
          <RevealOnScroll direction="left">
            <p>{content.overviewB[language]}</p>
          </RevealOnScroll>
        </div>

        <div className="history-c">
          <RevealOnScroll direction="right">
            <div className="history-c-content">
              <div className="history-c-img">
                <img src="/photos/FromOldSite/AdobeStock_315999267_-scaled-450x450.jpg" alt="Biotech facility" className="history-img" />
              </div>
              <div className="history-c-text">
                <p>{content.overviewC[language]}</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <div className="about-overview-primary-sections">
        <RevealOnScroll className="about-overview-primary mission" direction="right">
          <h2>{content.mission.title[language]}</h2>
          <p>{content.mission[language]}</p>
        </RevealOnScroll>

        <RevealOnScroll className="about-overview-primary vision" direction="right">
          <h2>{content.vision.title[language]}</h2>
          <p>{content.vision[language]}</p>
        </RevealOnScroll>

        <RevealOnScroll className="about-overview-primary values" direction="right">
          <h2>{content.values.title[language]}</h2>
          <p>{content.values[language]}</p>
        </RevealOnScroll>
      </div>
      <div className="about-overview-secondary-sections">
        <div className="about-overview-secondary-sections-align">
          <ScrollFadeInSection
            id="excellence"
            scrollDuration={1000}
            start="top 25%"
            pin={true}
            // markers={true}
          >
            <div className="about-overview-secondary values-excellence">
              <h3>{content.values.excellence.title[language]}</h3>
              <p>{content.values.excellence[language]}</p>
            </div>
          </ScrollFadeInSection>

          <ScrollFadeInSection
            id="innovation"
            scrollDuration={1000}
            start="top 25%"
            pin={true}
            // markers={true}
          >
            <div className="about-overview-secondary values-innovation">
              <h3>{content.values.innovation.title[language]}</h3>
              <p>{content.values.innovation[language]}</p>
            </div>
          </ScrollFadeInSection>

          <ScrollFadeInSection
            id="collaboration"
            scrollDuration={1000}
            start="top 25%"
            pin={true}
            // markers={true}
          >
            <div className="about-overview-secondary values-collaboration">
              <h3>{content.values.collaboration.title[language]}</h3>
              <p>{content.values.collaboration[language]}</p>
            </div>
          </ScrollFadeInSection>

          <ScrollFadeInSection
            id="openness"
            scrollDuration={1000}
            start="top 25%"
            pin={true}
            // markers={true}
          >
            <div className="about-overview-secondary values-openness">
              <h3>{content.values.openness.title[language]}</h3>
              <p>{content.values.openness[language]}</p>
            </div>
          </ScrollFadeInSection>
        </div>
      </div>
    </div>
  );
}
