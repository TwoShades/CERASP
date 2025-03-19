import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/Navigation.css";
import useScrollToTop from "../../hooks/useScrollToTop";
import sitemap from "../../sitemap.json";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // Track which sub-menu is open

  const { handleLinkClick } = useScrollToTop(pathname, () =>
    setMenuOpen(false)
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
        setOpenSubMenu(null); // Close sub-menus on desktop
      }
      setIsMobile(window.innerWidth < 1025);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigateToSection = (section, path) => {
    navigate(path, { state: { scrollTo: section } });
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu((prev) => (prev === menu ? null : menu)); // Toggle sub-menu
  };

  return (
    <nav className="nav">
      {isMobile && (
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      )}
      <ul className={`nav-list ${isMobile && menuOpen ? "show" : ""}`}>
        {sitemap.pages.map(
          ({ title, "nav-title": navTitle, "sub-pages": subPages }) => (
            <li
              key={title}
              className="nav-item"
              onMouseEnter={() => !isMobile && setHoveredMenu(title)}
              onMouseLeave={() => !isMobile && setHoveredMenu(null)}
            >
              <div
                className="nav-link-wrapper"
                onClick={() => isMobile && toggleSubMenu(title)} // Toggle sub-menu on click for mobile
              >
                <Link
                  to={`/${title}`}
                  onClick={() => handleLinkClick(`/${title}`)}
                >
                  {navTitle}
                </Link>
                {isMobile && subPages && (
                  <span className="dropdown-toggle">
                    {openSubMenu === title ? "▲" : "▼"}
                  </span>
                )}
              </div>

              {(hoveredMenu === title || (isMobile && openSubMenu === title)) && (
                <div className="dropdown">
                  <ul>
                    {subPages.map((subPage) => (
                      <li
                        key={subPage}
                        onClick={() =>
                          handleNavigateToSection(subPage, `/${title}`)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        {subPage.replaceAll("-", " ").toUpperCase()}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
