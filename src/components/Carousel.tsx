import { MouseEvent, useEffect, useRef, useState } from "react";
import Styles from "../scss/Carousel.module.scss";

import {
  BsArrowRight,
  BsArrowLeft,
} from "react-icons/bs";

type propType = {
  children: JSX.Element[]
};

// An array of event/blog objects will be passed into the carousel as children
function Carousel(props: propType) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState<JSX.Element[]>([]);

  const slidesRef = useRef<HTMLDivElement[]>([]);

  // What type is this supposed to be?
  const prevSlide = (e: MouseEvent) => {
    e.preventDefault();

    setCurrentIndex((prevState) => {
      const slideNum = (prevState === 0) ? (props.children.length - 1) : (prevState - 1);
      scrollToSlide(slideNum);
      return slideNum;
    });
  }

  const nextSlide = (e: MouseEvent) => {
    e.preventDefault();

    setCurrentIndex((prevState) => {
      const slideNum = (prevState === (props.children.length - 1)) ? 0 : (prevState + 1);
      scrollToSlide(slideNum);
      return slideNum;
    });
  }

  function scrollToSlide(slideNum: number) {
    slidesRef.current[slideNum].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
  }

  useEffect(() => {
    // Wrap children inside slides
    setSlides(props.children.map((item: JSX.Element, index: number) => {
      return (
        <div
          key={index}
          ref={(ref) => {
            if (ref !== null) {
              slidesRef.current.push(ref);
            }
          }}
        >
          {item}
        </div>
      );
    }));
  }, [props.children]);

  return (
    <div className={Styles.carousel}>
      <button className={Styles.carouselButton} onClick={prevSlide}>
        <BsArrowLeft />
      </button>
      <div className={Styles.cardContainer}>
        {slides}
      </div>
      <button className={Styles.carouselButton} onClick={nextSlide}>
        <BsArrowRight />
      </button>
    </div>
  );
}

export default Carousel;