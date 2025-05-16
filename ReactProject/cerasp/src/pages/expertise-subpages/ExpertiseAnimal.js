import React, { useContext } from "react";
import "./css/ExpertiseAnimal.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";

const ExpertiseAnimal = ({ className = "" }) => {
    const { language } = useContext(LanguageContext);
    const animal = expertiseTranslations.animal_health;
    const nhp = expertiseTranslations.nhp_nutraceuticals;

    return (
        <div className={`two-image-two-text ${className}`}>
            <div className="image-left-panel">
                <div className="image-placeholder">
                    <StockImageFetch
                    searchTerm="kitten"
                    imgSource="large"
                    orientation="landscape"
                    page={1}
                    perPage={1}
                    />
            </div>
            </div>
            <div className="text-left-panel">
                <p>
                    {animal.title[language].toUpperCase()},
                    <br />
                    <br />
                    {animal.content[language]}
                </p>
            </div>
            <div className="image-right-panel">
                <div className="image-placeholder">
                    <StockImageFetch
                    searchTerm="rabbit"
                    imgSource="large"
                    orientation="landscape"
                    page={1}
                    perPage={1}
                    />
                </div>
            </div>
            <div className="text-right-panel">
                <p>
                    {nhp.title[language].toUpperCase()},
                    <br />
                    <br />
                    {nhp.content[language]}
                </p>
            </div>
        </div>
    );
};

export default ExpertiseAnimal;