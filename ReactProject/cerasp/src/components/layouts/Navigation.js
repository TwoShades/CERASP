import { useState, useRef, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/Navigation.css";
import sitemap from "../../sitemap.json";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import scrollToTop from "../../utils/scrollToTop";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet } = useContext(ScreenSizeContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (linkPath) => {
    if (pathname === linkPath) {
      scrollToTop();
    } else {
      navigate(linkPath, {
        state: { scrollToTop: true, fromDifferentPage: true },
      });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <Link to="/">
        <div className="nav-logo-wrapper">
          <img
            src="/logos/cerasplogo.png"
            alt="CERASP Logo"
            className={`nav-logo ${isMobile || isTablet ? "mobile" : "hidden"}`}
          />
        </div>
      </Link>

      <nav className="nav" ref={navRef}>
        {(isMobile || isTablet) && (
          <button
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        )}

        <ul
          className={`nav-list ${
            (isMobile || isTablet) && menuOpen ? "show" : ""
          }`}
        >
          {sitemap.pages.map(({ "page-id": pageId, nav }) => {
            if (pageId.toLowerCase() === "landing") return null;

            const displayTitle = nav[language] || nav["en"];
            const linkPath = `/${pageId}`;
            const isActive =
              pathname === linkPath || pathname.startsWith(linkPath + "/");

            return (
              <li
                key={pageId}
                className={`nav-item ${isActive ? "active" : ""}`}
              >
                <a
                  href={linkPath}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(linkPath);
                  }}
                >
                  {displayTitle.toUpperCase()}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
