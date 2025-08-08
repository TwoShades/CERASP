import { motion } from "framer-motion";
import "./_css/Layout.css";
import "./_css/SandboxPage.css";
import { LanguageContext } from "../contexts/LanguageContext";
import landingTranslations from "./landing-subpages/landing-translations.json";
import { useContext } from "react";
import ContactIcon from "../components/interactables/ContactIcon";

const content = landingTranslations;

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
      duration: 0.6,
      ease: "easeInOut",
      delay: 4,
    },
  },
};

const colContainerVariants = {
  hidden: {},
  slideOut: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 4.6,
      ease: "easeInOut",
    },
  },
};

const colVariants = {
  hidden: { x: 0, opacity: 1, transformOrigin: "bottom" },
  slideOut: {
    x: "-100vw",
    opacity: 0,
    scaleY: 0.2,
    scaleX: 0.2,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const contactIconVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: 5.2,
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
          <div className="sandbox-white-box-content">
            <motion.div
              className="sandbox-contact-icon"
              variants={contactIconVariants}
              initial="hidden"
              animate="visible"
            >
              <ContactIcon />
            </motion.div>

            <div className="sandbox-white-box-img">
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
    </>
  );
};

export default SandboxPage;
