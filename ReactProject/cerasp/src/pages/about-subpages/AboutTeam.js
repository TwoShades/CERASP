import React from "react";
import teamData from "./team.json";
import "./css/AboutTeam.css";
import Employee from "../../components/uicomponents/Employee.js";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function AboutTeam() {
  const { language } = React.useContext(LanguageContext);
  return (
    <div className="about-team">
      <h1>{language === "en" ? "MEET THE TEAM" : "RENCONTREZ L'ÉQUIPE"}</h1>
      <div className="team-cards">
        {teamData.team.map((member) => (
          <Employee key={member.id} member={member} className="team-member" />
        ))}
      </div>
    </div>
  );
}
