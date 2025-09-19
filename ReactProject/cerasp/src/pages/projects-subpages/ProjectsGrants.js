import React, { useContext } from "react";
import "./css/ProjectsGrants.css";
import { LanguageContext } from "../../contexts/LanguageContext";

const grantsData = [
  {
    name: {
      fr: "Mobilisation (CRSNG): « Promouvoir l’innovation, faire progresser la recherche et renforcer la préparation à l’emploi dans l’industrie pharmaceutique »",
      en: "Mobilisation (NSERC): Promoting innovation, advancing research, and enhancing job readiness for the pharmaceutical industry",
    },
    value: {
      fr: "2 000 000 $ (2024)",
      en: "$2,000,000 (2024)",
    },
  },
  {
    name: {
      fr: "Développement économique Canada (DEC) : Installation d’une salle blanche biopharmaceutique",
      en: "Canada Economic Development (CED): Installation of a biopharmaceutical cleanroom",
    },
    value: {
      fr: "760 000 $ (2024)",
      en: "$760,000 (2024)",
    },
  },
  {
    name: {
      fr: "CRSNG – Partenariat en recherche appliquée et en technologie (PRAT)",
      en: "NSERC – Applied Research and Technology Partnership (ARTP)",
    },
    value: {
      fr: "440 000 $ (2022)",
      en: "$440,000 (2022)",
    },
  },
  {
    name: {
      fr: "CRSNG – PARI",
      en: "NSERC – IRAP",
    },
    value: {
      fr: "55 000 $ (2022)",
      en: "$55,000 (2022)",
    },
  },
  {
    name: {
      fr: "CI-CAN – Développement de la recherche appliquée au Kenya",
      en: "CI-CAN – Applied Research Development in Kenya",
    },
    value: {
      fr: "160 000 $ (2022)",
      en: "$160,000 (2022)",
    },
  },
  {
    name: {
      fr: "MITACS/FRQNT (Stagiaires)",
      en: "MITACS/FRQNT (Internships)",
    },
    value: {
      fr: "35 000 $ (2022)",
      en: "$35,000 (2022)",
    },
  },
  {
    name: {
      fr: "MEI Québec – Volet 4 – Subvention d’équipements",
      en: "MEI Quebec – Stream 4 – Equipment Grant",
    },
    value: {
      fr: "1 300 000 $ (2021)",
      en: "$1,300,000 (2021)",
    },
  },
  {
    name: {
      fr: "DEC – Subvention d'équipement spécifique à un projet",
      en: "DEC – Project-Specific Equipment Grant",
    },
    value: {
      fr: "250 000 $ (2021)",
      en: "$250,000 (2021)",
    },
  },
  {
    name: {
      fr: "Ville de Mtl – Agir pour les talents (Subvention pour le développement de la main-d'œuvre)",
      en: "City of Montreal – Talent in Action (Workforce Development Grant)",
    },
    value: {
      fr: "250 000 $ (2021)",
      en: "$250,000 (2021)",
    },
  },
  {
    name: {
      fr: "MITACS/FRQNT (Stagiaires)",
      en: "MITACS/FRQNT (Internships)",
    },
    value: {
      fr: "20 000 $ (2021)",
      en: "$20,000 (2021)",
    },
  },
  {
    name: {
      fr: "MITACS/FRQNT (Stagiaires)",
      en: "MITACS/FRQNT (Internships)",
    },
    value: {
      fr: "33 000 $ (2020)",
      en: "$33,000 (2020)",
    },
  },
];

export default function ProjectsGrants() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="grants-section">
      <ul className="grants-list">
        {grantsData.map((grant, index) => (
          <li key={index} className="grant-item">
            <span className="grant-name">
              {grant.name[language]}
            </span>{" "}
            <span className="grant-value">
              {grant.value[language]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
