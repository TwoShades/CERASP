// import "./css/ProjectsOverview.css";
import { useEffect, useState, useContext } from "react";
import ScrollPanel from "../../components/layouts/ScrollPanel.js";
import Footer from "../../components/layouts/Footer.js";
import useScrollToPanel from "../../hooks/useScrollToPanel.js";
import { LanguageContext } from "../../contexts/LanguageContext";

const ProjectsOverview = () => {
  useScrollToPanel();
  const { language } = useContext(LanguageContext);
  const [projectsData, setProjectsData] = useState([]);

  // fixed order arrays
  const englishOrder = [
    "Advanced Wound Healing",
    "Nanoparticle-Based Drug Delivery",
    "Theranostic Nanoparticles",
    "Technical Support",
    "Active Pharmaceutical Ingredient Manufacturing",
  ];

  const frenchOrder = [
    "Cicatrisation avancée des plaies",
    "Administration de médicaments à base de nanoparticules",
    "Nanoparticules théranostiques",
    "Support technique",
    "Fabrication d'ingrédients pharmaceutiques actifs",
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `https://loving-bird-9ef3b0470a.strapiapp.com/api/projects?locale=${language}`
        );
        const json = await res.json();

        const cleaned = json.data.map((entry) => ({
          title: entry.Title?.trim() || "",
          subtitle: entry.Subtitle?.trim() || "",
          content: entry.Content || "",
        }));

        const orderArray =
          language === "fr" ? frenchOrder : englishOrder;

        // create a lookup map for speed and accuracy
        const orderMap = new Map(
          orderArray.map((t, i) => [t, i])
        );

        const sorted = [...cleaned].sort((a, b) => {
          const ai = orderMap.has(a.title)
            ? orderMap.get(a.title)
            : 999;
          const bi = orderMap.has(b.title)
            ? orderMap.get(b.title)
            : 999;
          return ai - bi;
        });

        setProjectsData(sorted);
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
    <div className="projects-overview-layout">
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
