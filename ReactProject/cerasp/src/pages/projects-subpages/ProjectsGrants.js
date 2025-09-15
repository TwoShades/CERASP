import React, { useContext } from "react";
import "./css/ProjectsGrants.css";
import { LanguageContext } from "../../contexts/LanguageContext";

// minor change

const grantsData = [
  {
    fr: "Mobilisation (CRSNG): « Promouvoir l’innovation, faire progresser la recherche et renforcer la préparation à l’emploi dans l’industrie pharmaceutique » – 2 000 000 $ (2024)",
    en: "Mobilisation (NSERC): Promoting innovation, advancing research, and enhancing job readiness for the pharmaceutical industry – $2,000,000 (2024)",
  },
  {
    fr: "Développement économique Canada (DEC) : Installation d’une salle blanche biopharmaceutique – 760 000 $ (2024)",
    en: "Canada Economic Development (CED): Installation of a biopharmaceutical cleanroom – $760,000 (2024)",
  },
  {
    fr: "CRSNG – Partenariat en recherche appliquée et en technologie (PRAT) – 440 000 $ (2022)",
    en: "NSERC – Applied Research and Technology Partnership (ARTP) – $440,000 (2022)",
  },
  {
    fr: "CRSNG – PARI – 55 000 $ (2022)",
    en: "NSERC – IRAP – $55,000 (2022)",
  },
  {
    fr: "CI-CAN – Développement de la recherche appliquée au Kenya – 160 000 $ (2022)",
    en: "CI-CAN – Applied Research Development in Kenya – $160,000 (2022)",
  },
  {
    fr: "MITACS/FRQNT (Stagiaires) – 35 000 $ (2022)",
    en: "MITACS/FRQNT (Internships) – $35,000 (2022)",
  },
  {
    fr: "MEI Québec – Volet 4 – Subvention d’équipements – 1 300 000 $ (2021)",
    en: "MEI Quebec – Stream 4 – Equipment Grant – $1,300,000 (2021)",
  },
  {
    fr: "DEC – Subvention d'équipement spécifique à un projet – 250 000 $ (2021)",
    en: "DEC – Project-Specific Equipment Grant – $250,000 (2021)",
  },
  {
    fr: "Ville de Mtl – Agir pour les talents (Subvention pour le développement de la main-d'œuvre) – 250 000 $ (2021)",
    en: "City of Montreal – Talent in Action (Workforce Development Grant) – $250,000 (2021)",
  },
  {
    fr: "MITACS/FRQNT (Stagiaires) – 20 000 $ (2021)",
    en: "MITACS/FRQNT (Internships) – $20,000 (2021)",
  },
  {
    fr: "MITACS/FRQNT (Stagiaires) – 33 000 $ (2020)",
    en: "MITACS/FRQNT (Internships) – $33,000 (2020)",
  },
];

export default function ProjectsGrants() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="grants-section">
      <ul className="grants-list">
        {grantsData.map((grant, index) => (
          <li key={index} className="grant-item">
            {language === "fr" ? (
              <span className="grant-fr">{grant.fr}</span>
            ) : (
              <span className="grant-en">{grant.en}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
