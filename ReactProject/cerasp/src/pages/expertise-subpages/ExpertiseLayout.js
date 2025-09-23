import React, { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../_css/Layout.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import sitemap from "../../sitemap.json";
import expertiseTranslations from "./expertise-translations.json";
import ContactIcon from "../../components/interactables/ContactIcon";
import Footer from "../../components/layouts/Footer";

const ExpertiseLayout = () => {
  const location = useLocation();
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isDesktop } = useContext(
    ScreenSizeContext
  );

  const isOverview = location.pathname === "/expertise";

  const expertisePage = sitemap.pages.find(
    (page) => page["page-id"] === "expertise"
  );

  const expertiseSubPages = expertisePage
    ? expertisePage["sub-pages"]
    : [];

  const overview =
    expertiseTranslations.overview.content[language];

  return (
    <div className="layout-page page-content">
      {isOverview && (
        <>
          <div className="layout-bg-img">
            <img
              src="/photos/FromOldSite/AdobeStock_240748778__-scaled.jpg"
              alt="Biotech facility"
              className="history-img"
            />
          </div>
          <div className="layout-panel-1"></div>
          <div className="layout-panel-2"></div>
          <div className="layout-panel-3"></div>
          {isMobile && (
            <>
              <div className="layout-panel-1-2-mobile"></div>
              <div className="layout-panel-3-4-mobile"></div>
            </>
          )}
        </>
      )}
      {!isMobile && (
        <div className="layout-panel-5">
          <div className="subpage-panel-5-text">
            {location.pathname === "/expertise" && overview}
          </div>
          <ContactIcon />
        </div>
      )}
      <aside className="layout-sidebar">
        <ul>
          {expertiseSubPages.map((subPage) => (
            <li key={subPage.id}>
              <a href={`/expertise/${subPage.id}`}>
                {subPage[language].toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </aside>{" "}
      )}
      <main className="layout-main-content">
        <Outlet />
      </main>
      {location.pathname !== "/expertise" && <Footer />}
    </div>
  );
};

export default ExpertiseLayout;
