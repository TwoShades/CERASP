import React from "react";
import "./css/ExpertiseAnimal.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";

const ExpertiseAnimal = ({ className = "" }) => {
    return (
        <div className={`two-image-two-text ${className}`}>
            <div className="image-left-panel">
                <div className="image-placeholder">
                    <StockImageFetch
                    searchTerm="dog"
                    imgSource="large"
                    orientation="landscape"
                    page={1}
                    perPage={1}
                    />
            </div>
            </div>
            <div className="text-left-panel">
                <p>
                    ANIMAL HEALTH,
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur. Pharetra id sapien quam
                    diam purus euismod tincidunt morbi. Gravida ut nulla tincidunt mi
                    eu velit pharetra. In consectetur sed aliquam placerat donec
                    convallis feugiat pellentesque. Viverra quis etiam ut nulla
                    senectus neque nulla mi non.
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
                    NHP & NUTRACEUTICALS,
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur. Pharetra id sapien quam
                    diam purus euismod tincidunt morbi. Gravida ut nulla tincidunt mi
                    eu velit pharetra. In consectetur sed aliquam placerat donec
                    convallis feugiat pellentesque. Viverra quis etiam ut nulla
                    senectus neque nulla mi non.
                </p>
            </div>
        </div>
    );
};

export default ExpertiseAnimal;