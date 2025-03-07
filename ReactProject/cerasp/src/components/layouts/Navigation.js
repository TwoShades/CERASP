import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/Navigation.css";
import useScrollToTop from "../../hooks/useScrollToTop";

const Navigation = () => {
  const { pathname } = useLocation(); // Get the current pathname
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuOpen, setMenuOpen] = useState(false);

  // Use the custom hook to handle scroll to top behavior and link clicks
  const { handleLinkClick } = useScrollToTop(pathname, () =>
    setMenuOpen(false)
  ); // Close menu when clicking

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav">
      {isMobile && (
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      )}
      <ul className={`nav-list ${isMobile && menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/about" onClick={() => handleLinkClick("/about")}>
            <span>❒</span>
            About CERASP
          </Link>
        </li>
        <li>
          <Link to="/expertises" onClick={() => handleLinkClick("/expertises")}>
            <span>❒</span>
            Expertises & Solutions
          </Link>
        </li>
        <li>
          <Link to="/sectors" onClick={() => handleLinkClick("/sectors")}>
            <span>❒</span>
            Sector of Activities
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => handleLinkClick("/projects")}>
            <span>❒</span>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/news" onClick={() => handleLinkClick("/news")}>
            <span>❒</span>
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
