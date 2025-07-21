import React, { useContext, useEffect, useState } from "react";
import "./Pages-css/EquipmentsMasterList.css";
import SubPageHeader from "../components/layouts/SubPageHeader";
import { LanguageContext } from "../contexts/LanguageContext";
import scrollToTop from "../utils/scrollToTop";
import { useLocation } from "react-router-dom";

export default function EquipmentByLocation() {
  const { language } = useContext(LanguageContext);
  const location = useLocation();
  const [equipmentList, setEquipmentList] = useState(
    location.state?.equipments || []
  );
  const [loading, setLoading] = useState(!location.state?.equipments);

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
    return <div className="page-content">Loading equipment data...</div>;
  }

  return (
    <div className="page-content">
      <div className="equipment-section">
        <SubPageHeader
          name={language === "fr" ? "LISTE DES ÉQUIPEMENTS" : "EQUIPMENT LIST"}
          extraContent={
            language === "fr" ? (
              <h4>Une vue d’ensemble de tout notre équipement.</h4>
            ) : (
              <h4>An overview of all our equipment.</h4>
            )
          }
        />
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
