import React, { useState } from "react";
import ModalMessage from "../uicomponents/ModalMessage";
import "./css/LearnMoreButton.css"; // Add your custom styling

const LearnMoreButton = ({ pdfUrl, text = "Learn More" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const handleOpenModal = () => setIsModalOpen(true); // Open modal
  const handleCloseModal = () => setIsModalOpen(false); // Close modal

  return (
    <div>
      {/* Learn More Button */}
      <div onClick={handleOpenModal} className="learn-more-button">
        {text}
      </div>

      {/* Modal for displaying PDF */}
      <ModalMessage
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        content={pdfUrl} // Pass PDF URL to the modal
      />
    </div>
  );
};

export default LearnMoreButton;
