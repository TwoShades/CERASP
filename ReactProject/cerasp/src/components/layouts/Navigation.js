import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/Navigation.css";
import useScrollToTop from "../../hooks/useScrollToTop";
import sitemap from "../../sitemap.json";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1201);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const navRef = useRef(null);

  const { handleLinkClick } = useScrollToTop(pathname, () =>
    setMenuOpen(false)
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1201) {
        setMenuOpen(false);
        setOpenSubMenu(null);
      }
      setIsMobile(window.innerWidth < 1201);
    };

    window.addEventListener("resize", handleResize);

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setOpenSubMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleNavigateToSection = (section, path) => {
    navigate(path, { state: { scrollTo: section } });
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="nav" ref={navRef}>
      {isMobile && (
        <button
          className="hamburger"
          onClick={() => {
            setMenuOpen((prev) => {
              const newState = !prev;
              if (!newState) {
                setOpenSubMenu(null);
              }
              return newState;
            });
          }}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      )}
      <ul className={`nav-list ${isMobile && menuOpen ? "show" : ""}`}>
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
                onMouseEnter={() => !isMobile && setHoveredMenu(title)}
                onMouseLeave={() => !isMobile && setHoveredMenu(null)}
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
                  {isMobile && filteredSubPages.length > 0 && (
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

                {/* Only show dropdown if this item is hovered or its submenu is open */}
                {(hoveredMenu === title ||
                  (isMobile && openSubMenu === title)) &&
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
                            style={{ cursor: "pointer" }}
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
  );
};

export default Navigation;
