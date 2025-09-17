import sitemap from "../../sitemap.json";
import { Outlet, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import "../_css/Layout.css";
import "./css/SectorsLayout.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import ContactIcon from "../../components/interactables/ContactIcon";
import sectorTranslations from "./sectors-translation.json";
import Footer from "../../components/layouts/Footer";

const SectorsLayout = () => {
  const location = useLocation();

  const isOverview =
    location.pathname === "/sector-of-activities";

  const sectorPage = sitemap.pages.find(
    (page) => page["page-id"] === "sector-of-activities"
  );

  const sectorSubPages = sectorPage
    ? sectorPage["sub-pages"]
    : [];

  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isDesktop } = useContext(
    ScreenSizeContext
  );
  const overview =
    sectorTranslations.overview.content[language];

  return (
    <div className="layout-page page-content">
      {!isMobile && (
        <div className="layout-panel-5">
          <ContactIcon />
        </div>
      )}
      {isOverview && (
        <>
          <div className="layout-bg-img">
            <img
              src="/photos/FromOldSite/slide_1-scaled.jpeg"
              alt="Our Sectors"
              style={{ zIndex: 3000 }}
              className=""
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

          <aside className="layout-sidebar">
            <ul>
              {sectorSubPages.map((subPage) => (
                <li key={subPage.id}>
                  <a
                    href={`/sector-of-activities/${subPage.id}`}
                  >
                    {subPage[language].toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </>
      )}
      <main className="layout-main-content">
        <Outlet />
      </main>
      {location.pathname !== "/sector-of-activities" && (
        <Footer />
      )}
    </div>
  );
};

export default SectorsLayout;
