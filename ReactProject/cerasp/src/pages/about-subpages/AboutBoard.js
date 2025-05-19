import React, { useState, useEffect, useContext } from "react";
import "./css/AboutBoard.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import boardMembersData from "./boardmembers.json";

export default function AboutBoard() {
  const [boardMembers, setBoardMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet } = useContext(ScreenSizeContext);

  useEffect(() => {
    setBoardMembers(boardMembersData.boardMembers || []);
  }, []);

  const itemsPerPage = isMobile ? 2 : isTablet ? 3 : 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = boardMembers.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(boardMembers.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="about-board">
      <div className="about-board-header">
        <h1>{language === "fr" ? "MEMBRES DU CONSEIL" : "BOARD MEMBERS"}</h1>
      </div>

      <div className="about-board-images">
        {currentItems.map((member) => (
          <div key={member.id} className="board-member-card">
            <img
              src={`/boardmembers/photos/${member.photo}`}
              alt={member.name}
            />
            <h4>{member.name}</h4>
            <p className="board-member-position">{member.position}</p>
            <p className="board-member-affiliation">{member.affiliation}</p>
          </div>
        ))}
      </div>

      <div className="pagination-buttons">
        <button onClick={prevPage} disabled={currentPage === 1}>
          &lt;
        </button>
        <button
          onClick={nextPage}
          disabled={
            currentPage >= Math.ceil(boardMembers.length / itemsPerPage)
          }
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
