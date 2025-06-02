import React, { useState, useEffect, useContext } from "react";
import "./css/AboutBoard.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import SubPageHeader from "../../components/layouts/SubPageHeader";

export default function AboutBoard() {
  const [boardMembers, setBoardMembers] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchBoardMembers = async () => {
      try {
        const res = await fetch(
          `https://loving-bird-9ef3b0470a.strapiapp.com/api/board-members?locale=${language}&populate=Picture`
        );
        const json = await res.json();
        console.log("Fetched board data:", json.data);
        const cleaned = json.data.map((entry) => ({
          id: entry.id,
          name: entry.Name || "",
          position: entry.Title || "",
          affiliation: entry.Affiliation || "",
          photo: entry.Picture?.url || "",
        }));

        setBoardMembers(cleaned);
      } catch (err) {
        console.error("Failed to fetch board members:", err);
      }
    };

    fetchBoardMembers();
  }, [language]);

  return (
    <div className="about-board-layout">
      <SubPageHeader
        name={language === "fr" ? "MEMBRES DU CONSEIL" : "BOARD MEMBERS"}
      />
      <div className="about-board">
        <div className="about-board-header"></div>

        <div className="about-board-images">
          {boardMembers.map((member) => (
            <div key={member.id} className="board-member-card">
              <img src={member.photo} alt={member.name} />
              <h4>{member.name}</h4>
              <p className="board-member-position">{member.position}</p>
              <p className="board-member-affiliation">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
