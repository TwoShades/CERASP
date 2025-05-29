import React, { useState, useEffect, useContext } from "react";
import "./css/AboutBoard.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import boardMembersData from "./boardmembers.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";

export default function AboutBoard() {
  const [boardMembers, setBoardMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet } = useContext(ScreenSizeContext);

  useEffect(() => {
    setBoardMembers(boardMembersData.boardMembers || []);
  }, []);

  const itemsPerPage = isMobile ? 2 : isTablet ? 2 : 4;
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
    <div className="about-board-layout">
      <SubPageHeader
        name={language === "fr" ? "MEMBRES DU CONSEIL" : "BOARD MEMBERS"}
      />
      <div className="about-board">
        <div className="about-board-header"></div>

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

          {/* Add a hidden placeholder to keep vertical space consistent */}
          {isMobile && currentItems.length === 1 && (
            <div className="board-member-card placeholder" aria-hidden="true" />
          )}
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
    </div>
  );
}
