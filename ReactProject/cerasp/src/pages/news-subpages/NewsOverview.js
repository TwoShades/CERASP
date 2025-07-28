import React, { useEffect, useContext, useState } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import SubPageHeader from "../../components/layouts/SubPageHeader";
import "./css/NewsOverview.css";

export default function NewsOverview({ onReady }) {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(ScreenSizeContext);

  const iframeSources = [
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7336061660295573506?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7320803035293573120?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7308839915805376512",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7331320643541422081?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7320474480449912832?collapsed=1",
  ];

  const test = (
    <iframe
      src="https://www.linkedin.com/embed/feed/update/urn:li:share:7340054711737151489?collapsed=1"
      height="500"
      width="504"
      frameborder="0"
      allowfullscreen=""
      title="Embedded post"
    ></iframe>
  );
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (loadedCount === iframeSources.length) {
      onReady?.(); // call onReady once all iframes are loaded
    }
  }, [loadedCount, iframeSources.length, onReady]);

  const handleIframeLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <div className="news-overview-layout">
      <SubPageHeader
        name={language === "en" ? "NEWS" : "NOUVELLES"}
        extraContent={
          <div className="news-overview-header-text">
            {/* Optional subtitle here */}
          </div>
        }
      />

      <div className="news-linkedin-feed">{test}</div>

      <div className="news-linkedin-feed">
        {iframeSources.map((src, index) => (
          <iframe
            key={index}
            src={src}
            height="671"
            width="504"
            frameBorder="0"
            allowFullScreen
            title={`Embedded post ${index}`}
            onLoad={handleIframeLoad}
          ></iframe>
        ))}
      </div>
    </div>
  );
}
