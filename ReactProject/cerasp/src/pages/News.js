import React, {
  useState,
  useEffect,
  useContext,
} from "react";
import "./Pages-css/News.css";
import "./_css/Subpage.css";
import AnimateObject from "../components/uicomponents/AnimateObject";
import { LanguageContext } from "../contexts/LanguageContext.js";
import { PropagateLoader } from "react-spinners";
import scrollToTop from "../utils/scrollToTop.js";
import ContactIcon from "../components/interactables/ContactIcon.js";
import Footer from "../components/layouts/Footer.js";

const News = () => {
  const [newsPosts, setNewsPosts] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isOverviewReady, setIsOverviewReady] =
    useState(false);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    fetch(
      "https://loving-bird-9ef3b0470a.strapiapp.com/api/news-posts"
    )
      .then((res) => res.json())
      .then((data) => {
        const posts = data.data
          .map((item) => ({
            id: item.id,
            src:
              item.LinkedIn.match(/src="(.*?)"/)?.[1] || "",
            publishedAt: item.publishedAt,
          }))
          .sort(
            (a, b) =>
              new Date(b.publishedAt) -
              new Date(a.publishedAt)
          );

        setNewsPosts(posts);
      })
      .catch((err) =>
        console.error("Failed to fetch news posts:", err)
      );
  }, []);

  useEffect(() => {
    if (
      loadedCount === newsPosts.length &&
      newsPosts.length > 0
    ) {
      setIsOverviewReady(true);
    }
  }, [loadedCount, newsPosts]);

  useEffect(() => {
    if (isOverviewReady) scrollToTop();
  }, [isOverviewReady]);

  const handleIframeLoad = () =>
    setLoadedCount((prev) => prev + 1);

  return (
    <main className="subpage-overview">
      {isOverviewReady && (
        <div className="layout-panel-5">
          <div className="subpage-panel-5-text">
            {/* no text, used as spacer */}
          </div>
          <ContactIcon />
        </div>
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
        {newsPosts.map((post) => (
          <div
            key={post.id}
            className="news-iframe-wrapper"
          >
            <iframe
              src={post.src}
              width="100%"
              height="669"
              frameBorder="0"
              allowFullScreen
              title={`News post ${post.id}`}
              onLoad={handleIframeLoad}
            />
          </div>
        ))}
        <div className="expertise-generic-square"></div>
      </div>
      <div className="subpage-spacer-20vh"></div>
      {isOverviewReady && <Footer />}
    </main>
  );
};

export default News;
