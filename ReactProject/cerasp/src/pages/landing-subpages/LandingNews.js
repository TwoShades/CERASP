import React, { useContext } from "react";
import "./css/LandingNews.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import landingTranslations from "./landing-translations.json";

const LandingNews = () => {
  const { language } = useContext(LanguageContext);
  const t =
    landingTranslations.news[language] || landingTranslations.news["en"];
  const newsItems = t.items;

  const handleViewAllNews = () => {
    window.location.href = "/news";
  };

  return (
    <section className="news-panel">
      <div className="news-container">
        <div className="news-header">
          <div className="header-content">
            <span className="section-label">{t.sectionLabel}</span>
            <h2>{t.title}</h2>
            <p>{t.subtitle}</p>
          </div>
          <button
            className="landing-news-cta-button"
            onClick={handleViewAllNews}
          >
            {t.cta}
          </button>
        </div>

        <div className="news-layout">
          <div className="featured-article">
            <article className="news-card featured">
              <div className="news-image">
                <StockImageFetch
                  searchTerm={newsItems[0].stockimgname}
                  imgSource="large"
                  orientation="landscape"
                  page={1}
                  perPage={1}
                />
                <span className="category-tag">{newsItems[0].category}</span>
              </div>
              <div className="news-content">
                <span className="news-date">{newsItems[0].date}</span>
                <h3 className="news-title">{newsItems[0].title}</h3>
                <p className="news-excerpt">{newsItems[0].excerpt}</p>
              </div>
            </article>
          </div>

          <div className="secondary-articles">
            {newsItems.slice(1).map((item, index) => (
              <article key={index} className="news-card secondary">
                <div className="news-image">
                  <StockImageFetch
                    searchTerm={item.stockimgname}
                    imgSource="medium"
                    orientation="landscape"
                    page={index + 2}
                    perPage={1}
                  />
                  <span className="category-tag">{item.category}</span>
                </div>
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-excerpt">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingNews;
