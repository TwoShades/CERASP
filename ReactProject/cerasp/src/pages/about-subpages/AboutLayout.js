// AboutLayout.js
import { Outlet, useLocation } from "react-router-dom";
import "../Pages-css/AboutLayout.css";

const AboutLayout = () => {
  const location = useLocation();

  const isOverview = location.pathname === "/about";

  return (
    <div className="about-page page-content">
      {isOverview && (
        <aside className="about-sidebar">
          <ul>
            <li>
              <a href="/about/facilities">Facilities</a>
            </li>
            <li>
              <a href="/about/equipments">Equipment</a>
            </li>
            <li>
              <a href="/about/team">Team</a>
            </li>
            <li>
              <a href="/about/board">Board</a>
            </li>
          </ul>
        </aside>
      )}

      <main className="about-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AboutLayout;
