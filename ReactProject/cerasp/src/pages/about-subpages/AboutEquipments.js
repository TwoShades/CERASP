import React, { useState, useEffect, useContext } from "react";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import LearnMoreButton from "../../components/interactables/LearnMoreButton";
import equipmentsData from "../../components/panels/reference/equipments.json";
import "./css/AboutEquipments.css";

const AboutEquipments = () => {
  const [equipments, setEquipments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet } = useContext(ScreenSizeContext);

  useEffect(() => {
    setEquipments(equipmentsData.equipment || []);
  }, []);

  const itemsPerPage = isMobile ? 2 : isTablet ? 3 : 4;
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
    <div className="about-equipments-layout">
      <h1 className="about-equipments-title">
        {" "}
        {language === "fr" ? "ÉQUIPEMENTS" : "EQUIPMENT"}
      </h1>
      <div className="about-equipments">
        <div className="about-equipments-header">
          <h3>
            {language === "fr"
              ? "Découvrez notre équipement à la fine pointe de la technologie!"
              : "Discover our state-of-the-art equipment!"}
          </h3>
        </div>

        <div className="about-equipments-images">
          {currentItems.map((equipment) => (
            <div key={equipment.id} className="equipment-card">
              <img
                src={`/equipments/photos/${equipment.photo}`}
                alt={equipment.name}
              />
              <div className="equipment-card-info">
                <h4>{equipment.name}</h4>
                {equipment.pdf && equipment.pdf.trim() !== "" && (
                  <LearnMoreButton
                    pdfUrl={`/equipments/pdfs/${equipment.pdf}`}
                    text="View PDF"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        {isMobile && currentItems.length === 1 && (
          <div className="about-equipments placeholder" aria-hidden="true" />
        )}

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
