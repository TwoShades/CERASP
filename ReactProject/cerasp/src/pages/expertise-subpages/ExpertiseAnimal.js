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
        <div className={`expertise-container ${className}`}>
            <div className="expertise-section">
                <div className="expertise-image">
                    <StockImageFetch
                        searchTerm="kitten"
                        imgSource="large"
                        orientation="landscape"
                        page={1}
                        perPage={1}
                    />
                </div>
                <div className="expertise-text">
                    <h2>{animal.title[language].toUpperCase()}</h2>
                    <p>{animal.content[language]}</p>
                </div>
            </div>

            <div className="expertise-section">
                <div className="expertise-image">
                    <StockImageFetch
                        searchTerm="pills"
                        imgSource="large"
                        orientation="landscape"
                        page={1}
                        perPage={1}
                    />
                </div>
                <div className="expertise-text">
                    <h2>{nhp.title[language].toUpperCase()}</h2>
                    <p>{nhp.content[language]}</p>
                </div>
            </div>
        </div>
    );
};

export default ExpertiseAnimal;
