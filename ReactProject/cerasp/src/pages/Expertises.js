import EmblaCarousel from "../components/interactables/EmblaCarousel.js";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import "./css/Expertises.css";
import TextPanelOneImage from "../components/panels/TextPanelOneImage.js";
import CenteredFeaturePanel from "../components/panels/CenteredFeaturePanel.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";

const Expertises = () => {
  // Temporary values for carousel
  const slides = [0, 1, 2, 3, 4];
  const options = { loop: true };

  return (
    <div className="expertises scroll-container">
      <ScrollPanel className="scroll-panel">
        <div className="overview-panel">
          <h1>OVERVIEW</h1>
          <EmblaCarousel
            className="carousel"
            slides={slides}
            options={options}
          />
        </div>
      </ScrollPanel>

      <ScrollPanel className="scroll-panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
          tortor convallis, malesuada nibh sed, consequat mauris. Ut congue
          gravida varius. Cras consequat, orci ac dictum venenatis, sem mauris
          aliquet risus, a maximus libero turpis sit amet sapien. Quisque
          consequat cursus purus sed finibus. Maecenas magna nisl, mattis at
          varius quis, gravida id sem. Nullam scelerisque leo pulvinar interdum
          pretium. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae;
        </p>
      </ScrollPanel>

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <TextPanelOneImage
          leftContent={
            <>
              <a href="#">Lorem ipsum</a>
              <h1>
                Lorem ipsum dolor sit amet consectetur. Etiam diam nisi eget
                mauris massa aliquam.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Pharetra id sapien quam
                diam purus euismod tincidunt morbi. Gravida ut nulla tincidunt
                mi eu velit pharetra. In consectetur sed aliquam placerat donec
                convallis feugiat pellentesque. Viverra quis etiam ut nulla
                senectus neque nulla mi non.
              </p>
            </>
          }
          rightContent={<div className="image-section"></div>}
        />
      </ScrollPanel>

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <CenteredFeaturePanel
          title="Lorem Ipsum Dolor"
          image={<div className="image-placeholder"></div>}
          features={[
            {
              title: "Lorem Ipsum",
              text: "Potter ipsum wand elf parchment wingardium. Second half-blood easy holly mrs turns hedwig butter. Nearly-headless fat lily flat hair.",
            },
            {
              title: "Lorem Ipsum",
              text: "Potter ipsum wand elf parchment wingardium. Second half-blood easy holly mrs turns hedwig butter. Nearly-headless fat lily flat hair.",
            },
            {
              title: "Lorem Ipsum",
              text: "Potter ipsum wand elf parchment wingardium. Second half-blood easy holly mrs turns hedwig butter. Nearly-headless fat lily flat hair.",
            },
          ]}
        />
      </ScrollPanel>

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <ContactUsForm />
      </ScrollPanel>

      <Footer />
    </div>
  );
};

export default Expertises;
