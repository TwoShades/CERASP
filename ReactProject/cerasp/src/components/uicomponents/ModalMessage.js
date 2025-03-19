// components/ModalMessage.js
import React from "react";
import Modal from "react-modal";

const ModalMessage = ({ isOpen, onRequestClose, content }) => {
  // Check if the content is a PDF (assuming content is the file path or URL)
  const isPdf = content && content.endsWith(".pdf");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Learn More Modal"
      style={{
        overlay: { backgroundColor: "rgba(200, 242, 255, 0.5)" },
        content: {
          width: "65%",
          height: "70%",
          margin: "auto",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          overflow: "auto",
          scrollbar: "none", // Allow scrolling for large PDFs
        },
      }}
    >
      {/* If it's a PDF, embed it */}
      {isPdf ? (
        <embed src={content} width="100%" height="95%" type="application/pdf" />
      ) : (
        <h2>{content}</h2>
      )}

      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ModalMessage;
