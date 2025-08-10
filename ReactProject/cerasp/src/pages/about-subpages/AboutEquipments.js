import React, {
  useState,
  useEffect,
  useContext,
} from "react";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";
import "./css/AboutEquipments.css";
import "../_css/Subpage.css";
import AnimateObject from "../../components/uicomponents/AnimateObject";
import ContactCTA from "../../components/interactables/ContactCTA";

const AboutEquipments = () => {
  const [allEquipments, setAllEquipments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet } = useContext(
    ScreenSizeContext
  );

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const res = await fetch(
          `https://loving-bird-9ef3b0470a.strapiapp.com/api/equipments?&populate=PDF&populate=Image&pagination[page]=1&pagination[pageSize]=100`
        );
        const json = await res.json();

        const cleaned = json.data
          .map((item) => ({
            id: item.id,
            name: item.Name || "",
            site: item.site || "Unknown",
            photoUrl: item.Image?.url || "",
          }))
          .sort((a, b) =>
            a.name.localeCompare(
              b.name,
              language === "fr" ? "fr" : "en",
              {
                sensitivity: "base",
              }
            )
          );

        setAllEquipments(cleaned);
      } catch (err) {
        console.error("Failed to fetch equipments:", err);
      }
    };

    fetchEquipments();
  }, [language]);

  const itemsPerPage = isMobile ? 2 : isTablet ? 2 : 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allEquipments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const nextPage = () => {
    if (
      currentPage <
      Math.ceil(allEquipments.length / itemsPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="subpage-overview">
      <div
        className="layout-panel-5 narrow"
        style={{ zIndex: 0 }}
      ></div>
      <AnimateObject
        variantsToRun={["slideLeft", "fadeIn"]}
        className="subpage-intro-grid"
      >
        <h1>
          {language === "fr" ? "ÉQUIPEMENT" : "EQUIPMENT"}
        </h1>
        <p>
          {language === "fr"
            ? "Découvrez notre équipement de pointe"
            : "Discover our cutting edge equipment"}
        </p>
      </AnimateObject>
      <AnimateObject
        variantsToRun={["slowFadeIn"]}
        className="about-equipments-images"
      >
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
              <div className="no-image-placeholder">
                No image available
              </div>
            )}
            <div className="equipment-card-footer">
              <h4>{equipment.name}</h4>
            </div>
          </div>
        ))}
      </AnimateObject>

      {allEquipments.length > 0 && (
        <>
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
                currentPage >=
                Math.ceil(
                  allEquipments.length / itemsPerPage
                )
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
              state={{ equipments: allEquipments }}
            >
              {language === "fr"
                ? "Cliquez Ici"
                : "Click Here"}
            </Link>
          </div>
        </>
      )}
    </main>
  );
};

export default AboutEquipments;
