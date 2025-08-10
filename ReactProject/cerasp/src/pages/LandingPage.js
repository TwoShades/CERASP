import { motion } from "framer-motion";
import "./_css/Layout.css";
import "./_css/LandingPage.css";
import { LanguageContext } from "../contexts/LanguageContext";
import landingTranslations from "./landing-subpages/landing-translations.json";
import { useContext } from "react";
import ContactIcon from "../components/interactables/ContactIcon";
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

  return (
    <div className="landing-page-overlay">
      <div className="landing-gridlines-thin" />
      <motion.div
        style={{ position: "relative", zIndex: 9999 }}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <Header />
      </motion.div>
      <motion.div
        className="overlay"
        variants={overlaySlideVariants}
        initial="visible"
        animate="slideOut"
      />

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
        <motion.div
          className="landing-logo landing-content-alignment"
          variants={childVariants}
        >
          <img
            src="/logos/cerasplogo-hires.png"
            alt="CERASP Logo"
          />
        </motion.div>

        <motion.div
          className="landing-subtext-1 landing-content-alignment"
          variants={childVariants}
        >
          <p>
            {language === "en"
              ? "Center for Expertise in Applied Research in Pharmaceutical Sciences"
              : "Centre d’expertise en recherche appliquée en sciences pharmaceutiques"}
          </p>
        </motion.div>

        <motion.div
          className="landing-subtext-2 landing-content-alignment"
          variants={childVariants}
        >
          <p>
            {language === "en"
              ? "Versatile. Expert. Aware."
              : "Versatile. Expert. Avisé."}
          </p>
        </motion.div>

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
              <ContactIcon theme="contact-icon-light" />
            </motion.div>

            <div className="landing-white-box-img">
              <img
                src="/photos/FromOldSite/biotech-scaled.jpg"
                alt="CERASP Logo"
              />
            </div>

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
