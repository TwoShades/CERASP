import "./Pages-css/Projects.css";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import ProjectsOverview from "./projects-subpages/ProjectsOverview.js";
import ContactUs from "./ContactUs/ContactUs.js";

const Projects = () => {
  useScrollToPanel();

  return (
    <div className="projects-page page-content">
      <div id="overview">
        <ProjectsOverview />
      </div>
      <div id="contact-us-form">
        <ContactUs />
      </div>
    </div>
  );
};

export default Projects;
