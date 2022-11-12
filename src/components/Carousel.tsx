import { MouseEvent, UIEvent, useEffect, useRef, useState } from "react";
import Styles from "../scss/Carousel.module.scss";

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

type propType = {
  children: JSX.Element[];
};

function Carousel(props: propType) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [forceEffect, setForceEffect] = useState(true);

  // A Ref to the actual HTML DOM Element
  // This is needed to use native DOM methods
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  // Event handler for carousel button
  const prevSlide = (e: MouseEvent) => {
    e.preventDefault();

    setCurrentSlide((prevState) => {
      // Roll to the last slide if current slide is the first one
      const slideNum =
        prevState === 0 ? props.children.length - 1 : prevState - 1;
      return slideNum;
    });
  };

  // Event handler for carousel button
  const nextSlide = (e: MouseEvent) => {
    e.preventDefault();

    setCurrentSlide((prevState) => {
      // Roll the first slide if current slide is the last one
      const slideNum =
        prevState === props.children.length - 1 ? 0 : prevState + 1;
      return slideNum;
    });
  };

  // Event handler for swipes
  const swipeSlide = (e: UIEvent) => {
    if (cardContainerRef.current) {
      // Compute slide length
      const slideLength = Math.round(
        cardContainerRef.current.scrollWidth / props.children.length
      );

      // Compute current slide number based on scroll position
      const slideNum = Math.round(
        cardContainerRef.current.scrollLeft / slideLength
      );

      setCurrentSlide(slideNum);

      // Hack to force the useEffect hook to fire even if currentSlide doesn't change
      setForceEffect((prevState) => {
        return !prevState;
      });
    }
  }

  useEffect(() => {
    if (cardContainerRef.current) {
      // Compute slide length
      const slideLength = Math.round(
        cardContainerRef.current.scrollWidth / props.children.length
      );

      // Distance (px) to scroll
      const slideLeft = slideLength * currentSlide;

      // Native DOM method that can scroll a view
      cardContainerRef.current.scrollTo({
        top: 0,
        left: slideLeft,
        behavior: "smooth",
      });
    }
  }, [currentSlide, forceEffect, props.children]);

  return (
    <div className={Styles.container}>
      <div>{currentSlide}</div>
      <div className={Styles.carousel}>
        <button className={Styles.carouselButton} onClick={prevSlide}>
          <MdArrowBackIos />
        </button>
        <div
          ref={(ref) => {
            if (ref) {
              cardContainerRef.current = ref;
            }
          }}
          className={Styles.cardContainer}
          onTouchEnd={swipeSlide}
        >
          {props.children}
        </div>
        <button className={Styles.carouselButton} onClick={nextSlide}>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
