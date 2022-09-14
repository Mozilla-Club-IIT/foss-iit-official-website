import { MouseEvent, useEffect, useRef, useState } from "react";
import Styles from "../scss/Carousel.module.scss";

import {
  BsArrowRight,
  BsArrowLeft,
} from "react-icons/bs";

type propType = {
  children: JSX.Element[]
};

function Carousel(props: propType) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  const prevSlide = (e: MouseEvent) => {
    e.preventDefault();

    setCurrentSlide((prevState) => {
      const slideNum = (prevState === 0) ? (props.children.length - 1) : (prevState - 1);
      return slideNum;
    });
  }

  const nextSlide = (e: MouseEvent) => {
    e.preventDefault();

    setCurrentSlide((prevState) => {
      const slideNum = (prevState === (props.children.length - 1)) ? 0 : (prevState + 1);
      return slideNum;
    });
  }

  useEffect(() => {
    if (cardContainerRef.current) {
      const slideLength = Math.round((cardContainerRef.current.scrollWidth / props.children.length));
      const slideLeft = slideLength * currentSlide;
      cardContainerRef.current.scrollTo({ top: 0, left: slideLeft, behavior: "smooth" });
    }
  }, [currentSlide, props.children]);

  return (
    <div className={Styles.carousel}>
      <button className={Styles.carouselButton} onClick={prevSlide}>
        <BsArrowLeft />
      </button>
      <div
        ref={(ref) => {
          if (ref) {
            cardContainerRef.current = ref;
          }
        }}
        className={Styles.cardContainer}>
        {props.children}
      </div>
      <button className={Styles.carouselButton} onClick={nextSlide}>
        <BsArrowRight />
      </button>
    </div>
  );
}

export default Carousel;