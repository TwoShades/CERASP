import React, {
  useEffect,
  useState,
  useContext,
} from "react";
import "./css/AboutTeam.css"; // for layout and Employee/BoardMember styles
import "../_css/Subpage.css";
import BoardMember from "../../components/uicomponents/BoardMember"; // import the new component
import { LanguageContext } from "../../contexts/LanguageContext";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import ContactCTA from "../../components/interactables/ContactCTA";
import PageLinkCTA from "../../components/interactables/PageLinkCTA";

export default function AboutBoard() {
  const { language } = useContext(LanguageContext);
  const [boardMembers, setBoardMembers] = useState([]);

  useEffect(() => {
    async function fetchBoard() {
      try {
        const res = await fetch(
          `https://loving-bird-9ef3b0470a.strapiapp.com/api/board-members?locale=${language}&populate=Picture`
        );
        const json = await res.json();

        const cleaned = json.data.map((entry) => ({
          id: entry.id,
          Name: entry.Name,
          Title: entry.Title,
          Affiliation: entry.Affiliation,
          Picture:
            entry.Picture?.formats?.medium?.url ||
            entry.Picture?.url ||
            "",
        }));

        setBoardMembers(cleaned);
      } catch (err) {
        console.error(
          "Failed to fetch board members:",
          err
        );
      }
    }

    fetchBoard();
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
              ? "MEMBRES DU CONSEIL"
              : "BOARD MEMBERS"}
          </h1>
        </AnimateObject>
        <section className="subpage-center-all">
          <div className="team-cards">
            {boardMembers.map((member) => (
              <BoardMember
                key={member.id}
                member={member}
              />
            ))}
          </div>
        </section>
      </main>
      {boardMembers.length > 0 && (
        <>
          <ContactCTA />
          {/* <PageLinkCTA
            text="Meet Our Team"
            url="/about/our-team"
          /> */}
        </>
      )}
    </>
  );
}
