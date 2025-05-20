import "./Pages-css/Projects.css";
import { useEffect, useContext } from "react";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import { LanguageContext } from "../contexts/LanguageContext";

const projects = [
  {
    title: "Nanoparticle-Based Drug Delivery",
    frTitle:
      "Système de distribution de médicaments basé sur des nanoparticules",
    desc: "Lipid nanoparticles for co-encapsulation of drugs and RNA targeting glioblastoma and retinoblastoma.",
    frDesc:
      "Nanoparticules lipidiques pour la co-encapsulation de médicaments et d'ARN ciblant le glioblastome et le rétinoblastome.",
  },
  {
    title: "Advanced Wound Healing",
    frTitle: "Cicatrisation avancée des plaies",
    desc: "Thermosensitive and antimicrobial peptide-based polymers for advanced wound dressings.",
    frDesc:
      "Polymères thermosensibles et antimicrobiens à base de peptides pour des pansements de plaies avancés.",
  },
  {
    title: "Theranostic Nanoparticles",
    frTitle: "Nanoparticules théranostiques",
    desc: "Yolk-shell and hybrid thermosensitive nanoparticles for simultaneous diagnosis and treatment.",
    frDesc:
      "Nanoparticules thermosensibles à coquille d'œuf et hybrides pour le diagnostic et le traitement simultanés.",
  },
  {
    title: "Technical Support",
    frTitle: "Support technique",
    desc: "Biolocalize fluorinated medical compounds by confirming their mechanism of action, using proprietary MRI technologies, formulate the fluorinated compound in a solution to make it injectable for rat testing, and produce micro-batches for use.",
    frDesc:
      "Biolocaliser les composés médicaux fluorés en confirmant leur mode d'action, en utilisant des technologies IRM propriétaires, formuler le composé fluoré dans une solution pour le rendre injectable pour des tests sur des rats, et produire des micro-lots pour utilisation.",
  },
  {
    title: "Active Pharmaceutical Ingredient Manufacturing",
    frTitle: "Fabrication d'Ingrédients Actifs Pharmaceutiques",
    desc: "Local supply of APIs from plants for the pharmaceutical industry. Using plant cells and a bioreactor production platform, biomass, metabolites, and enzymes will be produced + biotransformation of exogenous metabolites to create specific metabolites and recombinant proteins (enzymes, hormones, and monoclonal antibodies) or secondary metabolites for therapeutic use. The working group includes 1 private company, a researcher from the University of Montreal, and our CCTT.",
    frDesc:
      "Fourniture locale d'APIs à partir de plantes pour l'industrie pharmaceutique. En utilisant des cellules végétales et une plateforme de production en bioréacteur, de la biomasse, des métabolites et des enzymes seront produits, ainsi que la biotransformation de métabolites exogènes pour créer des métabolites spécifiques et des protéines recombinantes (enzymes, hormones et anticorps monoclonaux) ou des métabolites secondaires à usage thérapeutique. Le groupe de travail comprend une entreprise privée, un chercheur de l'Université de Montréal et notre CCTT.",
  },
];

const Projects = () => {
  useScrollToPanel();
  const { language } = useContext(LanguageContext);

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
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{language === "fr" ? proj.frTitle : proj.title}</h3>
            <p className="desc">
              {language === "fr" ? proj.frDesc : proj.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
