import "./css/AboutOverview.css";
import React, { useContext, useLayoutEffect, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import gsap from "gsap";
import aboutTranslations from "./about-translations.json";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import SubPageHeader from "../../components/layouts/SubPageHeader";
import RevealOnScroll from "../../components/uicomponents/RevealOnScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutOverview() {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(ScreenSizeContext);
  const content = aboutTranslations.aboutOverview;

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "excellence-trigger",
          trigger: ".values-excellence",
          start: "top 25%",
          end: "+=3000",
          pin: true,
          scrub: 1,
          markers: true,
        },
      });

      tl.to(".values-excellence", {
        opacity: 1,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    // <div className="about-overview">
    <>
      {/* <div className="about-overview-video">
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
        </div> */}

      {/* <div className="about-overview-history">
          <div className="history-a">
            <RevealOnScroll direction="right">
              <h1>{language === "fr" ? "HISTORIQUE" : "HISTORY"}</h1>
              <p>{content.overviewA[language]}</p>
            </RevealOnScroll>
          </div>

          <div className="history-b">
            <RevealOnScroll direction="left">
              <div className="history-img" />
              <p>{content.overviewB[language]}</p>
            </RevealOnScroll>
          </div>
        </div>

        <div className="about-overview-primary-sections">
          <RevealOnScroll
            className="about-overview-primary mission"
            direction="right"
          >
            <h2>{content.mission.title[language]}</h2>
            <p>{content.mission[language]}</p>
          </RevealOnScroll>

          <RevealOnScroll
            className="about-overview-primary vision"
            direction="right"
          >
            <h2>{content.vision.title[language]}</h2>
            <p>{content.vision[language]}</p>
          </RevealOnScroll>

          <RevealOnScroll
            className="about-overview-primary values"
            direction="right"
          >
            <h2>{content.values.title[language]}</h2>
            <p>{content.values[language]}</p>
          </RevealOnScroll>
        </div> */}

      <div className="about-overview-secondary-sections">
        <div className="spacer" />
        <div className="about-overview-secondary values-excellence">
          <h3>{content.values.excellence.title[language]}</h3>
          <p>{content.values.excellence[language]}</p>
        </div>
        <div className="spacer" />
        <div className="spacer" />
        <div className="about-overview-secondary values-innovation">
          <h3>{content.values.innovation.title[language]}</h3>
          <p>{content.values.innovation[language]}</p>
        </div>
        <div className="spacer" />
        <div className="spacer" />
        <div className="about-overview-secondary values-collaboration">
          <h3>{content.values.collaboration.title[language]}</h3>
          <p>{content.values.collaboration[language]}</p>
        </div>
        <div className="spacer" />
        <div className="spacer" />
        <div className="about-overview-secondary values-openness">
          <h3>{content.values.openness.title[language]}</h3>
          <p>{content.values.openness[language]}</p>
        </div>{" "}
        */}
      </div>
    </>
  );
}
