import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import "./Pages-css/EquipmentsMasterList.css";
import SubPageHeader from "../components/layouts/SubPageHeader";
import { LanguageContext } from "../contexts/LanguageContext";
import scrollToTop from "../utils/scrollToTop";
import { useLocation } from "react-router-dom";
import "./_css/Subpage.css";
import AnimateObject from "../components/uicomponents/AnimateObject";

export default function EquipmentByLocation() {
  const { language } = useContext(LanguageContext);
  const location = useLocation();
  const [equipmentList, setEquipmentList] = useState(
    location.state?.equipments || []
  );
  const [loading, setLoading] = useState(
    !location.state?.equipments
  );

  useEffect(() => {
    scrollToTop();

    if (!location.state?.equipments) {
      const fetchEquipments = async () => {
        try {
          const res = await fetch(
            `https://loving-bird-9ef3b0470a.strapiapp.com/api/equipments?&populate=PDF&populate=Image&pagination[page]=1&pagination[pageSize]=100`
          );
          const json = await res.json();

          const cleaned = json.data.map((item) => ({
            id: item.id,
            name: item.Name || "",
          }));

          setEquipmentList(cleaned);
          setLoading(false);
        } catch (err) {
          console.error("Failed to fetch equipments:", err);
        }
      };

      fetchEquipments();
    }
  }, []);

  if (loading) {
    return (
      <div className="page-content">
        Loading equipment data...
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="equipment-section">
        <AnimateObject
          variantsToRun={["slideLeft", "fadeIn"]}
          className="subpage-intro-grid"
        >
          <h1>
            {language === "fr"
              ? "LISTE DES ÉQUIPEMENTS"
              : "EQUIPMENT LIST"}
          </h1>
          <p>
            {language === "fr" ? (
              <p>
                Une vue d’ensemble de tout notre équipement.
              </p>
            ) : (
              <p>An overview of all our equipment.</p>
            )}
          </p>
        </AnimateObject>
        <ul className="equipment-items flat-list">
          {equipmentList.map((item) => (
            <li key={item.id} className="equipment-item">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
