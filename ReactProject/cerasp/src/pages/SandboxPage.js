import React from "react";
import { motion } from "framer-motion";
import "./_css/Layout.css";
import "./_css/SandboxPage.css";

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
    transition: { duration: 1, ease: "easeOut" },
  },
};

const SandboxPage = () => (
  <>
    {/* Gridlines overlay */}
    <div className="sandbox-gridlines" />

    {/* Gradient background */}
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: `linear-gradient(
          135deg,
          #0c3277ff 0%,
          #2d76ff 35%,
          #5590ffff 100%
        )`,
        zIndex: 0,
      }}
    />

    {/* Black overlay that fades out */}
    <motion.div
      className="sandbox-black-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />

    {/* Your animated content */}
    <motion.div
      className="sandbox-layout"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ position: "relative", zIndex: 10 }}
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
          Center for Expertise in Applied Research in
          Pharmaceutical Sciences
        </p>
      </motion.div>
      <motion.div
        className="sandbox-subtext-2 sandbox-content-alignment"
        variants={childVariants}
      >
        <p>Versatile. Expert. Aware.</p>
      </motion.div>
    </motion.div>
  </>
);

export default SandboxPage;
