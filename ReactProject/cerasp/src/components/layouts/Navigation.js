import { useState, useRef, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/Navigation.css";
import useScrollToTop from "../../hooks/useScrollToTop";
import sitemap from "../../sitemap.json";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

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

  const handleNavigateToSection = (section, path) => {
    navigate(path, { state: { scrollTo: section } });
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
            ({ title, "nav-title": navTitle, "sub-pages": subPages }) => {
              if (title.toLowerCase() === "landing") return null;

              const filteredSubPages = subPages.filter(
                (subPage) => subPage.toLowerCase() !== "contact-us-form"
              );

              return (
                <li
                  key={title}
                  className="nav-item"
                  // Hover only when not on mobile or tablet
                  onMouseEnter={() =>
                    !isMobile && !isTablet && setHoveredMenu(title)
                  }
                  onMouseLeave={() =>
                    !isMobile && !isTablet && setHoveredMenu(null)
                  }
                >
                  <div className="dropdown-clickable-zone">
                    <Link
                      to={`/${title}`}
                      onClick={() => {
                        handleLinkClick(`/${title}`);
                        setOpenSubMenu(null);
                      }}
                    >
                      {navTitle}
                    </Link>

                    {(isMobile || isTablet) && filteredSubPages.length > 0 && (
                      <span
                        className="dropdown-toggle"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubMenu(title);
                        }}
                      >
                        {openSubMenu === title ? "▲" : "▼"}
                      </span>
                    )}
                  </div>

                  {/* Show dropdown on hover (fullscreen only) or on click (mobile/tablet) */}
                  {(hoveredMenu === title ||
                    ((isMobile || isTablet) && openSubMenu === title)) &&
                    filteredSubPages.length > 0 && (
                      <div className="dropdown">
                        <ul>
                          {filteredSubPages.map((subPage) => (
                            <li
                              key={subPage}
                              onClick={() => {
                                handleNavigateToSection(subPage, `/${title}`);
                                setOpenSubMenu(null);
                              }}
                            >
                              {subPage.replaceAll("-", " ")}
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
