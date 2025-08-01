import React, { useState, useEffect, useContext } from "react";
import { ScreenSizeContext } from "../../hooks/ScreenSizeContext";
import "./css/EquipmentsPanel.css";
import LearnMoreButton from "../interactables/LearnMoreButton";
import equipmentsData from "./reference/equipments.json";

const EquipmentsPanel = () => {
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
    <div className="equipments-panel-grid">
      <div className="equipments-left-content">
        {currentItems.map((equipment) => {
          return (
            <div key={equipment.id} className="individual-equipment">
              <div
                className="individual-equipment-image"
                style={{
                  backgroundImage: `url(/equipments/photos/${equipment.photo})`,
                }}
              ></div>
              <h4 className="equipment-title">{equipment.name}</h4>
              {equipment.pdf && equipment.pdf.trim() !== "" && (
                <LearnMoreButton
                  pdfUrl={`/equipments/pdfs/${equipment.pdf}`}
                  text="View PDF"
                />
              )}
            </div>
          );
        })}
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
          disabled={currentPage === Math.ceil(equipments.length / itemsPerPage)}
          className="pagination-arrow"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default EquipmentsPanel;
