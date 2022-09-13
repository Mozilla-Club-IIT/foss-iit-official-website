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
  const firstRenderRef = useRef(true);

  // What type is this supposed to be?
  const prevSlide = (e: MouseEvent) => {
    e.preventDefault();

    setCurrentIndex((prevState) => {
      return (prevState === 0) ? (props.children.length - 1) : (prevState - 1);
    });
  }

  const nextSlide = (e: MouseEvent) => {
    e.preventDefault();

    setCurrentIndex((prevState) => {
      return (prevState === (props.children.length - 1)) ? 0 : (prevState + 1);
    });
  }

  useEffect(() => {
    // Check if this is the first render
    if (!firstRenderRef.current) {
      // Use a native DOM method to scroll to the current slide
      slidesRef.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    } else {
      firstRenderRef.current = false;

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
    }
  }, [currentIndex]);

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