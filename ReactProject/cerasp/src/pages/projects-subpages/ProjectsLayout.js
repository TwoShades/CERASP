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
import ContactIcon from "../../components/interactables/ContactIcon";
import Footer from "../../components/layouts/Footer";
import useLenis from "../../hooks/useLenis";

const ProjectsLayout = () => {
  useLenis().scrollToTopWithLenis();
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
      {projectsData && (
        <>
          <div className="subpage-flex-column">
            <div id="projects-bullets">
              <AnimateObject variantsToRun={["fadeIn"]}>
                {projectsData.map((proj, index) => (
                  <InteractiveBullet
                    key={index}
                    title={proj.title}
                    description={proj.content}
                    variant="hero"
                  />
                ))}
              </AnimateObject>
            </div>
            <AnimateObject
              variantsToRun={["slideLeft", "fadeIn"]}
              className="subpage-intro-grid"
            >
              <h1>
                {language === "fr"
                  ? "SUBVENTIONS ATTRIBUÉES"
                  : "GRANTS AWARDED"}
              </h1>
            </AnimateObject>
            <ProjectsGrants style={{ zIndex: "30" }} />
          </div>
          <ContactIcon />
          <Footer />
        </>
      )}
    </main>
  );
};

export default ProjectsLayout;
