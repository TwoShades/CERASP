import React, { useContext, useEffect } from "react";
import "./Pages-css/EquipmentsMasterList.css";
import SubPageHeader from "../components/layouts/SubPageHeader";
import { LanguageContext } from "../contexts/LanguageContext";
import scrollToTop from "../utils/scrollToTop";

const EquipmentsMasterList = [
  {
    location: {
      en: "CERASP",
      fr: "CERASP",
    },
    equipments: {
      en: [
        "DLS Digital Light Scattering Zetasizer Advance Series Pro (Red)",
        "Agilent 1260 Infinity II HPLC-DAD System",
        "VWR® Double Beam UV-Vis Spectrophotometer-UV-6300PC",
        "ECO Air-Cooled Refrigerated Circulators (ECO RE 415S), Lauda-Brinkmann - 4L",
        "Loss on Drying – Thermobalance – MA 30 – Satorius",
        "Water Activity Measurement (aw) – AQUALAB TDL2 – Meter Food",
        "Double Jacketed Glass Vessel (2 or 4 Liters) – Chemglass",
        "Color Measurement – Spectrocolorimeter – RM200QC – Pantone",
        "Karl Fischer Volumetric Titrator V20S",
        "GEA Ultimapro 25 Single – Pot Processor",
        "Biomek i5 Automated Workstation & Tecan – Spark 10M (96/384 WP)",
      ],
      fr: [
        "DLS Diffusion de la lumière – Zetasizer Advance Series Pro (Rouge)",
        "Système HPLC-DAD Agilent 1260 Infinity II",
        "Spectrophotomètre UV-Vis à double faisceau VWR® UV-6300PC",
        "Circulateur réfrigéré à air ECO RE 415S – Lauda-Brinkmann – 4L",
        "Détermination de la perte au séchage – Thermobalance MA 30 – Satorius",
        "Mesure de l'activité de l'eau (aw) – AQUALAB TDL2 – Meter Food",
        "Réacteur double enveloppe en verre (2 ou 4 litres) – Chemglass",
        "Mesure de la couleur – Spectrocolorimètre – RM200QC – Pantone",
        "Titrateur volumétrique Karl Fischer V20S",
        "GEA Ultimapro 25 Single – Pot Processor",
        "Biomek i5 & Tecan Spark 10M (plaques 96/384 puits)",
      ],
    },
  },
  {
    location: {
      en: "Gérald-Godin",
      fr: "Gérald-Godin",
    },
    equipments: {
      en: [
        "Semi-automatic Capsule Filling Machine",
        "IMACO Sigma P Tube-filler",
        "SARONG Blister Filling",
        "Filling line – Galenic Liquids",
        "Bottling line – Galenic Solids",
        "AKTA FLUX – Filtration Hardware",
        "AKTA PURE – Protein Purification System",
        "SUPERSCAN MICRO – Metal Detection",
        "Manesty Xsprss Press with 8 Punch & Die Sets",
        "Petri Dish Filling System",
        "Hi Shear Granulator Mycromix",
        "Drying Bed",
        "Retsch Fluid Bed TG-200 + 6L Gas Container",
        "FACF Automatic Capsule Filling Machine",
        "Low-Capacity Dry Granulation",
        "Capsule Polishing Machine",
        "High Performance Film Coating Systems",
        "Wilden Diaphragm Pump P2",
        "Pig Tail Pump – Flux",
        "Waukesha Lobe Pump Univ. 2 Mod.006",
        "Graco Monark 207-550 Sanitary Piston Pump",
        "AVERY Labeler LS330R + Thermal Coder OPEN Date 53E",
        "IMACO Sigma P Tube Filler",
        "CE Tyler Particle Sizing Sieves MESH 8-40-60-80-100",
        "Erweka Oscillating Granulator",
        "Cryoscope Mode 4250 – Advanced Instruments",
        "Osmometer Mode 3250 – Advanced Instruments",
        "MINIFOR Bioreactor #800010-1",
        "AGILTRON PinPointer Spectrometer",
        "Versa Monoblock Vial Filler",
        "Fluidized Bed Granulator",
        "Scraper Mixer",
        "Vertical Electrophoresis Bath",
        "Growth Chamber",
        "Vial Lyophilizer",
      ],
      fr: [
        "Machine semi-automatique de remplissage de capsules",
        "Remplisseuse de tubes IMACO Sigma P",
        "Remplisseuse de blisters SARONG",
        "Ligne de remplissage – Liquides galéniques",
        "Ligne d'embouteillage – Solides galéniques",
        "AKTA FLUX – Système de filtration",
        "AKTA PURE – Système de purification des protéines",
        "SUPERSCAN MICRO – Détection de métaux",
        "Presse Manesty Xsprss avec 8 jeux de poinçons et matrices",
        "Système de remplissage de boîtes de Pétri",
        "Granulateur à cisaillement élevé Mycromix",
        "Lit de séchage",
        "Lit fluidisé Retsch TG-200 + récipient de gaz 6L",
        "Machine automatique de remplissage de capsules FACF",
        "Granulation sèche faible capacité",
        "Machine de polissage de capsules",
        "Systèmes de pelliculage haute performance",
        "Pompe à diaphragme Wilden P2",
        "Pompe queue de cochon – Flux",
        "Pompe à lobe Waukesha Univ. 2 Mod.006",
        "Pompe à piston sanitaire Graco Monark 207-550",
        "Étiqueteuse AVERY LS330R + Codeur thermique OPEN Date 53E",
        "Entubeuse IMACO Sigma P",
        "Tamis CE Tyler – Tailles de particules MESH 8-40-60-80-100",
        "Granulateur oscillant Erweka",
        "Cryoscope Modèle 4250 – Advanced Instruments",
        "Osmomètre Modèle 3250 – Advanced Instruments",
        "Bioréacteur MINIFOR #800010-1",
        "Spectromètre AGILTRON PinPointer",
        "Remplisseuse de flacons Versa Monoblock",
        "Granulateur à lit fluidisé",
        "Mélangeur à racloire",
        "Bain d’électrophorèse vertical",
        "Chambre de croissance",
        "Lyophilisateur à fioles",
      ],
    },
  },
];

export default function EquipmentByLocation() {
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    scrollToTop();
  }, []);

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
          {EquipmentsMasterList.map((site, index) => (
            <div key={index} className="equipment-location">
              <h5 className="location-title">{site.location[language]}</h5>
              <ul className="equipment-items">
                {site.equipments[language].map((item, idx) => (
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
