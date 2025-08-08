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
} from "./animations/LandingAnimations";

const content = landingTranslations;

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
              className="landing-contact-icon"
              variants={contactIconVariants}
              initial="hidden"
              animate="visible"
            >
              <ContactIcon />
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
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SandboxPage;
