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
        <p>
          {language === "fr"
            ? "Voici quelques exemples de projets que nous avons réalisés auparavant:"
            : "Some examples of projects we have previously undertaken include:"}
        </p>
      </AnimateObject>
      <div className="layout-panel-5">
        <ContactIcon />
      </div>
      {projectsData !== null && (
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
            <AnimateObject
              variantsToRun={["fadeIn"]}
              className="grants-animate"
            >
              <ProjectsGrants />
            </AnimateObject>
          </div>
          <Footer />
        </>
      )}
    </main>
  );
};

export default ProjectsLayout;
