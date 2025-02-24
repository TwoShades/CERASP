import EmblaCarousel from "../components/EmblaCarousel";
import ScrollPanel from "../components/ScrollPanel";
import Footer from "../components/Footer";
import "./css/Expertises.css";

const Expertises = () => {
  const slides = [0, 1, 2, 3, 4];
  const options = { loop: true };
  return (
    <div className="expertises scroll-container">
      <ScrollPanel className="scroll-panel">
        <EmblaCarousel slides={slides} options={options} />
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
          ultrices posuere cubilia curae; Vestibulum rhoncus leo nec ultrices
          faucibus. Nullam gravida ex augue, ac eleifend quam ultrices blandit.
          Duis ut elit quis sem placerat venenatis et nec lectus. Phasellus in
          placerat mi. Mauris finibus felis a turpis elementum, nec auctor orci
          volutpat. In ut mauris dolor. Nullam laoreet, mi id dapibus consequat,
          est purus maximus massa, a euismod elit felis ac ex. Ut viverra lorem
          libero, id elementum dolor varius ut. Etiam et dolor et nibh faucibus
          sollicitudin a vitae nisi. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </p>
      </ScrollPanel>
      <Footer />
    </div>
  );
};

export default Expertises;
