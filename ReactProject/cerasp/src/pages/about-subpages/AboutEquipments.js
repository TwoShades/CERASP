import React, { useState, useEffect, useContext } from "react";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";
import "./css/AboutEquipments.css";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const AboutEquipments = () => {
  const [allEquipments, setAllEquipments] = useState([]);
  const [filteredEquipments, setFilteredEquipments] = useState([]);
  const [selectedSite, setSelectedSite] = useState("ALL");
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

        const cleaned = json.data.map((item) => ({
          id: item.id,
          name: item.Name || "",
          site: item.Site || "Unknown",
          photoUrl: item.Image?.url || "",
        }));

        setAllEquipments(cleaned);

        // Re-apply selected site filter
        if (selectedSite === "ALL") {
          setFilteredEquipments(cleaned);
        } else {
          setFilteredEquipments(
            cleaned.filter((eq) => eq.site === selectedSite)
          );
        }
      } catch (err) {
        console.error("Failed to fetch equipments:", err);
      }
    };

    fetchEquipments();
  }, [language, selectedSite]);

  const handleSiteChange = (site) => {
    setSelectedSite(site);
    setCurrentPage(1);

    if (site === "ALL") {
      setFilteredEquipments(allEquipments);
    } else {
      setFilteredEquipments(allEquipments.filter((eq) => eq.site === site));
    }
  };

  const itemsPerPage = isMobile ? 2 : isTablet ? 2 : 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEquipments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredEquipments.length / itemsPerPage)) {
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

      {/* Site Filter Buttons */}
      <div className="equipment-site-filters">
        {["ALL", "JAC", "GG", "CERASP"].map((site) => (
          <label key={site}>
            <input
              type="radio"
              name="site"
              value={site}
              checked={selectedSite === site}
              onChange={() => handleSiteChange(site)}
            />
            {site}
          </label>
        ))}
      </div>

      <div className="about-equipments">
        <div className="about-equipments-images">
          {currentItems.map((equipment) => (
            <div
              key={equipment.id}
              className="equipment-card"
              onClick={() => {
                if (equipment.photoUrl) {
                  window.open(equipment.photoUrl, "_blank");
                }
              }}
            >
              {equipment.photoUrl ? (
                <img
                  src={equipment.photoUrl}
                  alt={equipment.name}
                  className="equipment-image-full"
                />
              ) : (
                <div className="no-image-placeholder">No image available</div>
              )}
              <div className="equipment-card-footer">
                <h4>{equipment.name}</h4>
              </div>
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
              currentPage >= Math.ceil(filteredEquipments.length / itemsPerPage)
            }
            className="pagination-arrow"
          >
            &gt;
          </button>
        </div>

        <div className="equipment-master-list">
          <h4 className="equipment-master-list-title">
            {language === "fr"
              ? "Liste complète de l'équipement"
              : "Comprehensive List of Equipment"}
          </h4>
          <Link
            to="/equipment-list"
            className="learn-more-button"
            style={{ textDecoration: "none" }}
          >
            {language === "fr" ? "Cliquez Ici" : "Click Here"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutEquipments;
