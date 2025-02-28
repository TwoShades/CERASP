import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Navigation.css";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <span>❒</span>
            About CERASP
          </Link>
        </li>
        <li>
          <Link to="/expertises" onClick={() => setMenuOpen(false)}>
            <span>❒</span>
            Expertises & Solutions
          </Link>
        </li>
        <li>
          <Link to="/sectors" onClick={() => setMenuOpen(false)}>
            <span>❒</span>
            Sector of Activities
          </Link>
        </li>
        {/* <li>
          <Link to="/equipment" onClick={() => setMenuOpen(false)}>
            <span>❒</span>
            Exquipment
          </Link>
        </li> */}
        <li>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            <span>❒</span>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/news" onClick={() => setMenuOpen(false)}>
            <span>❒</span>
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
