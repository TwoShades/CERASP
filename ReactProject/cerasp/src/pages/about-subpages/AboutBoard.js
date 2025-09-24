import React, {
  useEffect,
  useState,
  useContext,
} from "react";
import "./css/AboutBoard.css";
import "../_css/Subpage.css";
import BoardMember from "../../components/uicomponents/BoardMember";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import { LoadingContext } from "../../contexts/LoadingContext";

export default function AboutBoard() {
  const { language } = useContext(LanguageContext);
  const { isMobile } = useContext(ScreenSizeContext);
  const { setLoading } = useContext(LoadingContext);

  const [boardMembers, setBoardMembers] = useState([]);

  useEffect(() => {
    async function fetchBoard() {
      setLoading(true); // start loading

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

        const customOrder = [
          "Julie Pelletier",
          "Teresa Berghello",
          "Simon Fortin",
          "Roberta Silerova",
          "Annie Charland",
          "Guy LeHouiller",
          "Benjamin Tanguay",
          "Marc Purcell",
          "Phil Roche",
        ];

        const sorted = cleaned.sort((a, b) => {
          const indexA = customOrder.indexOf(a.Name);
          const indexB = customOrder.indexOf(b.Name);

          if (indexA === -1 && indexB === -1) return 0;
          if (indexA === -1) return 1;
          if (indexB === -1) return -1;
          return indexA - indexB;
        });

        setBoardMembers(sorted);
      } catch (err) {
        console.error(
          "Failed to fetch board members:",
          err
        );
      } finally {
        setLoading(false); // stop loading regardless
      }
    }

    fetchBoard();
  }, [language, setLoading]);

  return (
    <main className="subpage-overview">
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
      <section
        className={
          isMobile
            ? "subpage-center-all"
            : "subpage-left-all"
        }
      >
        <div className="team-cards">
          {boardMembers.map((member) => (
            <BoardMember key={member.id} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
