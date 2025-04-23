import useEmblaCarousel from "embla-carousel-react";
import "./css/EmblaSinglePanel.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

const EmblaSinglePanel = ({ slides, options, renderSlide }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla-single">
      <div className="embla__viewport-single" ref={emblaRef}>
        <div className="embla__container-single">
          {slides.map((slide, index) => (
            <div className="embla__slide-single" key={index}>
              {renderSlide ? renderSlide(slide) : <div>{slide}</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaSinglePanel;
