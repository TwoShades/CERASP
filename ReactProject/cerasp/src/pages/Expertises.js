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
          parturient montes, nascetur ridiculus mus. Donec non quam sit amet
          risus pharetra porttitor eget eu enim. Suspendisse a risus a felis
          pharetra scelerisque. Phasellus vitae tristique felis. Cras fringilla
          ullamcorper pretium. Pellentesque eget ligula sollicitudin, fermentum
          lectus id, lacinia purus. Fusce fermentum, sem a scelerisque semper,
          enim tellus bibendum magna, id ornare ligula ex nec ipsum. Mauris
          sollicitudin neque porttitor nisl ullamcorper blandit. In pretium ex
          vel tortor pulvinar, eu facilisis nunc posuere. Nam ornare nibh id
          nunc pellentesque, eu rhoncus lectus maximus. In hac habitasse platea
          dictumst. Pellentesque hendrerit lorem sit amet urna dapibus, ac
          vehicula arcu ornare. Nullam a facilisis ligula. Duis aliquam, leo a
          suscipit porta, orci mauris viverra neque, sed malesuada sapien velit
          sit amet est. Cras molestie porttitor bibendum. Ut pulvinar libero a
          lobortis pharetra. Donec consequat felis nec tellus vestibulum, a
          laoreet augue sodales. Integer eget imperdiet ipsum. Phasellus
          eleifend, metus eget dapibus convallis, ante felis congue eros, a
          scelerisque metus dolor quis neque. Phasellus ultrices metus eros, in
          aliquet justo luctus in. Nunc nec lorem vel nunc sagittis cursus vel
          et nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam
          sodales eleifend diam, sed rhoncus odio dignissim fringilla. Curabitur
          mattis dolor hendrerit justo interdum laoreet. Praesent accumsan
          scelerisque nisl, tristique congue sapien ornare et. Proin pharetra,
          urna et feugiat dictum, sem nunc accumsan nulla, eu facilisis sapien
          purus ac mi. Vivamus ac augue fringilla diam accumsan hendrerit. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </ScrollPanel>
      <Footer />
    </div>
  );
};

export default Expertises;
