import React, {
  useEffect,
  useState,
  useContext,
} from "react";
import "./css/AboutTeam.css";
import "../_css/Subpage.css";
import Employee from "../../components/uicomponents/Employee.js";
import { LanguageContext } from "../../contexts/LanguageContext";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import ContactCTA from "../../components/interactables/ContactCTA";
import PageLinkCTA from "../../components/interactables/PageLinkCTA.js";

export default function AboutTeam() {
  const { language } = useContext(LanguageContext);
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await fetch(
          `https://loving-bird-9ef3b0470a.strapiapp.com/api/employees?locale=${language}&populate=Picture`
        );

        const json = await res.json();
        const cleaned = json.data.map((entry) => {
          return {
            Name: entry.Name,
            Title: entry.Title,
            LinkedIn: entry.LinkedIn,
            Picture:
              entry.Picture?.formats?.medium?.url ||
              entry.Picture?.url ||
              "",
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
  }, [language]);

  return (
    <>
      <main className="subpage-overview subpage-center-all">
        <AnimateObject
          variantsToRun={["slideLeft", "fadeIn"]}
          className="subpage-intro-grid"
        >
          <h1>
            {language === "fr"
              ? "RENCONTREZ L'ÉQUIPE"
              : "MEET THE TEAM"}
          </h1>
        </AnimateObject>
        <section className="subpage-center-all">
          <div className="team-cards">
            {teamData.map((member) => {
              return (
                <Employee key={member.id} member={member} />
              );
            })}
          </div>
        </section>
      </main>
      {teamData.length > 0 && (
        <>
          {/* <PageLinkCTA
            text="Meet our Board Members"
            url="/about/board"
          /> */}
          <ContactCTA />
        </>
      )}
    </>
  );
}
