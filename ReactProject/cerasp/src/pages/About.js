import { useEffect, useState } from "react";
import axios from "axios";
import Employee from "../components/Employee.js";
import Footer from "../components/Footer.js";
import ScrollPanel from "../components/ScrollPanel";
import EmblaCarousel from "../components/EmblaCarousel.js";
import "./About.css";

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
        <ScrollPanel className="scroll-panel dark-blue">
          <h2>History</h2>
        </ScrollPanel>

        <ScrollPanel className="scroll-panel light-blue">
          <h2>Mission/Vision/Values</h2>
        </ScrollPanel>

        <ScrollPanel className="scroll-panel dark-blue">
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

        <ScrollPanel className="scroll-panel light-blue">
          <div className="facilities-section">
            <h2>Facilities</h2>
            <EmblaCarousel slides={slides} options={options} />
          </div>
        </ScrollPanel>

        <ScrollPanel className="scroll-panel dark-blue">
          <h2>Board</h2>
        </ScrollPanel>

        <ScrollPanel className="scroll-panel light-blue">
          <h2>Partners</h2>
        </ScrollPanel>

        <ScrollPanel className="scroll-panel dark-blue">
          <h2>Video about CERASP</h2>
        </ScrollPanel>

        <ScrollPanel className="scroll-panel light-blue">
          <h2>Privacy policy</h2>
        </ScrollPanel>

        <Footer />
      </div>
    </div>
  );
};

export default About;
