import React, {
  useEffect,
  useState,
  useContext,
} from "react";
import "./css/AboutTeam.css";
import "../_css/Subpage.css";
import Employee from "../../components/uicomponents/Employee.js";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import AnimateObject from "../../components/uicomponents/AnimateObject";

export default function AboutTeam() {
  const { language } = useContext(LanguageContext);
  const { isMobile } = useContext(ScreenSizeContext);
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await fetch(
          `https://loving-bird-9ef3b0470a.strapiapp.com/api/employees?locale=${language}&populate=Picture`
        );
        const json = await res.json();

        const cleaned = json.data.map((entry) => ({
          Name: entry.Name,
          Title: entry.Title,
          LinkedIn: entry.LinkedIn,
          Picture:
            entry.Picture?.formats?.medium?.url ||
            entry.Picture?.url ||
            "",
          createdAt: entry.createdAt,
        }));

        // Sort by creation date first
        let sortedData = cleaned.sort((a, b) =>
          a.createdAt.localeCompare(b.createdAt)
        );

        // Custom last employees order
        const customLastOrder = [
          "Amina Cekic",
          "Anakin Benssoussen",
          "Alexandre Dicaire",
          "Nick Pelletier",
          "Anupam Poudel, BSc",
        ];

        // Separate the last employees and the rest
        const lastEmployees = [];
        const others = [];

        sortedData.forEach((member) => {
          if (customLastOrder.includes(member.Name)) {
            lastEmployees.push(member);
          } else {
            others.push(member);
          }
        });

        // Order last employees according to customLastOrder
        const orderedLastEmployees = customLastOrder
          .map((name) =>
            lastEmployees.find((m) => m.Name === name)
          )
          .filter(Boolean);

        // Combine
        setTeamData([...others, ...orderedLastEmployees]);
      } catch (err) {
        console.error("Failed to fetch team data:", err);
      }
    }

    fetchTeam();
  }, [language]);

  return (
    <main className="subpage-overview">
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
      <section
        className={
          isMobile
            ? "subpage-center-all"
            : "subpage-left-all"
        }
      >
        <div className="team-cards">
          {teamData
            .filter(
              (member) => member.Name !== "Claude Sara"
            )
            .map((member) => (
              <Employee key={member.id} member={member} />
            ))}
        </div>
      </section>
    </main>
  );
}
