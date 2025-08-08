import { motion } from "framer-motion";
import "./_css/Layout.css";
import "./_css/LandingPage.css";
import { LanguageContext } from "../contexts/LanguageContext";
import landingTranslations from "./landing-subpages/landing-translations.json";
import { useContext } from "react";
import ContactIcon from "../components/interactables/ContactIcon";
import Header from "../components/layouts/Header";

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
      delayChildren: 4.4,
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
      delay: 5.6,
    },
  },
};

const gradientVariants = {
  visible: { opacity: 1 },
  fadeOut: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 4.4,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      delay: 4.8,
    },
  },
};

<motion.div
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 10000, // above header & other elements
    backgroundColor: "transparent", // invisible but still catches pointer events if needed
  }}
  variants={{
    visible: { x: 0 },
    slideOut: {
      x: "-100vw",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 4.4,
      },
    },
  }}
  initial="visible"
  animate="slideOut"
/>;

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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 10000,
          backgroundColor: "transparent",
        }}
        variants={{
          visible: { x: 0 },
          slideOut: {
            x: "-100vw",
            transition: {
              duration: 0.8,
              ease: "easeInOut",
              delay: 4.4,
            },
          },
        }}
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
