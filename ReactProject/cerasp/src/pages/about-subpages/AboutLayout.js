import sitemap from "../../sitemap.json";
import { Outlet, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import "../_css/Layout.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import ContactIcon from "../../components/interactables/ContactIcon";
import Footer from "../../components/layouts/Footer";

const AboutLayout = () => {
  const location = useLocation();

  const isOverview = location.pathname === "/about";

  const aboutPage = sitemap.pages.find(
    (page) => page["page-id"] === "about"
  );

  const aboutSubPages = aboutPage
    ? aboutPage["sub-pages"]
    : [];

  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isDesktop } = useContext(
    ScreenSizeContext
  );

  return (
    <div className="layout-page page-content">
      {location.pathname === "/about" && (
        <>
          <div className="layout-bg-img">
            <img
              src="/photos/FromOldSite/agri-food-food-production-scaled.jpg"
              alt="Biotech facility"
              className="history-img"
            />
          </div>
          {/* <div className="layout-rotated-title">{language === "fr" ? <h1>À PROPOS</h1> : <h1>ABOUT</h1>}</div> */}
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

      {(location.pathname === "/about" ||
        location.pathname === "/about/facilities" ||
        location.pathname === "/about/overview") && (
        <>
          {!isMobile && (
            <div className="layout-panel-5">
              <ContactIcon />
            </div>
          )}
        </>
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
          {/* <div>====LAYOUT ADJUSTMENTS IN EACH PAGE====</div>
          <div>====TEAM/BOARD MORE ELEMENTS====</div> */}
        </aside>
      )}

      <main className="layout-main-content">
        <Outlet />
        {location.pathname !== "/about" && <Footer />}
      </main>
    </div>
  );
};

export default AboutLayout;
