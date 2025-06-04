import "./css/ProjectsOverview.css";
import { useEffect, useState, useContext } from "react";
import ScrollPanel from "../../components/layouts/ScrollPanel.js";
import Footer from "../../components/layouts/Footer.js";
import ContactUsForm from "../../components/panels/ContactUsForm.js";
import useScrollToPanel from "../../hooks/useScrollToPanel.js";
import { LanguageContext } from "../../contexts/LanguageContext";
import SubPageHeader from "../../components/layouts/SubPageHeader.js";

const ProjectsOverview = () => {
  useScrollToPanel();
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
        console.error("Failed to fetch projects data:", err);
      }
    };

    fetchProjects();
  }, [language]);

  return (
    <div className="projects-overview-layout">
      <SubPageHeader
        name={language === "fr" ? "NOS PROJETS" : "OUR PROJECTS"}
        extraContent={
          <div className="projects-overview-header-text">
            <p>
              {language === "fr"
                ? "Projets innovants et bilingues axés sur la recherche pharmaceutique et biomédicale."
                : "Innovative bilingual projects focused on pharmaceutical and biomedical research."}
            </p>
          </div>
        }
      />
      <div className="project-container">
        {projectsData.map((proj, index) => (
          <details key={index} className="project-card">
            <summary>{proj.title}</summary>
            <p>{proj.content}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default ProjectsOverview;
