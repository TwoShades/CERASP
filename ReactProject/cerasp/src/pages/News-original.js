import React, { useState } from "react";
import "./Pages-css/Sectors.css";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import ModalMessage from "../components/uicomponents/ModalMessage.js"; // Import the Modal
import TestPanel from "../components/panels/TestPanel.js"; // Import the TestPanel component

const NewsOriginal = () => {
  useScrollToPanel();

  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleOpenModal = () => setIsModalOpen(true); // Open the modal
  const handleCloseModal = () => setIsModalOpen(false); // Close the modal

  return (
    <div className="news scroll-container">
      {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <ScrollPanel title="news" id="overview">
        <TestPanel />
      </ScrollPanel>

      {/*   ============================
              =====Equipment Updates======
              ============================
        */}

      <ScrollPanel title="news" id="equipment-updates">
        <p>Equipment Updatesk</p>
        {/* Button to trigger the modal */}
        <button onClick={handleOpenModal}>Open Modal</button>
      </ScrollPanel>

      {/*   =====================
              =====New Grants======
              =====================
        */}

      <ScrollPanel title="news" id="new-grants">
        <p>New Grants</p>
      </ScrollPanel>

      {/*   =====================================
              =======Blogs & white papers==========
              =====================================
        */}

      <ScrollPanel title="news" id="blogs-&-white-papers">
        <p>Blogs & white papers</p>
      </ScrollPanel>

      {/*   =====================
              =====Webinars=======
              =====================
        */}

      <ScrollPanel title="news" id="webinars">
        <p>Webinars</p>
      </ScrollPanel>

      {/*   ===================
              =====Events=======
              ===================
        */}

      <ScrollPanel title="news" id="events">
        <p>Events</p>
      </ScrollPanel>

      {/*   =======================
              =====CONTACT FORM======
              =======================
        */}

      <ScrollPanel title="news" id="contact-us-form">
        <ContactUsForm />
      </ScrollPanel>

      <Footer />

      {/* Modal Message */}
      <ModalMessage
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        message="This is a simple modal message!"
      />
    </div>
  );
};

export default NewsOriginal;
