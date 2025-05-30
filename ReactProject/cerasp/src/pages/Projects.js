import "./Pages-css/Projects.css";
import { useEffect, useState, useContext } from "react";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import { LanguageContext } from "../contexts/LanguageContext";

const Projects = () => {
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
    <div className="project-container">
      <div className="project-left">
        <h2>{language === "fr" ? "Recherche en santé" : "Healthcare R&D"}</h2>
        <p className="project-intro">
          {language === "fr"
            ? "Projets innovants et bilingues axés sur la recherche pharmaceutique et biomédicale."
            : "Innovative bilingual projects focused on pharmaceutical and biomedical research."}
        </p>
      </div>
      <div className="project-right">
        {projectsData.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p className="desc">{proj.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
