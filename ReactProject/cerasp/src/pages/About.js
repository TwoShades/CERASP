import { useEffect, useState } from "react";
import axios from "axios";
import Employee from "../components/Employee.js";
import Footer from "../components/Footer.js";
import ScrollPanel from "../components/ScrollPanel";
import EmblaCarousel from "../components/EmblaCarousel.js";
import SideBySidePanel from "../components/SideBySidePanel";
import "./css/About.css";

const About = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const slides = [0, 1, 2, 3, 4];
  const options = { loop: true };

  useEffect(() => {
    axios
      .get(
        "https://victorious-luck-26690475b0.strapiapp.com/api/employees?populate=image"
      )
      .then((response) => {
        setTeam(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="scroll-container">
        <ScrollPanel colorTheme="themeA">
          <SideBySidePanel
            leftContent={<h3>Banner</h3>}
            rightContent={
              <>
                <h2>Welcome to CERASP</h2>
                <p>
                  CERASP is dedicated to innovation and collaboration. Our
                  mission is to foster cutting-edge research and provide a hub
                  for creative problem-solving.
                </p>
              </>
            }
          />
        </ScrollPanel>

        <ScrollPanel colorTheme="themeB">
          <div className="content-container">
            <div className="image-container">
              <img src="https://via.placeholder.com/400" alt="Placeholder" />
            </div>
            <div className="text-container">
              <h2>Our Story</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
                malesuada. Donec in tortor id lacus fringilla tempor nec non ex.
              </p>
            </div>
          </div>
        </ScrollPanel>

        <ScrollPanel colorTheme="themeA">
          <div className="three-column-container">
            <div className="column">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="column">
              <h3>Column 2</h3>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere.
              </p>
            </div>
            <div className="column">
              <h3>Column 3</h3>
              <p>
                Cras suscipit, velit eget posuere mattis, metus lacus convallis
                est.
              </p>
            </div>
          </div>
        </ScrollPanel>

        <ScrollPanel colorTheme="themeB">
          <div className="team-section">
            <h2>Team</h2>
            <div className="team-container">
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error}</p>}
              {team.map((member) => (
                <Employee key={member.id} member={member} />
              ))}
            </div>
          </div>
        </ScrollPanel>

        <ScrollPanel colorTheme="themeA">
          <div className="facilities-section">
            <h2>Facilities</h2>
            <EmblaCarousel slides={slides} options={options} />
          </div>
        </ScrollPanel>

        <ScrollPanel colorTheme="themeB">
          <h2>Board</h2>
        </ScrollPanel>

        <ScrollPanel colorTheme="themeA">
          <div className="text-container">
            <h2>Join Our Team</h2>
            <p>
              We’re always looking for passionate individuals to join us. If
              you’re excited about innovation and teamwork, we’d love to hear
              from you.
            </p>
            <button className="cta-button">Learn More</button>
          </div>
        </ScrollPanel>

        <ScrollPanel colorTheme="themeB">
          <h2>Video about CERASP</h2>
        </ScrollPanel>

        <ScrollPanel colorTheme="themeA">
          <h2>Privacy policy</h2>
        </ScrollPanel>

        <Footer />
      </div>
    </div>
  );
};

export default About;
