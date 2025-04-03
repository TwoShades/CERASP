import React, { useState, useEffect } from "react";
import "./css/BoardMembersPanel.css";
import boardMembersData from "./reference/boardmembers.json";

const BoardMembersPanel = () => {
  const [boardMembers, setBoardMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setBoardMembers(boardMembersData.boardMembers || []);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 651) {
        setIsMobile(true);
        setItemsPerPage(3);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const indexOfLastMember = currentPage * itemsPerPage;
  const indexOfFirstMember = indexOfLastMember - itemsPerPage;
  const currentMembers = boardMembers.slice(
    indexOfFirstMember,
    indexOfLastMember
  );

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
    <div className="board-members-panel-grid">
      <h1 className="board-members-title">Board Members</h1>
      <div className="board-members-content">
        {isMobile
          ? currentMembers.map((member) => (
              <div key={member.id} className="individual-board-member">
                <div
                  className="individual-board-member-image"
                  style={{
                    backgroundImage: `url(/boardmembers/photos/${member.photo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="individual-board-member-name">
                  {member.name}
                </div>
                <div className="individual-board-member-position">
                  {member.position}
                </div>
                <div className="individual-board-member-affiliation">
                  {member.affiliation}
                </div>
              </div>
            ))
          : boardMembers.map((member) => (
              <div key={member.id} className="individual-board-member">
                <div
                  className="individual-board-member-image"
                  style={{
                    backgroundImage: `url(/boardmembers/photos/${member.photo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="individual-board-member-name">
                  {member.name}
                </div>
                <div className="individual-board-member-position">
                  {member.position}
                </div>
                <div className="individual-board-member-affiliation">
                  {member.affiliation}
                </div>
              </div>
            ))}
      </div>

      {isMobile && (
        <div className="board-pagination-controls">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="pagination-arrow"
          >
            &lt;
          </button>
          <button
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(boardMembers.length / itemsPerPage)
            }
            className="pagination-arrow"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default BoardMembersPanel;
