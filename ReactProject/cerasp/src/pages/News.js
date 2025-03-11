import "./css/Sectors.css";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";

const News = () => {
  useScrollToPanel();

  return (
    <div className="news scroll-container">
      {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <ScrollPanel title="news" id="overview">
        <p>OVERVIEW</p>
      </ScrollPanel>

      {/*   ============================
              =====Equipment Updates======
              ============================
        */}

      <ScrollPanel title="news" id="equipment-updates">
        <p>Equipment Updates</p>
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
              ======Webinars=======
              =====================
        */}

      <ScrollPanel title="news" id="webinars">
        <p>Webinars</p>
      </ScrollPanel>

      {/*   ===================
              ======Events=======
              ===================
        */}

      <ScrollPanel title="news" id="events">
        <p>Events</p>
      </ScrollPanel>

      {/*   =======================
              =====CONTACT FORM======
              =======================
        */}

      <ScrollPanel title="news" id="">
        <ContactUsForm />
      </ScrollPanel>

      <Footer />
    </div>
  );
};

export default News;
