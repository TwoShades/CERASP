import EmblaCarousel from "../components/EmblaCarousel";

const Expertises = () => {
  const slides = [0, 1, 2, 3, 4];
  const options = { loop: true };
  return (
    <>
      <EmblaCarousel slides={slides} options={options} />
    </>
  );
};

export default Expertises;
