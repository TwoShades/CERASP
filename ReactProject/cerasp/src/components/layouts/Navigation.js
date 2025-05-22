import { useState, useRef, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/Navigation.css";
import useScrollToTop from "../../hooks/useScrollToTop";
import sitemap from "../../sitemap.json"; // Make sure this is the updated version
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import { LanguageContext } from "../../contexts/LanguageContext";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const { language } = useContext(LanguageContext); // 'en' or 'fr'
  const { isMobile, isTablet } = useContext(ScreenSizeContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const { handleLinkClick } = useScrollToTop(pathname, () =>
    setMenuOpen(false)
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setOpenSubMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleNavigateToSection = (sectionId, path) => {
    navigate(path, { state: { scrollTo: sectionId } });
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <>
      <Link to="/">
        <div className="nav-logo-wrapper">
          <img
            src="/logos/ceraspicon.png"
            alt="CERASP Logo"
            className={`nav-logo ${isMobile || isTablet ? "mobile" : "hidden"}`}
          />
        </div>
      </Link>
      <nav className="nav" ref={navRef}>
        {(isMobile || isTablet) && (
          <button
            className="hamburger"
            onClick={() => {
              setMenuOpen((prev) => {
                const newState = !prev;
                if (!newState) setOpenSubMenu(null);
                return newState;
              });
            }}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        )}

        <ul
          className={`nav-list ${
            (isMobile || isTablet) && menuOpen ? "show" : ""
          }`}
        >
          {sitemap.pages.map(
            ({ "page-id": pageId, nav, "sub-pages": subPages }) => {
              if (pageId.toLowerCase() === "landing") return null;

              const displayTitle = nav[language] || nav["en"];
              const filteredSubPages = subPages.filter(
                (subPage) => subPage.id !== "contact-us-form"
              );
              console.log({ pageId, displayTitle, nav });
              return (
                <li
                  key={pageId}
                  className="nav-item"
                  onMouseEnter={() =>
                    !isMobile && !isTablet && setHoveredMenu(pageId)
                  }
                  onMouseLeave={() =>
                    !isMobile && !isTablet && setHoveredMenu(null)
                  }
                >
                  <div className="dropdown-clickable-zone">
                    <Link
                      to={`/${pageId}`}
                      onClick={() => {
                        handleLinkClick(`/${pageId}`);
                        setOpenSubMenu(null);
                      }}
                    >
                      {displayTitle}
                    </Link>

                    {(isMobile || isTablet) && filteredSubPages.length > 0 && (
                      <span
                        className="dropdown-toggle"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubMenu(pageId);
                        }}
                      >
                        {openSubMenu === pageId ? "▲" : "▼"}
                      </span>
                    )}
                  </div>

                  {(hoveredMenu === pageId ||
                    ((isMobile || isTablet) && openSubMenu === pageId)) &&
                    filteredSubPages.length > 0 && (
                      <div className="dropdown">
                        <ul>
                          {filteredSubPages.map((subPage) => (
                            <li
                              key={subPage.id}
                              onClick={() => {
                                handleNavigateToSection(
                                  subPage.id,
                                  `/${pageId}`
                                );
                                setOpenSubMenu(null);
                              }}
                            >
                              {subPage[language]}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </li>
              );
            }
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
