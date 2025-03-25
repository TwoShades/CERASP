import React, { useState, useEffect } from "react";
import "./css/EquipmentsPanel.css";
import LearnMoreButton from "../interactables/LearnMoreButton";

const EquipmentsPanel = () => {
  const equipmentArray = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Handle window resizing to change items per page dynamically
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 577) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1025) {
        setItemsPerPage(2); // 2 items per page for screens smaller than 1025px
      } else {
        setItemsPerPage(4); // 4 items per page for larger screens
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = equipmentArray.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const nextPage = () => {
    if (currentPage < Math.ceil(equipmentArray.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="equipments-panel-grid">
      <div className="equipments-left-content">
        {currentItems.map((item, index) => (
          <div key={index} className="individual-equipment">
            {item}
          </div>
        ))}
      </div>
      <div className="equipments-right-content">
        <h2>Our Equipment</h2>
        <p className="equipments-right-content-text">
          Lorem ipsum dolor sit amet consectetur. Morbi cras pellentesque ut
          posuere sit elementum. Et quam ipsum nibh suspendisse sed non.
          Curabitur eget at cras auctor risus. Risus suscipit lectus at cursus
          donec.
        </p>
        <LearnMoreButton pdfUrl="/pdfs/Lorem_ipsum.pdf" />
      </div>
      {/* Pagination controls below the left panel */}
      <div className="pagination-controls">
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
            currentPage === Math.ceil(equipmentArray.length / itemsPerPage)
          }
          className="pagination-arrow"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default EquipmentsPanel;
