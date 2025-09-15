import React, { useEffect, useContext, useState } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import SubPageHeader from "../../components/layouts/SubPageHeader";
import "./css/NewsOverview.css";

export default function NewsOverview({ onReady }) {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(ScreenSizeContext);

  const [iframeSources, setIframeSources] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          "https://loving-bird-9ef3b0470a.strapiapp.com/api/news-posts"
        );
        const data = await response.json();
        const posts = data.data || [];

        const sortedEmbeds = posts
          .map((item) => {
            const html = item.LinkedIn || item.attributes?.LinkedIn;
            const publishedAt =
              item.publishedAt || item.attributes?.publishedAt;
            return { html, publishedAt };
          })
          .filter((item) => item.html && item.publishedAt)
          .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

        const urls = sortedEmbeds
          .map((item) => {
            const match = item.html.match(/src="([^"]+)"/);
            return match ? match[1] : null;
          })
          .filter(Boolean);

        setIframeSources(urls);
      } catch (error) {
        console.error("Error fetching LinkedIn posts:", error);
      }
    }

    fetchNews();
  }, []);

  useEffect(() => {
    if (loadedCount === iframeSources.length && iframeSources.length > 0) {
      onReady?.();
    }
  }, [loadedCount, iframeSources.length, onReady]);

  const handleIframeLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <div className="news-overview-layout">
      <SubPageHeader
        name={language === "en" ? "NEWS" : "NOUVELLES"}
        extraContent={<div className="news-overview-header-text"></div>}
      />

      <div className="news-linkedin-feed">
        {iframeSources.map((src, index) => (
          <iframe
            key={index}
            src={src}
            height="500"
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
