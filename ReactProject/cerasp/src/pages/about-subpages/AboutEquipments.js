import React, { useState, useEffect, useContext } from "react";
import { ScreenSizeContext } from "../../hooks/ScreenSizeContext";
import LearnMoreButton from "../../components/interactables/LearnMoreButton";
import equipmentsData from "../../components/panels/reference/equipments.json";
import "./css/AboutEquipments.css";

const AboutEquipments = () => {
  const [equipments, setEquipments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { isMobile, isTablet } = useContext(ScreenSizeContext);

  useEffect(() => {
    setEquipments(equipmentsData.equipment || []);
  }, []);

  const itemsPerPage = isMobile ? 2 : isTablet ? 2 : 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = equipments.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(equipments.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="about-equipments">
      <div className="about-equipments-layout">
        <div className="about-equipments-header">
          <h1>EQUIPMENTS</h1>
          <h3>Discover our state-of-the-art equipment!</h3>
        </div>

        <div className="about-equipments-images">
          {currentItems.map((equipment) => (
            <div key={equipment.id} className="equipment-card">
              <img
                src={`/equipments/photos/${equipment.photo}`}
                alt={equipment.name}
              />
              <h4>{equipment.name}</h4>
              {equipment.pdf && equipment.pdf.trim() !== "" && (
                <LearnMoreButton
                  pdfUrl={`/equipments/pdfs/${equipment.pdf}`}
                  text="View PDF"
                />
              )}
            </div>
          ))}
        </div>

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
              currentPage === Math.ceil(equipments.length / itemsPerPage)
            }
            className="pagination-arrow"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutEquipments;
