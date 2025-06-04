import React, { useState, useEffect, useContext } from "react";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import LearnMoreButton from "../../components/interactables/LearnMoreButton";
import "./css/AboutEquipments.css";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const AboutEquipments = () => {
  const [equipments, setEquipments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet } = useContext(ScreenSizeContext);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const res = await fetch(
          `https://loving-bird-9ef3b0470a.strapiapp.com/api/equipments?&populate=PDF&populate=Image&pagination[page]=1&pagination[pageSize]=100`
        );
        const json = await res.json();

        // Map API data into usable structure
        const cleaned = json.data.map((item) => ({
          id: item.id,
          name: item.Name || "",
          photoUrl: item.Image?.url || "",
          pdfUrl: item.PDF?.url || "",
        }));

        setEquipments(cleaned);
      } catch (err) {
        console.error("Failed to fetch equipments:", err);
      }
    };

    fetchEquipments();
  }, [language]);

  const itemsPerPage = isMobile ? 2 : isTablet ? 4 : 3;
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
      <SubPageHeader
        name={language === "fr" ? "ÉQUIPEMENT" : "EQUIPMENT"}
        extraContent={
          <h4>
            {language === "fr"
              ? "Découvrez notre équipement à la fine pointe de la technologie!"
              : "Discover our state-of-the-art equipment!"}
          </h4>
        }
      />
      <div className="about-equipments">
        <div className="about-equipments-header"></div>

        <div className="about-equipments-images">
          {currentItems.map((equipment) => (
            <div key={equipment.id} className="equipment-card">
              {equipment.photoUrl ? (
                <img src={equipment.photoUrl} alt={equipment.name} />
              ) : (
                <div className="no-image-placeholder">No image available</div>
              )}
              <div className="equipment-card-info">
                <h4>{equipment.name}</h4>
                {equipment.pdfUrl && (
                  <LearnMoreButton
                    pdfUrl={equipment.pdfUrl}
                    text={language === "fr" ? "Voir PDF" : "View PDF"}
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
              currentPage >= Math.ceil(equipments.length / itemsPerPage)
            }
            className="pagination-arrow"
          >
            &gt;
          </button>
        </div>
        <div className="equipment-master-list">
          {language === "fr" ? (
            <h4 className="equipment-master-list-title">
              Liste complète de l'équipement
            </h4>
          ) : (
            <h4 className="equipment-master-list-title">
              Comprehensive List of Equipment
            </h4>
          )}
          <LearnMoreButton
            pdfUrl={`equipments/pdfs/cerasp-equipment-master-list.pdf`}
            text={language === "fr" ? "Cliquez Ici" : "Click Here"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutEquipments;
