import sitemap from "../../sitemap.json";
import { Outlet, useLocation } from "react-router-dom";
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import "../_css/Layout.css";
import "./css/ProjectsLayout.css";
import { LanguageContext } from "../../contexts/LanguageContext";

import ProjectsGrants from "./ProjectsGrants";
import InteractiveBullet from "../../components/uicomponents/InteractiveBullet";
import AnimateObject from "../../components/uicomponents/AnimateObject";

const ProjectsLayout = () => {
  const location = useLocation();
  const projectsPage = sitemap.pages.find(
    (page) => page["page-id"] === "projects"
  );

  const { language } = useContext(LanguageContext);
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `https://loving-bird-9ef3b0470a.strapiapp.com/api/projects?locale=${language}`
        );
        const json = await res.json();

        const cleaned = json.data.map((entry) => ({
          title: entry.Title || "",
          subtitle: entry.Subtitle?.trim() || "",
          content: entry.Content || "",
        }));

        setProjectsData(cleaned);
      } catch (err) {
        console.error(
          "Failed to fetch projects data:",
          err
        );
      }
    };

    fetchProjects();
  }, [language]);

  return (
    <main className="subpage-overview">
      <AnimateObject
        variantsToRun={["slideLeft", "fadeIn"]}
        className="subpage-intro-grid"
      >
        <h1>
          {language === "fr"
            ? "NOS PROJETS"
            : "OUR PROJECTS"}
        </h1>
      </AnimateObject>
      <div className="layout-panel-5"></div>

      {/* <ProjectsGrants /> */}

      {/* New bullet-style projects list */}
      <div className="subpage-flex-column">
        <div id="projects-bullets">
          {projectsData.map((proj, index) => (
            <InteractiveBullet
              key={index}
              title={proj.title}
              description={proj.content}
            />
          ))}
          <div className="expertise-generic-square"></div>
        </div>
      </div>
      <div>
        ========MIGHT NEED PHOTO/VISUAL ELEMENT=========
      </div>
      <div>
        ========PROJECT LIST - MAYBE DIFFERENT BULLET
        STYLE=========
      </div>
      <div> ========GRANTS IN PROGRESS=========</div>

      <main className="layout-main-content">
        <Outlet />
      </main>
    </main>
  );
};

export default ProjectsLayout;
