import React, { useContext, useEffect, useState } from "react";
import "./Pages-css/EquipmentsMasterList.css";
import SubPageHeader from "../components/layouts/SubPageHeader";
import { LanguageContext } from "../contexts/LanguageContext";
import scrollToTop from "../utils/scrollToTop";
import { useLocation } from "react-router-dom";

export default function EquipmentByLocation() {
  const { language } = useContext(LanguageContext);
  const location = useLocation();
  const [EquipmentMasterList, setEquipmentMasterList] = useState(
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
            site: item.Site || "Unknown",
          }));

          setEquipmentMasterList(cleaned);
          setLoading(false);
        } catch (err) {
          console.error("Failed to fetch equipments:", err);
        }
      };

      fetchEquipments();
    }
  }, []);

  const groupedBySite = EquipmentMasterList.reduce((acc, item) => {
    const site = item.site || "Unknown";
    if (!acc[site]) acc[site] = [];
    acc[site].push(item.name);
    return acc;
  }, {});

  if (loading) {
    return <div className="page-content">Loading equipment data...</div>;
  }

  return (
    <div className="page-content">
      <div className="equipment-section">
        <SubPageHeader
          name={
            language === "fr" ? "ÉQUIPEMENTS PAR SITE" : "EQUIPMENT BY LOCATION"
          }
          extraContent={
            language === "fr" ? (
              <h4>
                Une vue d’ensemble de nos équipements répartis entre CERASP et
                Gérald-Godin.
              </h4>
            ) : (
              <h4>
                An overview of our equipment distributed between CERASP and
                Gérald-Godin.
              </h4>
            )
          }
        />
        <div className="equipment-list">
          {Object.entries(groupedBySite).map(([site, items]) => (
            <div key={site} className="equipment-location">
              <h5 className="location-title">{site}</h5>
              <ul className="equipment-items">
                {items.map((item, idx) => (
                  <li key={idx} className="equipment-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
