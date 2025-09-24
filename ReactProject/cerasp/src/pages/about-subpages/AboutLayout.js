import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../_css/Layout.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import {
  LoadingProvider,
  LoadingContext,
} from "../../contexts/LoadingContext";
import sitemap from "../../sitemap.json";
import ContactIcon from "../../components/interactables/ContactIcon";
import Footer from "../../components/layouts/Footer";

const AboutLayout = () => {
  const location = useLocation();
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet } = useContext(
    ScreenSizeContext
  );

  const isOverview = location.pathname === "/about";

  const aboutPage = sitemap.pages.find(
    (page) => page["page-id"] === "about"
  );
  const aboutSubPages = aboutPage
    ? aboutPage["sub-pages"]
    : [];

  return (
    <div className="layout-page page-content">
      {isOverview && (
        <>
          <div className="layout-bg-img">
            <img
              src="/photos/FromOldSite/agri-food-food-production-scaled.jpg"
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
            {/* no text */}
          </div>
          <ContactIcon />
        </div>
      )}

      {isOverview && (
        <aside className="layout-sidebar">
          <ul>
            {aboutSubPages.map((subPage) => (
              <li key={subPage.id}>
                <a href={`/about/${subPage.id}`}>
                  {subPage[language].toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}

      {/* Wrap only main content and footer in LoadingProvider */}
      <LoadingProvider>
        <main className="layout-main-content">
          <Outlet />
          <LoadingContext.Consumer>
            {({ loading }) =>
              !loading &&
              location.pathname !== "/about" && <Footer />
            }
          </LoadingContext.Consumer>
        </main>
      </LoadingProvider>
    </div>
  );
};

export default AboutLayout;
