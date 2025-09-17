import React, {
  useState,
  useEffect,
  useContext,
} from "react";
import "./Pages-css/News.css";
import AnimateObject from "../components/uicomponents/AnimateObject";
import { LanguageContext } from "../contexts/LanguageContext.js";
import { PropagateLoader } from "react-spinners";
import scrollToTop from "../utils/scrollToTop.js";
import ContactIcon from "../components/interactables/ContactIcon.js";
import Footer from "../components/layouts/Footer.js";

const News = () => {
  const [isOverviewReady, setIsOverviewReady] =
    useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const { language } = useContext(LanguageContext);

  const iframeSources = [
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7336061660295573506?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7320803035293573120?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7308839915805376512",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7331320643541422081?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7320474480449912832?collapsed=1",
  ];

  useEffect(() => {
    if (loadedCount === iframeSources.length) {
      setIsOverviewReady(true);
    }
  }, [loadedCount, iframeSources.length]);

  useEffect(() => {
    if (isOverviewReady) scrollToTop();
  }, [isOverviewReady]);

  const handleIframeLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <main className="subpage-overview">
      {isOverviewReady && (
        <>
          <div className="layout-panel-5">
            {" "}
            <ContactIcon />
          </div>
        </>
      )}

      {/* Animated Page Header */}
      <AnimateObject
        variantsToRun={["slideLeft", "fadeIn"]}
        className="subpage-intro-grid"
      >
        <h1>{language === "fr" ? "NOUVELLES" : "NEWS"}</h1>
      </AnimateObject>

      {!isOverviewReady && (
        <div className="news-loader-overlay">
          <h2>
            {language === "fr"
              ? "Chargement des nouvelles..."
              : "Loading News..."}
          </h2>
          <PropagateLoader
            color="#0056b3"
            size={40}
            speedMultiplier={2.4}
            aria-label="Loading news overview..."
          />
        </div>
      )}

      <div className="subpage-flex-column">
        {iframeSources.map((src, index) => (
          <div key={index} id="news-iframe-wrapper">
            <iframe
              src={src}
              width="100%"
              height="100%"
              title={`Embedded post ${index}`}
              onLoad={handleIframeLoad}
            />
          </div>
        ))}
        <div className="expertise-generic-square"></div>
      </div>

      {isOverviewReady && <Footer />}
    </main>
  );
};

export default News;
