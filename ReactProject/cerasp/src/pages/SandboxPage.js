import { motion } from "framer-motion";
import "./_css/Layout.css";
import "./_css/SandboxPage.css";
import { LanguageContext } from "../contexts/LanguageContext";
import landingTranslations from "./landing-subpages/landing-translations.json";
import { useState, useEffect, useContext } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1,
      delayChildren: 0,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

const whiteBoxVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 3.4,
    },
  },
};

const SandboxPage = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className="sandbox-gridlines-thin" />
      <div className="sandbox-gradient-bg" />

      <motion.div
        className="sandbox-black-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.div
        className="sandbox-layout"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="sandbox-logo sandbox-content-alignment"
          variants={childVariants}
        >
          <img
            src="/logos/cerasplogo-hires.png"
            alt="CERASP Logo"
          />
        </motion.div>
        <motion.div
          className="sandbox-subtext-1 sandbox-content-alignment"
          variants={childVariants}
        >
          <p>
            {language === "en"
              ? "Center for Expertise in Applied Research in Pharmaceutical Sciences"
              : "Centre d’expertise en recherche appliquée en sciences pharmaceutiques"}
          </p>
        </motion.div>
        <motion.div
          className="sandbox-subtext-2 sandbox-content-alignment"
          variants={childVariants}
        >
          <p>
            {language === "en"
              ? "Versatile. Expert. Aware."
              : "Versatile. Expert. Avisé."}
          </p>
        </motion.div>
        <motion.div
          className="sandbox-white-box"
          variants={whiteBoxVariants}
        >
          <div className="sandbox-gridlines-normal"></div>
          <div className="layout-image-col">
            <img
              src="/photos/FromOldSite/biotech-scaled.jpg"
              alt="CERASP Logo"
            />
          </div>
          <div className="layout-panel-5" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default SandboxPage;
