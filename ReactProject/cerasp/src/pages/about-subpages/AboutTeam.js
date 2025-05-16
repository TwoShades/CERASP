import React, { useEffect, useState, useContext } from "react";
import "./css/AboutTeam.css";
import Employee from "../../components/uicomponents/Employee.js";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function AboutTeam() {
  const { language } = useContext(LanguageContext);
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await fetch(
          "https://loving-bird-9ef3b0470a.strapiapp.com/api/employees?populate=Picture"
        );

        const json = await res.json();
        const cleaned = json.data.map((entry) => {
          return {
            id: entry.id,
            Name: entry.Name,
            Title: entry.Title,
            Picture:
              entry.Picture?.formats?.medium?.url || entry.Picture?.url || "",
            createdAt: entry.createdAt,
          };
        });

        // Ensure sorting by Title (in case API sorting fails)
        const sortedData = cleaned.sort((a, b) =>
          a.createdAt.localeCompare(b.createdAt)
        );

        setTeamData(sortedData);
      } catch (err) {
        console.error("Failed to fetch team data:", err);
      }
    }

    fetchTeam();
  }, []);

  return (
    <div className="about-team">
      <h1>{language === "en" ? "MEET THE TEAM" : "RENCONTREZ L'ÉQUIPE"}</h1>
      <div className="team-cards">
        {teamData.map((member) => {
          return (
            <Employee key={member.id} member={member} className="team-member" />
          );
        })}
      </div>
    </div>
  );
}
