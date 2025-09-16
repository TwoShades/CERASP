import { motion, AnimatePresence } from "framer-motion";
import "./_css/Layout.css";
import "./_css/LandingPage.css";
import { LanguageContext } from "../contexts/LanguageContext";
import { ScreenSizeContext } from "../contexts/ScreenSizeContext";
import landingTranslations from "./landing-translations.json";
import { useContext, useState, useEffect } from "react";
import ContactIcon from "../components/interactables/ContactIcon";
import AboutUsIcon from "../components/interactables/AboutUsIcon";
import Header from "../components/layouts/Header";

import {
  containerVariants,
  childVariants,
  whiteBoxVariants,
  colContainerVariants,
  colVariants,
  contactIconVariants,
  gradientVariants,
  headerVariants,
  overlaySlideVariants,
} from "./_animations/LandingAnimations";

const content = landingTranslations;

const data = [
  {
    number: "80+",
    info: {
      en: "Years of Industry Experience",
      fr: "Années d'expérience dans l'industrie",
    },
  },
  { number: "3", info: { en: "Sites", fr: "Sites" } },
  {
    number: "10M$",
    info: {
      en: "Equipment Value",
      fr: "Valeur d'équipement",
    },
  },
  { number: "50+", info: { en: "Clients", fr: "Clients" } },
];

const SandboxPage = () => {
  const { language } = useContext(LanguageContext);
  const { isMobile } = useContext(ScreenSizeContext);

  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] =
    useState(false);

  useEffect(() => {
    const firstTimeout = setTimeout(
      () => setShowFirstLine(true),
      500
    );
    const secondTimeout = setTimeout(
      () => setShowSecondLine(true),
      2500
    );

    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
    };
  }, []);

  return (
    <div className="landing-page-overlay">
      <div className="landing-gridlines-thin" />

      {/* Header */}
      <motion.div
        style={{ position: "relative", zIndex: 9999 }}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <Header />
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="overlay"
        variants={overlaySlideVariants}
        initial="visible"
        animate="slideOut"
      />

      {/* Gradients */}
      <motion.div
        className="landing-gradient-bg"
        variants={gradientVariants}
        initial="visible"
        animate="fadeOut"
      />
      <motion.div
        className="landing-gradient-bg"
        variants={gradientVariants}
        initial="visible"
        animate="fadeOut"
      />

      {/* Black overlay */}
      <motion.div
        className="landing-black-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.div
        className="landing-layout"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div
          className="landing-logo landing-content-alignment"
          variants={childVariants}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          <img
            src="/logos/cerasplogo-hires.png"
            alt="CERASP Logo"
          />
        </motion.div>

        {/* Subtexts */}
        <motion.div className="landing-subtext landing-content-alignment">
          <AnimatePresence mode="wait">
            {!showSecondLine && showFirstLine && (
              <motion.p
                key="line1"
                variants={childVariants}
                custom={0.2}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  y: -20,
                  transition: { duration: 0.8 },
                }}
              >
                {language === "en"
                  ? "Center for Expertise in Applied Research in Pharmaceutical Sciences"
                  : "Centre d’expertise en recherche appliquée en sciences pharmaceutiques"}
              </motion.p>
            )}
            {showSecondLine && (
              <motion.p
                key="line2"
                className="landing-subtext-larger"
                variants={childVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1 },
                }}
                exit={{ opacity: 0 }}
              >
                {language === "en"
                  ? "Versatile. Expert. Aware."
                  : "Versatile. Expert. Avisé."}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* White Box */}
        <motion.div
          className="landing-white-box"
          variants={whiteBoxVariants}
        >
          <div className="landing-white-box-content">
            <motion.div
              variants={contactIconVariants}
              initial="hidden"
              animate="visible"
            >
              {!isMobile && <AboutUsIcon />}
              {isMobile && (
                <div className="landing-mobile-bottom-strip" />
              )}
              <ContactIcon theme="contact-icon-light" />
            </motion.div>

            <div className="landing-white-box-img"></div>

            <h1>
              {language === "en"
                ? content.en.title
                : content.fr.title}
            </h1>
            <p>
              {language === "en"
                ? content.en.description
                : content.fr.description}
            </p>

            <div className="layout-panel-5" />

            {/* Columns inside white box */}
            <motion.div
              variants={colContainerVariants}
              initial="hidden"
              animate="slideOut"
              className="sb-cols"
            >
              <motion.div
                className="sb-col-1"
                variants={colVariants}
              />
              <motion.div
                className="sb-col-2"
                variants={colVariants}
              />
              <motion.div
                className="sb-col-3"
                variants={colVariants}
              />
              <motion.div
                className="sb-col-4"
                variants={colVariants}
              />
              <motion.div
                className="sb-col-5"
                variants={colVariants}
              />
            </motion.div>
          </div>

          {/* Numbers */}
          <div className="landing-white-box-numbers">
            {data.map(({ number, info }, i) => (
              <div
                key={i}
                className="landing-white-box-item"
              >
                <div className="number">{number}</div>
                <div className="info">
                  {info[language] || info.en}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SandboxPage;
